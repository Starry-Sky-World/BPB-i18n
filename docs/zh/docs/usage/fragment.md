# :material-playlist-check:{ .md .middle } 分片订阅

![分片订阅](../images/fragment-sub.jpg)

!!! tip "分片配置的优势"
    - 即使自定义域名或 Worker 域名被 ISP 屏蔽，也能保持连接。
    - 提升各 ISP 的稳定性与速度，尤其是在 Cloudflare 易受干扰的环境中。

## Xray 分片

适用于使用 Xray 内核的客户端，如 v2rayNG、MahsaNG、v2rayN PRO。导入的配置名称带有 `F` 标记。该订阅提供与 **Normal** 相同数量的配置，并应用面板中的分片设置，同时包含 **Best Fragment** 与 **Workerless** 配置。面板设置变更在更新订阅后会应用到所有配置。

???+ question "什么是 Workerless 配置？"
    Workerless 配置无需 Worker 即可访问部分受限网站和应用（如 YouTube、Twitter、Google Play 等）。注意它不会改变本地 IP，不适合需要安全性或匿名性的场景。分片设置会作用于该配置，但链式代理除外。

???+ question "什么是 Best Fragment 配置？"
    Best Fragment 会测试 18 种分片设置，根据 ISP 表现选择最快的方案。配置每 30 秒测试所有模式并自动连接最优结果。高级分片设置详见 [这里](../configuration/fragment.md)。

## sing-box 分片

从 sing-box 内核 1.12.0 起及相关客户端支持分片，可在官方 sing-box 客户端（如 husi）或内置 sing-box 的 v2rayN 中使用该订阅。
