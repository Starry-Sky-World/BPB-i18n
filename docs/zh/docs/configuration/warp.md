# :material-cog-outline:{ .md .middle } Warp 常规设置

这些设置同时适用于 **Warp** 与 **Warp Pro** 订阅。

![Warp 常规设置](../images/warp-settings.jpg)

## 远程 DNS

Warp 远程 DNS 只能使用 IPv4，以确保性能和兼容性。默认 DNS 为 Cloudflare 公共 DNS，非常推荐继续使用。若要更换，仍建议选择 Cloudflare 的 DNS 以获得最佳兼容性：

- 1.1.1.2, 1.0.0.2（Cloudflare 安全 DNS）
- 1.1.1.3, 1.0.0.3（Cloudflare 成人内容 DNS）

## 端点 - 扫描器

Warp 的端点类似于 VLESS/Trojan 的 Clean IP。面板提供扫描器，可在 Termux（Android）、Windows、macOS 或 Linux 上运行，并把结果填入此处。扫描结果并非 100% 可靠，建议测试验证。测试前必须退出所有代理应用；若使用 v2rayN，需要从任务栏完全退出，仅清除代理不够。

!!! info
    - 端点格式为 IP:端口 或 域名:端口，每行一个。
    - IPv6 地址需用方括号包裹。示例：

    ```title="IPv4"
    123.45.8.6:1701
    ```
    ```title="IPv6"
    [2a06:98c1:3120::3]:939
    ```
    ```title="Domain"
    engage.cloudflareclient:2408
    ```

## Fake DNS

可为 Warp 配置启用 Fake DNS 以降低延迟。但可能与部分应用不兼容或影响系统 DNS，不确定时建议保持关闭。

## 启用 IPv6

如果 ISP 不支持 IPv6，请关闭以优化 DNS 与代理性能。

## 最佳间隔

**Warp** 与 **Warp Pro** 订阅包含 **Best Ping** 配置，默认每 30 秒测试一次以选出最佳配置/端点。低速网络下可能引发卡顿（如视频、游戏），可调整到 10-90 秒。

## Warp 账号

更新账号会从 **Cloudflare** 获取新的 Warp 账号，不会影响速度或其他设置。
