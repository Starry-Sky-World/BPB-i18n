# :material-lan-connect:{ .md .middle } 使用指南

首先将客户端更新至最新版本，或参考下表。这些客户端已被 BPB 项目测试验证，其他客户端使用需自行承担风险。

|       客户端        |      版本      | 分片支持 | Warp Pro 支持 |
| :----------------: | :------------: | :------: | :-----------: |
|     **v2rayNG**     | 1.10.11 及以上 | :material-check: | :material-check: |
|     **MahsaNG**     |   14 及以上    | :material-check: | :material-check: |
|     **v2rayN**      | 7.14.6 及以上  | :material-check: | :material-check: |
|   **v2rayN-PRO**    |   1.9 及以上   | :material-check: | :material-check: |
|    **Sing-box**     | 1.12.0 及以上  | :material-check: | :material-close: |
|    **Streisand**    | 1.6.60 及以上  | :material-check: | :material-check: |
|   **Clash Meta**    |                | :material-close: | :material-check: |
| **Clash Verge Rev** |                | :material-close: | :material-check: |
|     **FLClash**     |                | :material-close: | :material-check: |
|   **AmneziaVPN**    |                | :material-close: | :material-check: |
|    **WG Tunnel**    |                | :material-close: | :material-check: |

**Warp** 与 **Warp Pro** 订阅提供 **WireGuard** 配置，需要先扫描端点。可参考 [此指南](../configuration/warp.md) 学习如何扫描端点。

<div class="grid cards" markdown>

- :material-playlist-check:{ .lg .middle } **常规**

    ---

    使用完整配置连接 **VLESS** 与 **Trojan**，无需手动配置。

    [:octicons-arrow-right-24: 开始使用](normal.md)

- :material-playlist-check:{ .lg .middle } **分片**

    ---

    即使域名被封锁，也可通过完整配置连接。

    [:octicons-arrow-right-24: 开始使用](fragment.md)

- :material-playlist-check:{ .lg .middle } **Warp**

    ---

    扫描端点后连接 Cloudflare Warp 服务器。

    [:octicons-arrow-right-24: 开始使用](warp.md)

- :material-playlist-check:{ .lg .middle } **Warp Pro**

    ---

    即使本地区 Warp 被封锁，也可连接 Cloudflare Warp。

    [:octicons-arrow-right-24: 开始使用](warp-pro.md)

</div>
