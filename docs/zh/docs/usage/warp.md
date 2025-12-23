# :material-playlist-check:{ .md .middle } Warp 订阅

![Warp 订阅](../images/warp-sub.jpg)

该订阅包含：

- **Warp** 配置：节点 IP 来自本地区 Cloudflare IP。
- **Warp on Warp (WoW)** 配置：节点 IP 来自国外 Cloudflare IP（主要为德国）。
- **Warp Best Ping**：连接最快的 Warp 配置。
- **WoW Best Ping**：连接最快的 WoW 配置。

默认提供 1 个 Warp 和 1 个 WoW 配置。修改 `Warp 常规` 中的 `Endpoints` 后，会按指定端点新增 Warp/WoW 配置。

你可以下载 Warp WireGuard 配置 zip 导入 WireGuard 客户端。大多数 ISP 会屏蔽 Warp，仅在 ISP 允许 WireGuard 协议时使用。

为获得最佳性能，请使用扫描器找到适合 ISP 的端点。扫描脚本在面板中，复制后在 Android 的 Termux 或 Linux 终端运行。普通 Warp 订阅在部分运营商（如 MTN-Irancell）表现不错，但其他情况建议使用 **Warp Pro**。
