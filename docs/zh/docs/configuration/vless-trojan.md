# :material-cog-outline:{ .md .middle } VLESS 与 Trojan 设置

![VLESS 与 Trojan 设置](../images/vless-trojan-settings.jpg)

## 远程 DNS

默认使用 Google DoH（DNS over HTTPS）。也可使用其他 DoH/DoT 服务器，但不要使用 Cloudflare DNS：

!!! tip "常见 DoH/DoT 服务器"
    - `https://dns.google/dns-query`
    - `https://dns.adguard-dns.com/dns-query`
    - `https://dns.quad9.net/dns-query`
    - `tls://dns.google`

## 链式代理

Proxy IP 只修正 Cloudflare 目标地址的 IP，对其他目标仍可能不同。**链式代理**能保证所有目标一致 IP。你可以使用一个免费配置，即使被 ISP 阻断，也能把 IP 固定到该链式代理。

### 支持的协议

* VLESS
* VMess
* Trojan
* Shadowsocks
* Socks
* Http

### 支持的传输

* TCP
* TCP http header
* Websocket
* GRPC
* Httpupgrade

### 支持的 TLS

* TLS
* Reality

!!! note
    链式代理配置不能是 Worker，否则最终 IP 仍会变化。

!!! info
    Socks/HTTP 配置需包含用户名和密码，Xray 不支持裸配置。

!!! info
    Shadowsocks 不能使用 websocket/grpc 等传输，也不能使用 TLS。

!!! warning
    带 `randomized` ALPN 的 VLESS/VMess/Trojan 与 Clash 不兼容（缺少指纹）。

此设置适用于 **Normal** 与 **Fragment** 订阅。应用后更新订阅，链式配置会以 🔗 标识添加在原配置旁。若链式代理失效，你仍可使用原配置。

## Clean IP/域名

对于非 **Normal** 订阅，可能需要使用 Clean IP。面板提供扫描器，可下载对应系统的 zip。运行 CloudflareScanner 后结果保存在 `result.csv`，可按延迟与速度筛选 IP。建议在 Windows 上执行，且测试时请断开 VPN。高级扫描请参考 [此指南](https://github.com/bia-pain-bache/Cloudflare-Clean-IP-Scanner/blob/master/README.md)。

!!! tip "伊朗用户提示"
    对支持 IPv6 的 ISP（如 Rightel、Irancell、Asiatech），建议在 SIM 上启用 IPv6，并在客户端设置中开启 **Prefer IPv6**，使用最后两个或首个默认配置。IPv6 通常性能更好。

!!! tip
    使用 **Fragment** 时，Clean IP 影响较小，但部分 ISP（如 Rightel）仍可能需要。

要在默认配置之外添加自定义配置，请按示例输入 Clean IP/域名并点击 **Apply**。更新订阅后，这些配置会被导入，并加入 **Best Ping** 与 **Best Fragment**。

## 协议选择

可启用 **VLESS** 和/或 **Trojan**。

## 端口选择

选择所需端口。TLS 端口更安全，但当 TLS 受干扰或 **Fragment** 效果不佳时，非 TLS 配置可能更稳定。

!!! note
    非 TLS 配置仅在 Workers 部署时可用。若使用 Pages 或设置了自定义域名，HTTP 端口不会显示。

!!! info
    非 TLS 配置仅添加到 **Normal** 订阅中。

## 指纹

可选择 TLS 指纹，默认随机。

## 最佳间隔

**Best** 配置默认每 30 秒测试一次以选择最佳配置/分片值。低速网络（如视频、游戏）可能出现卡顿，可设置 10-90 秒范围。

## TCP Fast Open

若设备支持 TFO 且 ISP 未干扰，可开启以提升连接效率。Linux 用户需先在系统中启用 TFO。

## 代理 IP

### 模式

从 3.4.2 起可选择使用 Proxy IP 或 NAT64 前缀连接 Cloudflare CDN。

### 代理 IP/域名

可在面板中修改 Proxy IP 并更新订阅，但建议在 Cloudflare 控制台或向导中设置：

!!! note
    面板内修改 Proxy IP 后若 IP 失效需更新订阅，可能影响捐赠配置（无订阅用户无法更新）。此方式建议仅个人使用。其他方法无需更新订阅。

可从 [这里选择 Proxy IP](https://www.nslookup.io/domains/bpb.yousef.isegaro.com/dns-records/)，按地区与 ISP 列出。

!!! info
    多个 Proxy IP 可逐行填写。

### NAT64 前缀

可在面板中修改 NAT64 前缀并更新订阅，但建议在 Cloudflare 控制台或向导中设置：

!!! note
    面板内修改 NAT64 前缀后若前缀失效需更新订阅，可能影响捐赠配置。此方式建议仅个人使用。其他方法无需更新订阅。

可从 [这里获取 NAT64 前缀](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/NAT64Prefixes.md)，按地区与 ISP 列出。

!!! info
    多个前缀可逐行填写。

## 自定义 CDN

可使用自定义 CDN（如 Fastly、Gcore）隐藏 Worker 域名，需配置以下三项：

### 地址

CDN 的 IP/Clean IP，必须是该 CDN 自身的 IP（不是 Cloudflare）。可填写域名、IPv4 或 IPv6（IPv6 需用方括号），如 `[2a04:4e42:200::731]`。

### Host

CDN 中指向 Worker 的 Host，例如 Fastly 中的伪域名。

### SNI

伪域名或同 CDN 上的站点，例如 Fastly 可填 `speedtest.net`（不含 `www`）。

完成后，相关配置会加入 **Normal** 订阅，并以 `C` 标识。

!!! info
    仅支持 443 与 80 端口。
