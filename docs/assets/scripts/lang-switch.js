document.addEventListener("DOMContentLoaded", () => {
    const langLinks = document.querySelectorAll('a[hreflang]');
    if (!langLinks.length) return;
    const currentPath = window.location.pathname;
    const base = "/BPB-Worker-Panel";
    const langPrefixes = {
        en: "",
        fa: "fa",
        zh: "zh"
    };

    let relativePath = currentPath;
    if (currentPath.startsWith(`${base}/fa/`)) {
        relativePath = currentPath.slice(`${base}/fa/`.length);
    } else if (currentPath.startsWith(`${base}/zh/`)) {
        relativePath = currentPath.slice(`${base}/zh/`.length);
    } else if (currentPath.startsWith(`${base}/`)) {
        relativePath = currentPath.slice(`${base}/`.length);
    }

    const trimmedRelative = relativePath.replace(/^\\//, "");

    langLinks.forEach((link) => {
        const lang = link.getAttribute('hreflang');
        const prefix = langPrefixes[lang] || "";
        const newPath = prefix
            ? `${base}/${prefix}/${trimmedRelative}`
            : `${base}/${trimmedRelative}`;
        link.setAttribute("href", newPath);
    });
});
