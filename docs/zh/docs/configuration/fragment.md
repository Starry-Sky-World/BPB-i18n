# :material-cog-outline:{ .md .middle } 分片设置

分片方案几乎解决了 Cloudflare CDN 的 Clean IP 问题，通过隐藏 SNI 来规避中间人检测。但具体参数需根据 ISP 调整。注意：分片可在 sing-box 中启用，但 sing-box 不使用此处的分片参数，它有自己的默认设置。

![分片设置](../images/fragment-settings.jpg)

默认参数：

- **长度**：100-200
- **间隔**：1-1
- **包类型**：tlshello

你可以根据网络情况切换分片模式测试。通常默认或 `Low` 模式足够。切换到 `Medium`、`High`、`Severe` 会提高握手延迟，但在高对抗场景可能更稳定。**Best Fragment** 永远是更智能的方案，连接后等待至少 30 秒即可。

可根据 ISP 的情况调整参数。

!!! info
    包类型有多种模式，但 `tlshello` 仅适用于 **TLS 配置**；例如 80、8080 等端口不会受到影响。

!!! tip "伊朗用户提示"
    目前分片在使用 **Xray Knocker 内核** 的客户端（如 **MahsaNG** 与 **v2rayN PRO**）上表现更好，该内核针对伊朗网络环境定制。

!!! tip
    如果无法找到最优分片参数，订阅中有 **Best fragment** 配置。连接后稍等，它会测试几乎所有有效分片设置并自动选择最佳值。

!!! note
    分片参数有上限：长度不能超过 500，间隔不能超过 30ms。

!!! warning
    Max Split 是 Xray 新增功能，较为敏感，设置前请先阅读 Xray 文档。
