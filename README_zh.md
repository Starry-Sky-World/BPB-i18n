<h1 align="center">BPB Panel</h1>

### 🌏 Readme in [English](README.md) | [Farsi](README_fa.md)

<p align="center">
  <img src="docs/assets/images/panel-overview.jpg">
</p>
<br>

## 介绍

本项目旨在提供一个用户面板，获取免费、安全且私密的 **VLESS**、**Trojan** 与 **Warp** 配置。即使域名或 Warp 服务被 ISP 屏蔽，也能保持连接，并提供两种部署方式：

- **Workers** 部署
- **Pages** 部署

🌟 如果你觉得 **BPB Panel** 有价值，欢迎支持 🌟

### USDT (BEP20)

```text
0xbdf15d41C56f861f25b2b11C835bd45dfD5b792F
```

## 特性

1. **免费且私密**：无需成本，服务私密。
2. **直观面板**：便于导航、配置与使用。
3. **多协议支持**：支持 VLESS、Trojan 与 Wireguard（Warp）。
4. **Warp Pro 配置**：关键场景下优化的 Warp 配置。
5. **分片支持**：应对复杂网络环境。
6. **全面路由规则**：绕过伊朗/中国/俄罗斯，屏蔽 QUIC、色情、广告、恶意软件、钓鱼，并可绕过制裁。
7. **链式代理**：支持添加链式代理（VLESS、Trojan、Shadowsocks、socks 与 http）修复 IP。
8. **广泛客户端兼容**：提供 Xray、Sing-box、Clash-Mihomo 的订阅链接。
9. **密码保护面板**：面板访问有密码保护。
10. **高度可定制**：支持设置 Clean IP/域名、代理 IP、DNS、端口/协议、Warp 端点等。

## 限制

1. **UDP 传输**：Workers 上的 VLESS/Trojan 对 **UDP** 支持不完善，默认禁用（影响 Telegram 视频通话等），UDP DNS 也不支持。默认启用 DoH 以提升安全性。
2. **请求限制**：每个 Worker 每天支持 10 万次请求，适合 2-3 位用户；Warp 配置无此限制。

## 快速开始

- [安装方式](https://bia-pain-bache.github.io/BPB-Worker-Panel/zh/installation/wizard/)
- [配置指南](https://bia-pain-bache.github.io/BPB-Worker-Panel/zh/configuration/)
- [使用方法](https://bia-pain-bache.github.io/BPB-Worker-Panel/zh/usage/)
- [常见问题](https://bia-pain-bache.github.io/BPB-Worker-Panel/zh/faq/)

## 支持的客户端

|       客户端        |      版本      |  分片支持  |  Warp Pro 支持  |
| :-----------------: | :------------: | :--------: | :-------------: |
|     **v2rayNG**     | 1.10.26 及以上 | :heavy_check_mark: | :heavy_check_mark: |
|     **MahsaNG**     |   14 及以上    | :heavy_check_mark: | :heavy_check_mark: |
|     **v2rayN**      | 7.15.4 及以上  | :heavy_check_mark: | :heavy_check_mark: |
|   **v2rayN-PRO**    |   1.9 及以上   | :heavy_check_mark: | :heavy_check_mark: |
|    **Sing-box**     | 1.12.0 及以上  | :heavy_check_mark: |        :x:         |
|    **Streisand**    | 1.6.64 及以上  | :heavy_check_mark: | :heavy_check_mark: |
|   **Clash Meta**    |                | :x: | :heavy_check_mark: |
| **Clash Verge Rev** |                | :x: | :heavy_check_mark: |
|     **FLClash**     |                | :x: | :heavy_check_mark: |
|   **AmneziaVPN**    |                | :x: | :heavy_check_mark: |
|    **WG Tunnel**    |                | :x: | :heavy_check_mark: |

## 环境变量

|   变量    |             用途             | 是否必填 |
| :-------: | :--------------------------: | :------: |
|   **UUID**   |           VLESS UUID         | :heavy_check_mark: |
| **TR_PASS**  |         Trojan 密码         | :heavy_check_mark: |
| **PROXY_IP** | 代理 IP/域名（VLESS、Trojan） |   :x:   |
|  **PREFIX**  |   NAT64 前缀（VLESS、Trojan） |   :x:   |
| **SUB_PATH** |        订阅 URI             |   :x:   |
| **FALLBACK** | 备用域名（VLESS、Trojan） |   :x:   |
| **DOH_URL**  |          核心 DoH           |   :x:   |

---

## Stargazers Over Time

[![Stargazers Over Time](https://starchart.cc/bia-pain-bache/BPB-Worker-Panel.svg?variant=adaptive)](https://starchart.cc/bia-pain-bache/BPB-Worker-Panel)

---

### 特别感谢

- VLESS, Trojan [Cloudflare-workers/pages proxy script](https://github.com/yonggekkk/Cloudflare-workers-pages-vless) created by [yonggekkk](https://github.com/yonggekkk)
- CF-vless code author [3Kmfi6HP](https://github.com/3Kmfi6HP/EDtunnel)
- CF preferred IP program author [badafans](https://github.com/badafans/Cloudflare-IP-SpeedTest), [XIU2](https://github.com/XIU2/CloudflareSpeedTest)
