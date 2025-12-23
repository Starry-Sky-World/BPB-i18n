# :material-new-box:{ .md .middle } Workers 与 Pages 安装 - 向导

为简化安装流程并减少误操作，推出了 [BPB Wizard](https://github.com/bia-pain-bache/BPB-Wizard)。它同时支持 Workers 与 Pages 部署方式，强烈建议使用。

![Pages 应用](../images/wizard.jpg)

## 1. Cloudflare 账号

使用该方式仅需一个 Cloudflare 账号。可在 [此处注册](https://dash.cloudflare.com/sign-up/)，并记得查收邮件完成验证。

## 2. 安装 BPB Panel

!!! warning
    如果正在使用 VPN，请先断开。

### Windows - Linux - macOS

根据你的操作系统，[下载 ZIP 文件](https://github.com/bia-pain-bache/BPB-Wizard/releases/latest)，解压后运行程序即可。

### Android

在 Android 设备上安装 Termux 后，将以下命令粘贴进 Termux 即可安装：

```bash title="Termux - Linux"
bash <(curl -fsSL https://raw.githubusercontent.com/bia-pain-bache/BPB-Wizard/main/install.sh)
```

!!! warning
    请务必只从 [官方渠道](https://github.com/termux/termux-app/releases/latest) 下载 Termux。通过 Google Play 安装可能会导致问题。

向导会先询问你是创建新面板还是修改现有面板。

随后会登录 Cloudflare 并请求授权，返回终端后继续提出一系列问题。

如果选择选项 1，将询问配置问题。你可以使用默认值或自定义值。最后会在浏览器打开面板。

!!! note
    每个设置项都已预生成安全的个人值。你可以直接回车使用默认值，或输入自定义值。

如果选择选项 2，将列出已部署的 Workers/Pages 项目，你可以选择要修改的项目。

## 更新面板

只需再次运行向导并在第一个问题选择选项 2。它会列出你账号里的项目名称，你可以选择更新或删除。
