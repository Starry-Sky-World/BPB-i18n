import http from 'node:http';
import {Client} from 'itdog-web-api';

const port = Number.parseInt(process.env.PORT || '7860', 10);

const client = new Client();

const sendJson = (res, statusCode, payload) => {
    const body = JSON.stringify(payload, null, 2);
    res.writeHead(statusCode, {
        'content-type': 'application/json; charset=utf-8',
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'GET,POST,OPTIONS',
        'access-control-allow-headers': 'content-type',
    });
    res.end(body);
};

const readJsonBody = (req) => new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
        data += chunk;
        if (data.length > 2 * 1024 * 1024) {
            reject(new Error('Request body too large'));
            req.destroy();
        }
    });
    req.on('end', () => {
        if (!data) {
            resolve({});
            return;
        }
        try {
            resolve(JSON.parse(data));
        } catch {
            reject(new Error('Invalid JSON body'));
        }
    });
    req.on('error', (err) => reject(err));
});

const pickAPIResult = (result) => ({
    task_id: result.task_id,
    wss_url: result.wss_url,
    taskToken: result.taskToken,
});

const ipv4Regex = /\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g;
const ipv6Regex = /\b(?:(?:[A-Fa-f0-9]{1,4}:){2,7}[A-Fa-f0-9]{0,4}|::(?:[A-Fa-f0-9]{1,4}:){0,5}[A-Fa-f0-9]{1,4}|(?:[A-Fa-f0-9]{1,4}:){1,7}:)\b/g;

const collectIPsFromValue = (value, target) => {
    if (!value) {
        return;
    }
    if (typeof value === 'string') {
        for (const match of value.matchAll(ipv4Regex)) {
            target.add(match[0]);
        }
        for (const match of value.matchAll(ipv6Regex)) {
            target.add(match[0]);
        }
        return;
    }
    if (Array.isArray(value)) {
        for (const item of value) {
            collectIPsFromValue(item, target);
        }
        return;
    }
    if (typeof value === 'object') {
        for (const item of Object.values(value)) {
            collectIPsFromValue(item, target);
        }
    }
};

const collectResponseIPs = (values) => {
    const target = new Set();
    collectIPsFromValue(values, target);
    return [...target];
};

const runWS = async (runner) => {
    const messages = [];
    const final = await runner((data) => {
        messages.push(data);
    });
    return {
        result: pickAPIResult(final.result),
        response_ips: collectResponseIPs([messages, final?.result]),
        messages,
    };
};

const routes = {
    'POST /http': (body) => runWS((onMessage) => client.http(body, onMessage)),
};

const server = http.createServer(async (req, res) => {
    if (!req.url || !req.method) {
        sendJson(res, 400, {error: 'Invalid request'});
        return;
    }

    if (req.method === 'OPTIONS') {
        sendJson(res, 204, {});
        return;
    }

    if (req.method === 'GET' && req.url === '/') {
        sendJson(res, 200, {
            ok: true,
            service: 'itdog-web-api',
            endpoints: Object.keys(routes).map((key) => key.replace('POST ', '')),
        });
        return;
    }

    const routeKey = `${req.method} ${req.url}`;
    const handler = routes[routeKey];
    if (!handler) {
        sendJson(res, 404, {error: 'Not found'});
        return;
    }

    try {
        const body = await readJsonBody(req);
        const data = await handler(body);
        sendJson(res, 200, data);
    } catch (error) {
        sendJson(res, 400, {error: error instanceof Error ? error.message : 'Unknown error'});
    }
});

server.listen(port, () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
});
