# :material-cloud-question-outline:{ .lg .middle } 常见问题

??? question "为什么 v2ray 配置无法连接？"
    如果启用了 `路由规则` 但无法连接，通常是 Geo 资源未更新。在 v2rayN(G) 客户端菜单进入 `资源文件`，点击云图标或下载图标更新。更新需等待所有文件显示 `success`。若更新失败则无法连接。如果仍无法更新，请下载以下两个文件并点击“添加”导入：
    ```title="GeoIP"
    https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geoip.dat
    ```
    ```title="GeoSite"
    https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geosite.dat
    ```

??? question "为什么在 v2rayNG 可用，但在 Streisand 等客户端不可用？"
    BPB 会尽快适配新内核特性，而部分客户端仅升级内核但未完成适配与优化。此类问题请反馈给对应客户端开发者。

??? question "为什么分片配置在我的 ISP 上速度慢？"
    每个 ISP 适配的分片参数不同。默认值通常可用，但你可能需要将分片模式切换到 `Medium`、`High`，或在 `Custom` 中手动调整。也推荐使用 MahsaNG 连接分片配置。

??? question "我按教程设置了 Proxy IP，但某些站点或应用（如 X）仍不可用？"
    公共 IP 很多且稳定性不同，需要测试选择可用的 IP。

??? question "之前设置 Proxy IP 可用，现在失效了？"
    单一 IP 可能会在一段时间后失效，导致网站无法打开。需重新选择 IP。若不需要固定 IP，建议使用面板默认配置。

??? question "访问 `panel/` 时提示错误？"
    请按安装指南或使用 **向导**；通常是 KV、UUID 或 Trojan 密码未正确配置。

??? question "部署后 Cloudflare 返回 1101 错误？"
    Cloudflare 账号可能被标记。请用 Gmail 等官方邮箱新建账号，并确保项目名不包含 `bpb`。建议使用 **向导** 安装。

??? question "可以用于交易吗？"
    若 Cloudflare IP 位于德国（通常如此），使用单一德国代理 IP 通常可用。但更推荐使用链式代理以稳定 IP。

??? question "为什么面板看不到非 TLS 端口？"
    使用非 TLS 配置必须通过 Workers 部署，并且不能设置自定义域名。

??? question "Best Fragment 配置无法连接或不稳定？"
    请关闭 `Prefer IPv6`。

??? question "为什么 Telegram 通话或 Clubhouse 无法使用？"
    Cloudflare 无法正确处理 UDP 流量，目前没有有效解决方案。请使用 Warp 配置。

??? question "为什么 ChatGPT 无法打开？"
    面板默认 Proxy IP 为公共 IP，可能被判为可疑。请通过以下链接自行搜索/测试合适 IP：
    ```link
    https://www.nslookup.io/domains/bpb.yousef.isegaro.com/dns-records/
    ```
    或在面板路由规则中启用 `Bypass ChatGPT`。

??? question "忘记面板密码怎么办？"
    在 Cloudflare 控制台找到 Worker/Pages 的 KV，查看 KV Pairs 表，找到 `pwd` 键，旁边的值即为密码。

??? question "如果不设置 UUID 与 Trojan 密码会怎样？"
    自 2.7.7 版本起必须设置这两个参数，否则面板无法运行。

??? question "使用 Pages 上传方式却出现 404？"
    Cloudflare 需要约 4-5 分钟注册 Pages 域名，请等待并刷新。

??? question "为什么面板不显示 Block Ads 选项？"
    `uBlock`、`AdGuard` 或带广告拦截功能的浏览器可能会隐藏它，请先关闭。

??? question "为什么向导在 Windows 上被识别为病毒？"
    向导应用没有代码签名证书，并会在本机下载 worker.js、定制并部署到 Cloudflare，容易被杀软识别为可疑行为。请临时关闭 Windows Defender 或其他杀软。

??? question "为什么 v2rayN 无法对配置进行 Ping 测试？"
    v2rayN 目前对自定义配置有问题，而 BPB 配置均为自定义。可直接启用使用。此外各订阅都有 Best Ping 自动连接最佳 IP，无需逐个测试。

??? question "为什么 sing-box 导入订阅时报错？"
    BPB 仅支持 sing-box 1.12.0 或更高版本。
