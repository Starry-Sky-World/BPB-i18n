# :material-new-box:{ .md .middle } Pages 手动安装（直接上传）

强烈建议使用 [向导安装](./wizard.md)，避免 Cloudflare 1101 错误、用户操作失误并节省配置时间。

## 步骤

### 1. 创建 Cloudflare 账号

如果没有 Cloudflare 账号，可从 [此处注册](https://dash.cloudflare.com/sign-up)。只需邮箱即可注册，建议使用 Gmail 等稳定邮箱。

### 2. 创建 Pages 项目

从 [此处下载 Worker zip](https://github.com/Starry-Sky-World/BPB-i18n/releases/latest/download/worker.zip)。

在 Cloudflare 控制台进入 `Developer Platform`，点击 `Create application`，选择 `Pages`，然后 `Use direct upload` > `Get started`。

输入 `Project Name`，它将成为面板域名的一部分。

!!! danger
    名称不要包含 `bpb`，可能触发 Cloudflare 识别导致 `1101` 错误。

点击 `Create Project`，然后点击 `Select from computer` 上传 zip。

点击 `Deploy site`，然后 `Continue to project`。

项目已创建但尚不可用。在 `Deployment` 页面 `Production` 中点击 `Visit`。

!!! warning
    Cloudflare 可能需要最多 5 分钟初始化 Pages 域名，短时间无法访问是正常的。

页面会提示需要设置 UUID 与 Trojan 密码，并给出链接。打开该链接并保存，供后续步骤使用。

![Pages 应用](../images/generate-secrets.jpg)

### 3. 创建 KV

左侧菜单进入 `Storage and Databases` > `KV`：

![Pages 应用](../images/nav-dash-kv.jpg)

点击 `Create`，设置名称，然后 `Add`。

回到 `Workers & Pages` 并打开 Pages 项目，进入 `Binding`：

![Pages 应用](../images/settings-functions.jpg)

在 `Bindings` 中点击 `Add`，选择 `KV Namespace`。将 `Variable name` 设置为 `kv`（必须一致），`KV namespace` 选择刚创建的 KV，点击 `Save`。

![Pages 应用](../images/bind-kv.jpg)

KV 完成配置。

### 4. 设置 UUID、Trojan 密码与订阅路径

在先前的 `Secrets generator` 页面点击 `Copy all`。在 Cloudflare 控制台进入 `Settings`，找到 `Variables and Secrets`，点击 `Add` 并粘贴内容到 `Variable name`，然后 `Save`。这会自动添加 3 个参数。

点击页面顶部 `Create deployment`，再次上传同一个 zip 文件。

回到 `Deployments` 页面，在 `Production` 中点击 `Visit`，在 URL 后追加 `panel/` 进入面板。

更多配置与建议可查看 [配置指南](../configuration/index.md)。安装完成，以下高级设置为可选项。

## 高级配置（可选）

### 修复代理 IP

默认情况下会随机使用多组代理 IP，为每次连接分配不同 IP（覆盖大量 Cloudflare 地址）。该机制可能对交易类场景有影响。自 2.3.5 版本起可在面板内修改代理 IP 并更新订阅，但推荐使用以下方法：

!!! note
    面板内修改代理 IP 后若 IP 失效需更新订阅，可能影响捐赠配置（无订阅的用户无法更新）。以下方法仅建议个人使用，其他方法无需更新订阅。

在项目 `Settings` 中打开 `Variables and Secrets`：

![Pages 应用](../images/pages-env-vars.jpg)

点击 `Add`，在第一个输入框填写 `PROXY_IP`（大写）。通过下面链接获取不同地区/ISP 的 IP 列表：

```text
https://www.nslookup.io/domains/bpb.yousef.isegaro.com/dns-records/
```

![Pages 应用](../images/proxy-ips.jpg)

!!! info
    多个代理 IP 可用逗号分隔。
    ```title="示例"
    151.213.181.145, 5.163.51.41, bpb.yousef.isegaro.com
    ```

在 `Value` 中填写 IP，点击 `Save`。随后点击页面顶部 `Create deployment` 并重新上传 zip，设置生效。

### 修复 NAT64 前缀

默认情况下会随机使用多组 NAT64 前缀，为每次连接分配不同前缀（覆盖大量 Cloudflare 地址）。该机制可能对交易类场景有影响。自 3.4.2 版本起可在面板内修改前缀并更新订阅，但推荐使用以下方法：

!!! note
    面板内修改 NAT64 前缀后若前缀失效需更新订阅，可能影响捐赠配置。以下方法仅建议个人使用，其他方法无需更新订阅。

在项目 `Settings` 中打开 `Variables and Secrets`，点击 `Add` 并在第一个输入框填写 `NAT64_PREFIX`（大写）。前缀列表见：

```text
https://github.com/Starry-Sky-World/BPB-i18n/blob/main/NAT64Prefixes.md
```

!!! info
    多个前缀可用逗号分隔。
    ```title="示例"
    [2602:fc59:b0:64::], [2602:fc59:11:64::]
    ```

在 `Value` 中填写前缀，点击 `Save`，再点击 `Create deployment` 并上传 zip 使设置生效。

### 设置回落域名

默认访问 Pages 主域名会跳转到 Cloudflare 测速站点。若需修改，按与代理 IP 相同步骤设置 `FALLBACK` 变量，值填写域名（不含 `https://` 或 `http://`），例如 `www.speedtest.net` 或 `npmjs.org`。

### 修改订阅路径

默认订阅路径与 VLESS UUID 相同。为了隐私可修改，按上方步骤设置 `SUB_PATH`。Secrets 页面或生成器会提供 `Random Subscription URI path` 值，可直接使用或自定义（限定字符范围内）。

### 添加自定义域名

在 Cloudflare 控制台进入 `Compute (Workers)` > `Workers & Pages`，选择面板项目，在 `Custom domains` 标签下点击 `Set up a custom domain`。输入你拥有并已在同账号激活的域名。例如你拥有 `bpb.com`，可使用该域名或子域名如 `xyz.bpb.com`。点击 `Continue` 后 `Activate domain`。

在域名 DNS 中添加一条 CNAME 记录，将 `xyz.bpb.com` 指向你的 Pages 域名。Cloudflare 会自动完成绑定，随后即可通过 `https://xyz.bpb.com/panel` 访问面板并获取新订阅。

## 更新面板

下载最新 zip 文件：[worker.zip](https://github.com/Starry-Sky-World/BPB-i18n/releases/latest/download/worker.zip)。在 Cloudflare 控制台进入 `Compute (Workers)` > `Workers & Pages`，选择 Pages 项目，点击 `Create deployment` 并上传新 zip 即可。
