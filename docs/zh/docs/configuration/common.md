# :material-cog-outline:{ .md .middle } 通用设置

![通用设置](../images/common-settings.jpg)

本节提供所有订阅与协议共享的设置。

## 本地 DNS

本地 DNS 主要用于路由绕过规则。默认使用 Google DNS。

本地 DNS 可填写 IP 地址，也可以使用 **localhost** 以调用 ISP 的 DNS，这对路由用途通常足够。

## Fake DNS

启用 Fake DNS 可降低 DNS 查询延迟，但可能与部分应用不兼容或影响系统 DNS。如不确定其影响，建议保持关闭。

## 反制裁 DNS

该 DNS 用于 **制裁规则**（[详见](./routing-rules.md)）。默认使用 [Shecan](https://shecan.ir/)（面向伊朗用户）。在设置路由规则前，请确认其支持你需要的域名。

!!! info
    DNS 可为 IP（UDP DNS）、TCP DNS、DoT 或 DoH。

## 启用 IPv6

面板默认提供 IPv6 的 VLESS/Trojan 配置。如果你的 ISP 不支持 IPv6，可关闭以减少配置数量，并优化 VLESS、Trojan 与 Warp 的 DNS/路由设置。

## 允许局域网连接

启用后，局域网内的其他设备可通过你的本地 IP 使用代理。他们可在设备上设置 socks 代理，地址填写你的本地 IP，端口按客户端类型：

- v2ray: 10808
- sing-box: 2080
- Clash: 7890

在办公或公共网络中开启此功能存在风险，请谨慎。

## 日志级别

设置客户端日志级别。通常用 "warning" 足以排查问题，但在提交 GitHub issue 或查看代理活动时可能需要更高等级。
