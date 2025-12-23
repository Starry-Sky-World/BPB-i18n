# :material-cog-outline:{ .md .middle } 路由规则

![路由规则](../images/routing-rules.jpg)

## 预设规则

使用预设路由规则可对配置应用以下策略：

* 直接访问伊朗地址（无需关闭代理即可访问本地站点，尤其是支付网关）。
* 直接访问中国网站。
* 直接访问俄罗斯网站。
* 屏蔽伊朗及海外广告（最多约 90%）。
* 屏蔽成人内容网站。
* 屏蔽 QUIC 连接（网络不稳定时有帮助）。
* 屏蔽恶意软件（见警告）
* 屏蔽钓鱼（见警告）
* 屏蔽挖矿（见警告）

默认配置已包含 127.0.0.1 等本地地址的直连规则，无需手动添加。

!!! warning
    v2ray 用户若启用 `Malware`、`Phishing`、`Cryptominers` 规则，请将 Geo Assets 设为 **Chocolate4U** 并下载资源，否则配置无法连接。

!!! warning
    如果启用路由规则后客户端无法连接，通常是 Geo 资源未更新。请在 v2rayNG 的 Geo 资源设置中点击云图标或下载图标更新。若更新失败，将无法连接。若仍无法更新，请从以下链接下载两个文件，点击“添加”导入（而非更新）：

```title="GeoIP"
https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geoip.dat
```

```title="GeoSite"
https://github.com/Loyalsoldier/v2ray-rules-dat/releases/latest/download/geosite.dat
```

## 自定义规则

某些情况下预设规则无法满足需求。例如你已屏蔽成人内容，但某网站未被规则覆盖，需要自定义规则。

本节支持三种格式：**Domain**、**IP**、**IP/CIDR**。

注意：如果输入 `google.com`，其所有子域名也会被屏蔽或直连，如 `drive.google.com`、`mail.google.com`。示例：

```title="Domain"
google.com
```

```title="IPv4"
192.168.1.1
```

```title="IPv6"
2606:4700::6810:85e5
```

```title="IPv4 CIDR"
192.168.1.1/32
```

```title="IPv6 CIDR"
2606:4700::6810:85e5/128
```

## 制裁规则

如需某些网站仅绕过制裁、直连访问（不走代理），可使用本节。你可以在 [通用设置](./common.md) 中设置 DNS（需支持透明代理），选择预设规则或填写自定义地址。也可使用如 `WorkerLess` 的无代理配置访问被制裁网站。

!!! info
    如果在自定义规则中输入 `google.com`，其所有子域名也会被直连，如 `drive.google.com`、`mail.google.com`。

!!! note
    规则启用时需确保 DNS 支持相应域名。例如启用 `Microsoft` 规则但 DNS 不支持，则无法连接 Microsoft 域名。请先确认 DNS 支持目标规则或域名。
