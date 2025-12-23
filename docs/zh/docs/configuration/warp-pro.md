# :material-cog-outline:{ .md .middle } Warp Pro 设置

本节仅适用于 **Warp Pro** 订阅，详见 [此处](../usage/warp-pro.md)。

![Warp Pro 设置](../images/warp-pro-settings.jpg)

## 术语说明

Warp 噪声（伪造包）实现中常用以下术语。包括 **Xray**、**Xray Knocker**、**Amnezia** 在内的多数核心至少包含两个参数：

### 模式

噪声发送方式，用于混淆连接。

### 数量

客户端向服务器发送的噪声包数量。

### 大小

每个噪声包的大小（字节）。

### 延迟

发送噪声包之间的时间间隔。

## MahsaNG

### MahsaNG 模式

- **none**：不发送噪声，等同普通 Warp 配置。
- **quic**：开发者建议在伊朗环境使用。
- **random**：随机生成噪声。
- 自定义模式：使用自定义 HEX 字符串（如 `fe09ad5600bc...`）。

## Clash 与 Amnezia

该部分适用于 **Amnezia**、**WG Tunnel** 与 **Clash-Mihomo** 核心客户端，使用相同设置。需指定噪声包数量与大小范围。Warp Pro 订阅表中可下载 **Amnezia** 与 **WG Tunnel** 的 zip 配置文件。

这些参数需要通过 ISP 实测调整。

## v2rayNG 与 v2rayN

### v2ray 模式

**v2rayNG** 与 **v2rayN** 支持四种模式：**base64**、**string**、**hex**、**random**。可在 Noise Count 中设置包数量，并允许多种类型混合使用。

### 噪声包

包值需与模式匹配：

- **Base64**：必须是有效 Base64 值。
- **String**：任意字符串。
- **Random**：填写长度范围。
- **Hex**：有效十六进制字符串。

示例：

```title="Base64"
NTUyMjU0NjItN2I4MC00YWFmLWE3NDgtNjZiYWZiNjlmNmQ2
```

```title="String"
salamchetori123
```

```title="Random"
10-30
```

```title="Hex"
01d800f9373b2c418713aafde43021004ac3b89f
```

!!! tip
    - 使用 [此工具](https://onlinebase64tools.com/base64-encode) 将文本转换为 Base64。
    - 使用 [此工具](https://onlinetools.com/random/generate-random-hexadecimal-numbers) 生成 Hex 字符串。

### Applies To

指定噪声应用的 IP 类型。默认 `IP` 同时作用于 IPv4 与 IPv6。
