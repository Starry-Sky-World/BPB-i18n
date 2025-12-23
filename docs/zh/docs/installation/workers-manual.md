# :material-new-box:{ .md .middle } Workers 手动安装

强烈建议使用 [向导安装](./wizard.md) 以避免 Cloudflare 1101 错误、减少操作失误并节省配置时间。

## 安装

### 1. 创建 Cloudflare 账号

如果没有 Cloudflare 账号，可从 [此处注册](https://dash.cloudflare.com/sign-up)。只需邮箱即可注册，建议使用 Gmail 等稳定邮箱。

### 2. 创建 Worker

先从 [这里下载 Worker 代码](https://github.com/bia-pain-bache/BPB-Worker-Panel/releases/latest/download/worker.js)。

在 Cloudflare 控制台进入 `Developer Platform`，点击 `Create application`，在 `Workers` 里选择 `Start with Hello World!` 并点击 `Get started`。

输入一个名称（将作为面板域名的一部分）并 `Deploy`。

!!! danger
    名称不要包含 `bpb`，可能触发 Cloudflare 检测导致 `1101` 错误。

点击 `Edit code`。在左侧删除 `worker.js` 并上传新的文件。如果报错，删除 `package-lock.json` 后重试。代码较大，不建议手机直接复制粘贴。请参考图示，在移动端打开侧栏、长按 Explorer 并选择 `Upload...`。

![移动端上传](../images/worker-mobile-upload.jpg)

最后点击 `Deploy`。

!!! tip
    面板更新流程相同：删除旧文件、上传新文件并部署。原有设置会保留，只更新面板代码。

在控制台顶部点击 `Visit`。页面会提示需要先设置 UUID 与 Trojan 密码，并给出 Secrets generator 链接。打开该链接并保留以便下一步使用。

![生成密钥](../images/generate-secrets.jpg)

### 3. 创建 KV

回到 Worker 控制台，按如下步骤操作：

![Workers 控制台](../images/nav-worker-dash.jpg)

进入 `KV` 页面：

![KV 控制台](../images/nav-dash-kv.jpg)

在 KV 中点击 `Create`，设置名称（如 Test），然后 `Add`。

再次回到 `Developer Platform`，打开刚创建的 Worker，进入 `Bindings`。点击 `Add binding` 并选择 `KV Namespace`，在下拉框中选择刚创建的 KV（如 Test）。最重要的是第一个字段必须设置为 `kv`，然后点击 `Deploy`。

![绑定 KV](../images/bind-kv.jpg)

### 4. 设置 UUID、Trojan 密码与订阅路径

在前面打开的 `Secrets generator` 页面点击 `Copy all`。回到 Cloudflare 控制台进入 `Settings`，找到 `Variables and Secrets`，点击 `Add` 并粘贴到 `Variable name`，再点击 `Deploy`。这会自动添加 3 个参数。

再次在 Worker 控制台点击 `Visit`，浏览器会打开测速站点，只需在地址末尾添加 `/panel` 即可访问面板。

系统会要求设置新密码并登录即可使用。安装完成。其余内容为可选高级设置，详见 [配置指南](../configuration/index.md)。

## 高级配置（可选）

### 修复代理 IP

默认情况下会随机使用多组代理 IP，为每次连接分配不同 IP（覆盖大量 Cloudflare 地址）。该机制可能对交易类场景有影响。自 2.3.5 版本起可在面板内修改代理 IP 并更新订阅，但推荐使用以下方法：

!!! note
    面板内修改代理 IP 后若 IP 失效需更新订阅，可能影响捐赠配置。以下方法仅建议个人使用，其他方法无需更新订阅。

在 `Workers & Pages` 中打开你的 Worker，进入 `Settings` → `Variables and Secrets`：

![Workers 环境变量](../images/workers-variables.jpg)

点击 `Add`，在 `Variable name` 输入 `PROXY_IP`（大写）。

可通过以下链接获取不同地区/ISP 的 IP：

```text
https://www.nslookup.io/domains/bpb.yousef.isegaro.com/dns-records/
```

![代理 IP](../images/proxy-ips.jpg)

!!! info
    多个代理 IP 可用逗号分隔。
    ```title="示例"
    151.213.181.145, 5.163.51.41, bpb.yousef.isegaro.com
    ```

在 `Value` 中填写 IP，点击 `Deploy`。

### 修复 NAT64 前缀

默认情况下会随机使用多组 NAT64 前缀，为每次连接分配不同前缀（覆盖大量 Cloudflare 地址）。该机制可能对交易类场景有影响。自 3.4.2 版本起可在面板内修改前缀并更新订阅，但推荐使用以下方法：

!!! note
    面板内修改 NAT64 前缀后若前缀失效需更新订阅，可能影响捐赠配置。以下方法仅建议个人使用，其他方法无需更新订阅。

在 `Settings` 中打开 `Variables and Secrets`，点击 `Add`，在第一个框输入 `NAT64_PREFIX`（大写）。前缀列表见：

```text
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/NAT64Prefixes.md
```

!!! info
    多个前缀可用逗号分隔。
    ```title="示例"
    [2602:fc59:b0:64::], [2602:fc59:11:64::]
    ```

在 `Value` 中填写前缀并点击 `Deploy`。

### 设置回落域名

默认访问 Worker 主域名会跳转到 Cloudflare 测速站点。若需修改，按代理 IP 相同步骤设置 `FALLBACK`，值填写域名（不含 `https://` 或 `http://`），如 `www.speedtest.net` 或 `npmjs.org`。

### 修改订阅路径

默认订阅路径与 VLESS UUID 相同。为提高隐私，可按相同步骤设置 `SUB_PATH`。`/secrets` 的生成器会提供 `Random Subscription URI path` 值，可直接使用或自定义（限定字符范围内）。

### 添加自定义域名

在 Cloudflare 控制台进入 `Compute (Workers)` > `Workers & Pages` 打开你的 Worker。进入 `Settings`，在顶部 `Domains & Routes` 中点击 `Add +`，选择 `Custom domain`。

输入你已拥有且在同账号激活的域名。

假设你的域名为 `bpb.com`，可输入主域名或子域名（如 `xyz.bpb.com`），点击 `Add domain`。

Cloudflare 会将 Worker 绑定到该域名（可能需要较长时间，官方称最多 24 小时）。

然后再次点击 `Add +`，选择 `Route`，在 `Zone` 选择你的域名，在 `Route` 中填写：

```title="Route"
*bpb.com/*
```

之后即可通过 `https://xyz.bpb.com/panel` 访问面板并获取新订阅。

!!! tip
    - 绑定自定义域名后，流量几乎可视为无限制。
    - Worker 面板支持 80、8080 等非 TLS 端口，但绑定自定义域名后这些端口会不可用。

## 更新面板

下载最新 [worker.js](https://github.com/bia-pain-bache/BPB-Worker-Panel/releases/latest/download/worker.js)。在 Cloudflare 控制台进入 `Compute (Workers)` > `Workers & Pages`，选择 Worker 项目，编辑后删除旧文件、上传新文件并部署即可。
