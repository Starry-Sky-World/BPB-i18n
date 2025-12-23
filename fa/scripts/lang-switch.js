document.addEventListener("DOMContentLoaded", () => {
    const langLinks = document.querySelectorAll('a[hreflang]');
    if (!langLinks.length) return;
    const currentPath = window.location.pathname;
    const isGithubPages = window.location.hostname.endsWith('github.io');
    const base = isGithubPages && currentPath.includes('/BPB-Worker-Panel/')
        ? '/BPB-Worker-Panel'
        : '';
    const langPrefixes = {
        en: "",
        fa: "fa",
        zh: "zh"
    };

    let relativePath = currentPath;
    const legacyPrefix = '/BPB-Worker-Panel/';

    if (base && currentPath.startsWith(`${base}/fa/`)) {
        relativePath = currentPath.slice(`${base}/fa/`.length);
    } else if (base && currentPath.startsWith(`${base}/zh/`)) {
        relativePath = currentPath.slice(`${base}/zh/`.length);
    } else if (base && currentPath.startsWith(`${base}/`)) {
        relativePath = currentPath.slice(`${base}/`.length);
    } else if (!base && currentPath.startsWith(legacyPrefix)) {
        relativePath = currentPath.slice(legacyPrefix.length);
    } else if (currentPath.startsWith('/fa/')) {
        relativePath = currentPath.slice('/fa/'.length);
    } else if (currentPath.startsWith('/zh/')) {
        relativePath = currentPath.slice('/zh/'.length);
    } else if (currentPath.startsWith('/')) {
        relativePath = currentPath.slice(1);
    }

    const trimmedRelative = relativePath.replace(/^\\//, "");

    langLinks.forEach((link) => {
        const lang = link.getAttribute('hreflang');
        const prefix = langPrefixes[lang] || "";
        const newPathBase = base || '';
        const newPath = prefix
            ? `${newPathBase}/${prefix}/${trimmedRelative}`
            : `${newPathBase}/${trimmedRelative}`;
        link.setAttribute("href", newPath);
    });
});
