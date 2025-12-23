const resources = {
    en: {
        translation: {
            "app.title": "BPB Panel {{version}}",
            "language.label": "Language",
            "common.help": "Help",
            "common.scanner": "Scanner",
            "settings.title": "Settings",
            "settings.common": "Common",
            "settings.vlessTrojan": "VLESS - Trojan",
            "settings.xrayFragment": "Xray Fragment",
            "settings.warpGeneral": "Warp General",
            "settings.warpPro": "Warp PRO",
            "settings.routingRules": "Routing Rules",
            "section.proxyIp": "Proxy IP",
            "section.customCdn": "Custom CDN",
            "section.mahsaNoise": "MahsaNG Noise",
            "section.clashNoise": "Clash - Amnezia Noise",
            "section.v2rayNoise": "v2rayNG - v2rayN Noise",
            "section.presetRules": "Preset Rules",
            "section.customRules": "Custom Rules",
            "section.sanctionRules": "Sanction Rules",
            "form.localDns": "🏚️ Local DNS",
            "form.antiSanctionDns": "🌏 Anti Sanction DNS",
            "form.fakeDns": "🧢 Fake DNS",
            "form.ipv6": "🔛 IPv6",
            "form.allowLan": "⛔ Allow connections from LAN",
            "form.logLevel": "🎚️ Log Level",
            "form.remoteDns": "🌏 Remote DNS",
            "form.chainProxy": "✈️ Chain Proxy",
            "form.cleanIps": "✨ Clean IPs / Domains",
            "form.cleanIpApiUrl": "🧪 CleanIP API URL",
            "form.cleanIpApiPlaceholder": "http://127.0.0.1:7860/http",
            "form.fetchCleanIps": "🧹 Fetch CleanIPs",
            "form.protocols": "⚙️ Protocols",
            "form.tlsPorts": "🔒 TLS Ports",
            "form.nonTlsPorts": "🔓 non-TLS Ports",
            "form.fingerprint": "👆 Fingerprint",
            "form.bestInterval": "🔄 Best Interval",
            "form.tcpFastOpen": "⏩ TCP Fast Open",
            "form.mode": "🎚️ Mode",
            "form.proxyIps": "📍 Proxy IPs / Domains",
            "form.proxyIpsTitle": "Proxy IPs",
            "form.nat64Prefixes": "📍 NAT64 Prefixes",
            "form.nat64PrefixesTitle": "NAT64 prefixes",
            "form.customCdnAddresses": "💀 Addresses",
            "form.customCdnHost": "💀 Host",
            "form.customCdnSni": "💀 SNI",
            "form.fragmentLength": "📐 Length",
            "form.fragmentInterval": "🕞 Interval",
            "form.fragmentMaxSplit": "⛓️ Max Split",
            "form.fragmentPackets": "📦 Packets",
            "form.warpRemoteDns": "🌏 remote DNS",
            "form.warpEndpoints": "✨ Endpoints",
            "form.warpAccounts": "♻️ Warp Accounts",
            "form.noiseModeTitle": "Fill in 'none', 'quic', 'random', or any HEX string like 'ee0000000108aaaa'",
            "form.noiseCount": "🎚️ Count",
            "form.noiseSize": "📏 Size",
            "form.noiseDelay": "🕞 Delay",
            "form.bypassRules": "🟩 Bypass rules",
            "form.blockRules": "🟥 Block rules",
            "form.bypassIpsDomains": "🟩 Bypass IPs / Domains",
            "form.blockIpsDomains": "🟥 Block IPs / Domains",
            "form.bypassDomains": "🟩 Bypass Domains",
            "options.enabled": "Enabled",
            "options.disabled": "Disabled",
            "options.warning": "Warning",
            "options.error": "Error",
            "options.info": "Info",
            "options.debug": "Debug",
            "options.custom": "Custom",
            "options.low": "Low",
            "options.medium": "Medium",
            "options.high": "High",
            "options.severe": "Severe",
            "options.proxyIp": "Proxy IP",
            "options.nat64": "NAT64",
            "protocols.vless": "VLESS",
            "protocols.trojan": "Trojan",
            "routing.iran": "Iran",
            "routing.china": "China",
            "routing.russia": "Russia",
            "routing.ads": "Ads",
            "routing.porn": "Porn",
            "routing.quic": "QUIC",
            "routing.malware": "Malware",
            "routing.phishing": "Phishing",
            "routing.cryptominers": "Cryptominers",
            "routing.chatgpt": "ChatGPT",
            "routing.googleAi": "Google AIs",
            "routing.microsoft": "Microsoft",
            "routing.oracle": "Oracle",
            "routing.docker": "Docker",
            "routing.adobe": "Adobe",
            "routing.epicGames": "Epic Games",
            "routing.intel": "Intel",
            "routing.amd": "AMD",
            "routing.nvidia": "Nvidia",
            "routing.asus": "Asus",
            "routing.hp": "HP",
            "routing.lenovo": "Lenovo",
            "actions.fetch": "Fetch",
            "actions.update": "Update",
            "actions.apply": "Apply",
            "actions.loading": "⌛ Loading...",
            "actions.displayQr": "Display QR code",
            "actions.copySubscription": "Copy subscription URL",
            "actions.downloadConfig": "Download config",
            "actions.downloadZip": "Download configs zip",
            "actions.resetPanel": "Reset panel settings to default",
            "actions.exportPanel": "Export panel settings",
            "actions.importPanel": "Import panel settings",
            "actions.logout": "Log out",
            "subscriptions.title": "Subscriptions",
            "subscriptions.normal": "Normal",
            "subscriptions.fragment": "Fragment",
            "subscriptions.warp": "Warp",
            "subscriptions.warpPro": "Warp PRO",
            "subscriptions.normalTag": "Normal",
            "subscriptions.normalTitle": "Normal Subscription",
            "subscriptions.fragmentTag": "Fragment",
            "subscriptions.fragmentTitle": "Fragment Subscription",
            "subscriptions.warpTag": "Warp",
            "subscriptions.warpTitle": "Warp Subscription",
            "subscriptions.warpProTag": "Warp Pro",
            "subscriptions.warpProTitle": "Warp Pro Subscription",
            "password.changeTitle": "Change Password",
            "password.new": "New Password",
            "password.confirm": "Confirm Password",
            "password.changeAction": "Change Password",
            "password.errorPolicy": "⚠️ Password must contain at least one capital letter, one number, and be at least 8 characters long.",
            "myIp.title": "My IP",
            "myIp.info": "Information",
            "myIp.cloudflare": "Cloudflare targets",
            "myIp.other": "Other targets",
            "myIp.ip": "IP",
            "myIp.country": "Country",
            "myIp.city": "City",
            "myIp.isp": "ISP",
            "footer.github": "Github",
            "alerts.copied": "✅ Copied to clipboard:\\n\\n{{text}}",
            "alerts.confirm": "⚠️ Are you sure?",
            "alerts.protocolRequired": "⛔ At least one Protocol should be selected!",
            "alerts.tlsRequired": "⛔ At least one TLS port should be selected!",
            "alerts.riskyRules": "⛔ v2ray users should set Geo Assets to Chocolate4U and download assets, otherwise configs won't connect.\\n\\n❓ Proceed?",
            "alerts.resetConfirm": "⚠️ This will reset all panel settings.\\n\\n❓ Are you sure?",
            "alerts.resetSuccess": "✅ Panel settings reset to default successfully!\\n💡 Please update your subscriptions.",
            "alerts.sessionExpired": "⚠️ Session expired! Please login again.",
            "alerts.settingsApplied": "✅ Settings applied successfully!\\n💡 Please update your subscriptions.",
            "alerts.cleanIpApiEmpty": "⛔ CleanIP API URL is empty.\\n💡 Please fill in the API URL first.",
            "alerts.cleanIpApiInvalid": "⛔ CleanIP API URL is invalid.",
            "alerts.cleanIpFetchFailed": "Failed to fetch CleanIPs.",
            "alerts.cleanIpAdded": "✅ Added {{count}} CleanIPs.",
            "alerts.cleanIpFetchError": "⛔ Failed to fetch CleanIPs.\\n{{message}}",
            "alerts.invalidDnsUrl": "⛔ Invalid DNS, Please enter a URL.",
            "alerts.dnsProtocolInvalid": "⛔ Please enter TCP, DoH or DoT servers.",
            "alerts.cloudflareDnsNotAllowed": "⛔ Cloudflare DNS is not allowed for workers.\\n💡 Please use other public DNS servers like Google, Adguard...",
            "alerts.invalidHost": "⛔ Invalid IPs or Domains.\\n⚠️ {{host}}",
            "alerts.invalidIpsDomains": "⛔ Invalid IPs or Domains.\\n💡 Please enter each value in a new line.\\n\\n{{items}}",
            "alerts.invalidWarpDns": "⛔ Invalid Warp DNS.\\n💡 Please fill in an IPv4 address (UDP DNS).\\n\\n{{items}}",
            "alerts.invalidLocalDns": "⛔ Invalid local DNS.\\n💡 Please fill in an IPv4 address or \"localhost\".\\n\\n{{items}}",
            "alerts.invalidDomainIpRange": "⛔ Invalid IPs, Domains or IP ranges.\\n💡 Please enter each value in a new line.\\n\\n{{items}}",
            "alerts.invalidDomains": "⛔ Invalid Domains.\\n💡 Please enter each value in a new line.\\n\\n{{items}}",
            "alerts.invalidCustomIpsDomains": "⛔ Invalid IPs or Domains.\\n💡 Please enter each value in a new line.\\n\\n{{items}}",
            "alerts.invalidProxyIps": "⛔ Invalid proxy IPs.\\n💡 Please enter each value in a new line.\\n\\n{{items}}",
            "alerts.invalidNat64": "⛔ Invalid NAT64 prefix.\\n💡 Please enter each prefix in a new line using [].\\n\\n{{items}}",
            "alerts.invalidEndpoint": "⛔ Invalid endpoint.\\n\\n{{items}}",
            "alerts.invalidConfigStandard": "⛔ Invalid Config!\\n💡 Standard formats are:\\n\\n + (socks or socks5 or http)://user:pass@server:port\\n + (socks or socks5 or http)://base64@server:port\\n + vless://uuid@server:port...\\n + vmess://base64\\n + trojan://password@server:port...\\n + ss://base64@server:port...",
            "alerts.invalidConfigCredentials": "⛔ Invalid Config!\\n💡 Config URL should contain UUID or Password.",
            "alerts.invalidConfigSecurity": "⛔ Invalid Config!\\n💡 VLESS, VMess or Trojan security can be TLS, Reality or None.",
            "alerts.invalidConfigTransport": "⛔ Invalid Config!\\n💡 VLESS, VMess or Trojan transmission can be tcp, ws, grpc or httpupgrade.",
            "alerts.customCdnMissing": "⛔ All \"Custom\" fields should be filled or deleted together!",
            "alerts.invalidNoiseMode": "⛔ Invalid noise  mode.\\n💡 Please use \"none\", \"quic\", \"random\" or a valid hex value.",
            "alerts.noiseDelayInvalid": "⛔ The minimum noise delay should be smaller or equal to maximum!",
            "alerts.noiseBase64Invalid": "⛔ The Base64 noise packet is not a valid base64 value!",
            "alerts.noiseRandomInvalid": "⛔ The Random noise packet should be a range like 0-10 or 10-30!",
            "alerts.noiseRandomRangeInvalid": "⛔ The minimum Random noise packet should be smaller or equal to maximum!",
            "alerts.noiseHexInvalid": "⛔ The Hex noise packet is not a valid hex value!\\n💡 It should have even length and consisted of 0-9, a-f and A-F.",
            "alerts.cannotDeleteNoise": "⛔ You cannot delete all noises!",
            "alerts.deleteNoiseConfirm": "⚠️ This will delete the noise.\\n\\n❓ Are you sure?",
            "alerts.warpUpdateError": "⚠️ An error occured, Please try again!\\n⛔ {{message}}",
            "alerts.warpUpdated": "✅ Warp configs updated successfully!",
            "alerts.minMaxInvalid": "⛔ {{label}}: Minimum cannot be bigger than Maximum!",
            "alerts.passwordMismatch": "Passwords do not match",
            "alerts.passwordChanged": "✅ Password changed successfully! 👍",
            "labels.fragmentLength": "Fragment Length",
            "labels.fragmentInterval": "Fragment Interval",
            "labels.fragmentMaxSplit": "Fragment Max Split",
            "labels.noiseCount": "Noise Count",
            "labels.noiseSize": "Noise Size",
            "labels.noiseDelay": "Noise Delay",
            "labels.amneziaNoiseSize": "Amnezia Noise Size",
            "noise.title": "Noise {{index}}",
            "noise.mode": "😵‍💫 Mode",
            "noise.packet": "📦 Packet",
            "noise.count": "🎚️ Count",
            "noise.delay": "🕞 Delay",
            "noise.applyTo": "⚙️ Applies to",
            "noise.base64": "Base64",
            "noise.random": "Random",
            "noise.string": "String",
            "noise.hex": "Hex",
            "noise.applyIp": "IP",
            "noise.applyIpv4": "IPv4",
            "noise.applyIpv6": "IPv6"
        }
    },
    fa: {
        translation: {
            "app.title": "پنل BPB {{version}}",
            "language.label": "زبان",
            "common.help": "راهنما",
            "common.scanner": "اسکنر",
            "settings.title": "تنظیمات",
            "settings.common": "مشترک",
            "settings.vlessTrojan": "VLESS - Trojan",
            "settings.xrayFragment": "قطعه‌بندی Xray",
            "settings.warpGeneral": "Warp عمومی",
            "settings.warpPro": "Warp PRO",
            "settings.routingRules": "قوانین مسیریابی",
            "section.proxyIp": "پروکسی IP",
            "section.customCdn": "CDN سفارشی",
            "section.mahsaNoise": "نویز MahsaNG",
            "section.clashNoise": "نویز Clash - Amnezia",
            "section.v2rayNoise": "نویز v2rayNG - v2rayN",
            "section.presetRules": "قوانین پیش‌فرض",
            "section.customRules": "قوانین سفارشی",
            "section.sanctionRules": "قوانین تحریم",
            "form.localDns": "🏚️ DNS محلی",
            "form.antiSanctionDns": "🌏 DNS ضد تحریم",
            "form.fakeDns": "🧢 DNS جعلی",
            "form.ipv6": "🔛 IPv6",
            "form.allowLan": "⛔ اجازه اتصال از LAN",
            "form.logLevel": "🎚️ سطح لاگ",
            "form.remoteDns": "🌏 DNS ریموت",
            "form.chainProxy": "✈️ پروکسی زنجیره‌ای",
            "form.cleanIps": "✨ IP/دامنه تمیز",
            "form.cleanIpApiUrl": "🧪 آدرس CleanIP API",
            "form.cleanIpApiPlaceholder": "http://127.0.0.1:7860/http",
            "form.fetchCleanIps": "🧹 دریافت CleanIP",
            "form.protocols": "⚙️ پروتکل‌ها",
            "form.tlsPorts": "🔒 پورت‌های TLS",
            "form.nonTlsPorts": "🔓 پورت‌های بدون TLS",
            "form.fingerprint": "👆 فینگرپرینت",
            "form.bestInterval": "🔄 بهترین بازه",
            "form.tcpFastOpen": "⏩ TCP Fast Open",
            "form.mode": "🎚️ حالت",
            "form.proxyIps": "📍 IP/دامنه پروکسی",
            "form.proxyIpsTitle": "IPهای پروکسی",
            "form.nat64Prefixes": "📍 پیشوندهای NAT64",
            "form.nat64PrefixesTitle": "پیشوندهای NAT64",
            "form.customCdnAddresses": "💀 آدرس‌ها",
            "form.customCdnHost": "💀 میزبان",
            "form.customCdnSni": "💀 SNI",
            "form.fragmentLength": "📐 طول",
            "form.fragmentInterval": "🕞 بازه",
            "form.fragmentMaxSplit": "⛓️ بیشترین تقسیم",
            "form.fragmentPackets": "📦 بسته‌ها",
            "form.warpRemoteDns": "🌏 DNS ریموت",
            "form.warpEndpoints": "✨ اندپوینت‌ها",
            "form.warpAccounts": "♻️ حساب‌های Warp",
            "form.noiseModeTitle": "یکی از 'none'، 'quic'، 'random' یا رشته HEX مثل 'ee0000000108aaaa' وارد کنید",
            "form.noiseCount": "🎚️ تعداد",
            "form.noiseSize": "📏 اندازه",
            "form.noiseDelay": "🕞 تاخیر",
            "form.bypassRules": "🟩 قوانین بایپس",
            "form.blockRules": "🟥 قوانین مسدودسازی",
            "form.bypassIpsDomains": "🟩 بایپس IP/دامنه",
            "form.blockIpsDomains": "🟥 مسدودسازی IP/دامنه",
            "form.bypassDomains": "🟩 بایپس دامنه‌ها",
            "options.enabled": "فعال",
            "options.disabled": "غیرفعال",
            "options.warning": "هشدار",
            "options.error": "خطا",
            "options.info": "اطلاعات",
            "options.debug": "دیباگ",
            "options.custom": "سفارشی",
            "options.low": "کم",
            "options.medium": "متوسط",
            "options.high": "زیاد",
            "options.severe": "شدید",
            "options.proxyIp": "پروکسی IP",
            "options.nat64": "NAT64",
            "protocols.vless": "VLESS",
            "protocols.trojan": "Trojan",
            "routing.iran": "ایران",
            "routing.china": "چین",
            "routing.russia": "روسیه",
            "routing.ads": "تبلیغات",
            "routing.porn": "پورن",
            "routing.quic": "QUIC",
            "routing.malware": "بدافزار",
            "routing.phishing": "فیشینگ",
            "routing.cryptominers": "ماینرها",
            "routing.chatgpt": "ChatGPT",
            "routing.googleAi": "Google AI",
            "routing.microsoft": "Microsoft",
            "routing.oracle": "Oracle",
            "routing.docker": "Docker",
            "routing.adobe": "Adobe",
            "routing.epicGames": "Epic Games",
            "routing.intel": "Intel",
            "routing.amd": "AMD",
            "routing.nvidia": "Nvidia",
            "routing.asus": "Asus",
            "routing.hp": "HP",
            "routing.lenovo": "Lenovo",
            "actions.fetch": "دریافت",
            "actions.update": "به‌روزرسانی",
            "actions.apply": "اعمال",
            "actions.loading": "⌛ در حال بارگذاری...",
            "actions.displayQr": "نمایش QR",
            "actions.copySubscription": "کپی لینک اشتراک",
            "actions.downloadConfig": "دانلود کانفیگ",
            "actions.downloadZip": "دانلود فایل ZIP",
            "actions.resetPanel": "ریست تنظیمات پنل به پیش‌فرض",
            "actions.exportPanel": "خروجی تنظیمات پنل",
            "actions.importPanel": "ورود تنظیمات پنل",
            "actions.logout": "خروج",
            "subscriptions.title": "اشتراک‌ها",
            "subscriptions.normal": "Normal",
            "subscriptions.fragment": "Fragment",
            "subscriptions.warp": "Warp",
            "subscriptions.warpPro": "Warp PRO",
            "subscriptions.normalTag": "Normal",
            "subscriptions.normalTitle": "اشتراک Normal",
            "subscriptions.fragmentTag": "Fragment",
            "subscriptions.fragmentTitle": "اشتراک Fragment",
            "subscriptions.warpTag": "Warp",
            "subscriptions.warpTitle": "اشتراک Warp",
            "subscriptions.warpProTag": "Warp Pro",
            "subscriptions.warpProTitle": "اشتراک Warp Pro",
            "password.changeTitle": "تغییر رمز عبور",
            "password.new": "رمز عبور جدید",
            "password.confirm": "تایید رمز عبور",
            "password.changeAction": "تغییر رمز عبور",
            "password.errorPolicy": "⚠️ رمز عبور باید حداقل یک حرف بزرگ، یک عدد و حداقل ۸ کاراکتر داشته باشد.",
            "myIp.title": "IP من",
            "myIp.info": "اطلاعات",
            "myIp.cloudflare": "اهداف Cloudflare",
            "myIp.other": "اهداف دیگر",
            "myIp.ip": "IP",
            "myIp.country": "کشور",
            "myIp.city": "شهر",
            "myIp.isp": "ارائه‌دهنده",
            "footer.github": "Github",
            "alerts.copied": "✅ در کلیپ‌بورد کپی شد:\\n\\n{{text}}",
            "alerts.confirm": "⚠️ مطمئن هستید؟",
            "alerts.protocolRequired": "⛔ حداقل یک پروتکل باید انتخاب شود!",
            "alerts.tlsRequired": "⛔ حداقل یک پورت TLS باید انتخاب شود!",
            "alerts.riskyRules": "⛔ کاربران v2ray باید Geo Assets را روی Chocolate4U تنظیم و فایل‌ها را دانلود کنند، در غیر این صورت کانفیگ‌ها وصل نمی‌شوند.\\n\\n❓ ادامه می‌دهید؟",
            "alerts.resetConfirm": "⚠️ این کار تمام تنظیمات پنل را ریست می‌کند.\\n\\n❓ مطمئن هستید؟",
            "alerts.resetSuccess": "✅ تنظیمات پنل با موفقیت به پیش‌فرض بازنشانی شد!\\n💡 لطفاً اشتراک‌ها را به‌روزرسانی کنید.",
            "alerts.sessionExpired": "⚠️ نشست منقضی شد! لطفاً دوباره وارد شوید.",
            "alerts.settingsApplied": "✅ تنظیمات با موفقیت اعمال شد!\\n💡 لطفاً اشتراک‌ها را به‌روزرسانی کنید.",
            "alerts.cleanIpApiEmpty": "⛔ آدرس CleanIP API خالی است.\\n💡 ابتدا آدرس API را وارد کنید.",
            "alerts.cleanIpApiInvalid": "⛔ آدرس CleanIP API نامعتبر است.",
            "alerts.cleanIpFetchFailed": "دریافت CleanIP ناموفق بود.",
            "alerts.cleanIpAdded": "✅ {{count}} CleanIP اضافه شد.",
            "alerts.cleanIpFetchError": "⛔ دریافت CleanIP ناموفق بود.\\n{{message}}",
            "alerts.invalidDnsUrl": "⛔ DNS نامعتبر است، لطفاً یک URL وارد کنید.",
            "alerts.dnsProtocolInvalid": "⛔ لطفاً سرورهای TCP، DoH یا DoT وارد کنید.",
            "alerts.cloudflareDnsNotAllowed": "⛔ DNS کلادفلر برای Workers مجاز نیست.\\n💡 لطفاً از DNS عمومی دیگر مانند Google یا Adguard استفاده کنید...",
            "alerts.invalidHost": "⛔ IP یا دامنه نامعتبر است.\\n⚠️ {{host}}",
            "alerts.invalidIpsDomains": "⛔ IP یا دامنه نامعتبر است.\\n💡 هر مقدار را در یک خط جداگانه وارد کنید.\\n\\n{{items}}",
            "alerts.invalidWarpDns": "⛔ DNS Warp نامعتبر است.\\n💡 یک آدرس IPv4 (UDP DNS) وارد کنید.\\n\\n{{items}}",
            "alerts.invalidLocalDns": "⛔ DNS محلی نامعتبر است.\\n💡 یک IPv4 یا \"localhost\" وارد کنید.\\n\\n{{items}}",
            "alerts.invalidDomainIpRange": "⛔ IP، دامنه یا رنج نامعتبر است.\\n💡 هر مقدار را در یک خط جداگانه وارد کنید.\\n\\n{{items}}",
            "alerts.invalidDomains": "⛔ دامنه‌های نامعتبر.\\n💡 هر مقدار را در یک خط جداگانه وارد کنید.\\n\\n{{items}}",
            "alerts.invalidCustomIpsDomains": "⛔ IP یا دامنه نامعتبر است.\\n💡 هر مقدار را در یک خط جداگانه وارد کنید.\\n\\n{{items}}",
            "alerts.invalidProxyIps": "⛔ IP پروکسی نامعتبر است.\\n💡 هر مقدار را در یک خط جداگانه وارد کنید.\\n\\n{{items}}",
            "alerts.invalidNat64": "⛔ پیشوند NAT64 نامعتبر است.\\n💡 هر پیشوند را در یک خط جداگانه با [] وارد کنید.\\n\\n{{items}}",
            "alerts.invalidEndpoint": "⛔ اندپوینت نامعتبر است.\\n\\n{{items}}",
            "alerts.invalidConfigStandard": "⛔ کانفیگ نامعتبر است!\\n💡 فرمت‌های استاندارد:\\n\\n + (socks یا socks5 یا http)://user:pass@server:port\\n + (socks یا socks5 یا http)://base64@server:port\\n + vless://uuid@server:port...\\n + vmess://base64\\n + trojan://password@server:port...\\n + ss://base64@server:port...",
            "alerts.invalidConfigCredentials": "⛔ کانفیگ نامعتبر است!\\n💡 URL باید UUID یا Password داشته باشد.",
            "alerts.invalidConfigSecurity": "⛔ کانفیگ نامعتبر است!\\n💡 امنیت VLESS/VMess/Trojan می‌تواند TLS، Reality یا None باشد.",
            "alerts.invalidConfigTransport": "⛔ کانفیگ نامعتبر است!\\n💡 انتقال VLESS/VMess/Trojan می‌تواند tcp، ws، grpc یا httpupgrade باشد.",
            "alerts.customCdnMissing": "⛔ همه فیلدهای \"Custom\" باید با هم پر یا خالی شوند!",
            "alerts.invalidNoiseMode": "⛔ حالت نویز نامعتبر است.\\n💡 از \"none\"، \"quic\"، \"random\" یا یک مقدار hex معتبر استفاده کنید.",
            "alerts.noiseDelayInvalid": "⛔ کمترین تاخیر نویز باید کمتر یا برابر بیشترین مقدار باشد!",
            "alerts.noiseBase64Invalid": "⛔ بسته نویز Base64 معتبر نیست!",
            "alerts.noiseRandomInvalid": "⛔ بسته نویز Random باید مانند 0-10 یا 10-30 باشد!",
            "alerts.noiseRandomRangeInvalid": "⛔ کمترین مقدار Random باید کمتر یا برابر بیشترین مقدار باشد!",
            "alerts.noiseHexInvalid": "⛔ بسته نویز Hex معتبر نیست!\\n💡 باید طول زوج داشته و شامل 0-9 و a-f/A-F باشد.",
            "alerts.cannotDeleteNoise": "⛔ نمی‌توانید همه نویزها را حذف کنید!",
            "alerts.deleteNoiseConfirm": "⚠️ این نویز حذف می‌شود.\\n\\n❓ مطمئن هستید؟",
            "alerts.warpUpdateError": "⚠️ خطایی رخ داد، دوباره تلاش کنید!\\n⛔ {{message}}",
            "alerts.warpUpdated": "✅ تنظیمات Warp با موفقیت به‌روزرسانی شد!",
            "alerts.minMaxInvalid": "⛔ {{label}}: حداقل نمی‌تواند بزرگتر از حداکثر باشد!",
            "alerts.passwordMismatch": "رمز عبور یکسان نیست",
            "alerts.passwordChanged": "✅ رمز عبور با موفقیت تغییر کرد! 👍",
            "labels.fragmentLength": "طول Fragment",
            "labels.fragmentInterval": "بازه Fragment",
            "labels.fragmentMaxSplit": "حداکثر تقسیم Fragment",
            "labels.noiseCount": "تعداد Noise",
            "labels.noiseSize": "اندازه Noise",
            "labels.noiseDelay": "تاخیر Noise",
            "labels.amneziaNoiseSize": "اندازه Noise ام‌نزیـا",
            "noise.title": "Noise {{index}}",
            "noise.mode": "😵‍💫 حالت",
            "noise.packet": "📦 بسته",
            "noise.count": "🎚️ تعداد",
            "noise.delay": "🕞 تاخیر",
            "noise.applyTo": "⚙️ اعمال روی",
            "noise.base64": "Base64",
            "noise.random": "Random",
            "noise.string": "String",
            "noise.hex": "Hex",
            "noise.applyIp": "IP",
            "noise.applyIpv4": "IPv4",
            "noise.applyIpv6": "IPv6"
        }
    },
    zh: {
        translation: {
            "app.title": "BPB 面板 {{version}}",
            "language.label": "语言",
            "common.help": "帮助",
            "common.scanner": "扫描器",
            "settings.title": "设置",
            "settings.common": "通用",
            "settings.vlessTrojan": "VLESS - Trojan",
            "settings.xrayFragment": "Xray 分片",
            "settings.warpGeneral": "Warp 常规",
            "settings.warpPro": "Warp PRO",
            "settings.routingRules": "路由规则",
            "section.proxyIp": "代理 IP",
            "section.customCdn": "自定义 CDN",
            "section.mahsaNoise": "MahsaNG 噪声",
            "section.clashNoise": "Clash - Amnezia 噪声",
            "section.v2rayNoise": "v2rayNG - v2rayN 噪声",
            "section.presetRules": "预设规则",
            "section.customRules": "自定义规则",
            "section.sanctionRules": "制裁规则",
            "form.localDns": "🏚️ 本地 DNS",
            "form.antiSanctionDns": "🌏 反制裁 DNS",
            "form.fakeDns": "🧢 虚假 DNS",
            "form.ipv6": "🔛 IPv6",
            "form.allowLan": "⛔ 允许局域网连接",
            "form.logLevel": "🎚️ 日志级别",
            "form.remoteDns": "🌏 远程 DNS",
            "form.chainProxy": "✈️ 链式代理",
            "form.cleanIps": "✨ 干净 IP/域名",
            "form.cleanIpApiUrl": "🧪 CleanIP API 地址",
            "form.cleanIpApiPlaceholder": "http://127.0.0.1:7860/http",
            "form.fetchCleanIps": "🧹 获取 CleanIP",
            "form.protocols": "⚙️ 协议",
            "form.tlsPorts": "🔒 TLS 端口",
            "form.nonTlsPorts": "🔓 非 TLS 端口",
            "form.fingerprint": "👆 指纹",
            "form.bestInterval": "🔄 最佳间隔",
            "form.tcpFastOpen": "⏩ TCP 快速打开",
            "form.mode": "🎚️ 模式",
            "form.proxyIps": "📍 代理 IP/域名",
            "form.proxyIpsTitle": "代理 IP",
            "form.nat64Prefixes": "📍 NAT64 前缀",
            "form.nat64PrefixesTitle": "NAT64 前缀",
            "form.customCdnAddresses": "💀 地址",
            "form.customCdnHost": "💀 主机",
            "form.customCdnSni": "💀 SNI",
            "form.fragmentLength": "📐 长度",
            "form.fragmentInterval": "🕞 间隔",
            "form.fragmentMaxSplit": "⛓️ 最大分片",
            "form.fragmentPackets": "📦 包类型",
            "form.warpRemoteDns": "🌏 远程 DNS",
            "form.warpEndpoints": "✨ 端点",
            "form.warpAccounts": "♻️ Warp 账号",
            "form.noiseModeTitle": "填写 'none'、'quic'、'random' 或任意 HEX 字符串，如 'ee0000000108aaaa'",
            "form.noiseCount": "🎚️ 数量",
            "form.noiseSize": "📏 大小",
            "form.noiseDelay": "🕞 延迟",
            "form.bypassRules": "🟩 绕过规则",
            "form.blockRules": "🟥 阻止规则",
            "form.bypassIpsDomains": "🟩 绕过 IP/域名",
            "form.blockIpsDomains": "🟥 阻止 IP/域名",
            "form.bypassDomains": "🟩 绕过域名",
            "options.enabled": "启用",
            "options.disabled": "禁用",
            "options.warning": "警告",
            "options.error": "错误",
            "options.info": "信息",
            "options.debug": "调试",
            "options.custom": "自定义",
            "options.low": "低",
            "options.medium": "中",
            "options.high": "高",
            "options.severe": "严重",
            "options.proxyIp": "代理 IP",
            "options.nat64": "NAT64",
            "protocols.vless": "VLESS",
            "protocols.trojan": "Trojan",
            "routing.iran": "伊朗",
            "routing.china": "中国",
            "routing.russia": "俄罗斯",
            "routing.ads": "广告",
            "routing.porn": "色情",
            "routing.quic": "QUIC",
            "routing.malware": "恶意软件",
            "routing.phishing": "钓鱼",
            "routing.cryptominers": "挖矿",
            "routing.chatgpt": "ChatGPT",
            "routing.googleAi": "Google AI",
            "routing.microsoft": "Microsoft",
            "routing.oracle": "Oracle",
            "routing.docker": "Docker",
            "routing.adobe": "Adobe",
            "routing.epicGames": "Epic Games",
            "routing.intel": "Intel",
            "routing.amd": "AMD",
            "routing.nvidia": "Nvidia",
            "routing.asus": "Asus",
            "routing.hp": "HP",
            "routing.lenovo": "Lenovo",
            "actions.fetch": "获取",
            "actions.update": "更新",
            "actions.apply": "应用",
            "actions.loading": "⌛ 加载中...",
            "actions.displayQr": "显示二维码",
            "actions.copySubscription": "复制订阅链接",
            "actions.downloadConfig": "下载配置",
            "actions.downloadZip": "下载 ZIP",
            "actions.resetPanel": "重置面板设置",
            "actions.exportPanel": "导出面板设置",
            "actions.importPanel": "导入面板设置",
            "actions.logout": "退出登录",
            "subscriptions.title": "订阅",
            "subscriptions.normal": "常规",
            "subscriptions.fragment": "分片",
            "subscriptions.warp": "Warp",
            "subscriptions.warpPro": "Warp PRO",
            "subscriptions.normalTag": "Normal",
            "subscriptions.normalTitle": "常规订阅",
            "subscriptions.fragmentTag": "Fragment",
            "subscriptions.fragmentTitle": "分片订阅",
            "subscriptions.warpTag": "Warp",
            "subscriptions.warpTitle": "Warp 订阅",
            "subscriptions.warpProTag": "Warp Pro",
            "subscriptions.warpProTitle": "Warp Pro 订阅",
            "password.changeTitle": "修改密码",
            "password.new": "新密码",
            "password.confirm": "确认密码",
            "password.changeAction": "修改密码",
            "password.errorPolicy": "⚠️ 密码必须包含至少一个大写字母、一个数字，且长度至少 8 位。",
            "myIp.title": "我的 IP",
            "myIp.info": "信息",
            "myIp.cloudflare": "Cloudflare 目标",
            "myIp.other": "其他目标",
            "myIp.ip": "IP",
            "myIp.country": "国家",
            "myIp.city": "城市",
            "myIp.isp": "运营商",
            "footer.github": "Github",
            "alerts.copied": "✅ 已复制到剪贴板：\\n\\n{{text}}",
            "alerts.confirm": "⚠️ 确定吗？",
            "alerts.protocolRequired": "⛔ 至少选择一个协议！",
            "alerts.tlsRequired": "⛔ 至少选择一个 TLS 端口！",
            "alerts.riskyRules": "⛔ v2ray 用户需将 Geo Assets 设置为 Chocolate4U 并下载资源，否则配置无法连接。\\n\\n❓ 继续？",
            "alerts.resetConfirm": "⚠️ 此操作将重置所有面板设置。\\n\\n❓ 确定吗？",
            "alerts.resetSuccess": "✅ 面板设置已重置为默认值！\\n💡 请更新订阅。",
            "alerts.sessionExpired": "⚠️ 会话已过期！请重新登录。",
            "alerts.settingsApplied": "✅ 设置已成功应用！\\n💡 请更新订阅。",
            "alerts.cleanIpApiEmpty": "⛔ CleanIP API 地址为空。\\n💡 请先填写 API 地址。",
            "alerts.cleanIpApiInvalid": "⛔ CleanIP API 地址无效。",
            "alerts.cleanIpFetchFailed": "获取 CleanIP 失败。",
            "alerts.cleanIpAdded": "✅ 已新增 {{count}} 条 CleanIP。",
            "alerts.cleanIpFetchError": "⛔ 获取 CleanIP 失败。\\n{{message}}",
            "alerts.invalidDnsUrl": "⛔ DNS 无效，请输入 URL。",
            "alerts.dnsProtocolInvalid": "⛔ 请输入 TCP、DoH 或 DoT 服务器。",
            "alerts.cloudflareDnsNotAllowed": "⛔ Workers 不允许使用 Cloudflare DNS。\\n💡 请使用其他公共 DNS，如 Google、Adguard...",
            "alerts.invalidHost": "⛔ IP 或域名无效。\\n⚠️ {{host}}",
            "alerts.invalidIpsDomains": "⛔ IP 或域名无效。\\n💡 请每行填写一个值。\\n\\n{{items}}",
            "alerts.invalidWarpDns": "⛔ Warp DNS 无效。\\n💡 请输入 IPv4 地址（UDP DNS）。\\n\\n{{items}}",
            "alerts.invalidLocalDns": "⛔ 本地 DNS 无效。\\n💡 请输入 IPv4 地址或 \"localhost\"。\\n\\n{{items}}",
            "alerts.invalidDomainIpRange": "⛔ IP、域名或 IP 段无效。\\n💡 请每行填写一个值。\\n\\n{{items}}",
            "alerts.invalidDomains": "⛔ 域名无效。\\n💡 请每行填写一个值。\\n\\n{{items}}",
            "alerts.invalidCustomIpsDomains": "⛔ IP 或域名无效。\\n💡 请每行填写一个值。\\n\\n{{items}}",
            "alerts.invalidProxyIps": "⛔ 代理 IP 无效。\\n💡 请每行填写一个值。\\n\\n{{items}}",
            "alerts.invalidNat64": "⛔ NAT64 前缀无效。\\n💡 请每行使用 [] 输入一个前缀。\\n\\n{{items}}",
            "alerts.invalidEndpoint": "⛔ 端点无效。\\n\\n{{items}}",
            "alerts.invalidConfigStandard": "⛔ 配置无效！\\n💡 标准格式：\\n\\n + (socks 或 socks5 或 http)://user:pass@server:port\\n + (socks 或 socks5 或 http)://base64@server:port\\n + vless://uuid@server:port...\\n + vmess://base64\\n + trojan://password@server:port...\\n + ss://base64@server:port...",
            "alerts.invalidConfigCredentials": "⛔ 配置无效！\\n💡 配置 URL 应包含 UUID 或密码。",
            "alerts.invalidConfigSecurity": "⛔ 配置无效！\\n💡 VLESS/VMess/Trojan 安全可为 TLS、Reality 或 None。",
            "alerts.invalidConfigTransport": "⛔ 配置无效！\\n💡 VLESS/VMess/Trojan 传输可为 tcp、ws、grpc 或 httpupgrade。",
            "alerts.customCdnMissing": "⛔ 所有 \"Custom\" 字段必须一起填写或一起清空！",
            "alerts.invalidNoiseMode": "⛔ 噪声模式无效。\\n💡 请使用 \"none\"、\"quic\"、\"random\" 或有效的 hex 值。",
            "alerts.noiseDelayInvalid": "⛔ 最小延迟必须小于或等于最大值！",
            "alerts.noiseBase64Invalid": "⛔ Base64 噪声包无效！",
            "alerts.noiseRandomInvalid": "⛔ Random 噪声包应为 0-10 或 10-30 之类的范围！",
            "alerts.noiseRandomRangeInvalid": "⛔ Random 噪声包最小值必须小于或等于最大值！",
            "alerts.noiseHexInvalid": "⛔ Hex 噪声包无效！\\n💡 必须为偶数长度，且只包含 0-9、a-f、A-F。",
            "alerts.cannotDeleteNoise": "⛔ 不能删除所有噪声！",
            "alerts.deleteNoiseConfirm": "⚠️ 将删除该噪声。\\n\\n❓ 确定吗？",
            "alerts.warpUpdateError": "⚠️ 发生错误，请重试！\\n⛔ {{message}}",
            "alerts.warpUpdated": "✅ Warp 配置更新成功！",
            "alerts.minMaxInvalid": "⛔ {{label}}：最小值不能大于最大值！",
            "alerts.passwordMismatch": "两次输入的密码不一致",
            "alerts.passwordChanged": "✅ 密码修改成功！ 👍",
            "labels.fragmentLength": "Fragment 长度",
            "labels.fragmentInterval": "Fragment 间隔",
            "labels.fragmentMaxSplit": "Fragment 最大分片",
            "labels.noiseCount": "Noise 数量",
            "labels.noiseSize": "Noise 大小",
            "labels.noiseDelay": "Noise 延迟",
            "labels.amneziaNoiseSize": "Amnezia Noise 大小",
            "noise.title": "Noise {{index}}",
            "noise.mode": "😵‍💫 模式",
            "noise.packet": "📦 数据包",
            "noise.count": "🎚️ 数量",
            "noise.delay": "🕞 延迟",
            "noise.applyTo": "⚙️ 应用于",
            "noise.base64": "Base64",
            "noise.random": "Random",
            "noise.string": "String",
            "noise.hex": "Hex",
            "noise.applyIp": "IP",
            "noise.applyIpv4": "IPv4",
            "noise.applyIpv6": "IPv6"
        }
    }
};

const supportedLanguages = ['en', 'fa', 'zh'];
const languageSelect = document.getElementById('languageSelect');
const t = (key, options) => i18next.t(key, options);

function setDocumentLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-title]').forEach((element) => {
        const key = element.getAttribute('data-i18n-title');
        element.setAttribute('title', t(key));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.setAttribute('placeholder', t(key));
    });

    const version = document.getElementById('panel-version').textContent.trim();
    document.title = t('app.title', { version });

    const noises = getCurrentXrayNoises();
    if (noises) {
        renderUdpNoiseBlock(noises);
    }
}

function getCurrentXrayNoises() {
    const configForm = document.getElementById('configForm');
    if (!configForm) return null;
    const formData = new FormData(configForm);
    const modes = formData.getAll('udpXrayNoiseMode');
    if (!modes.length) return null;

    const packets = formData.getAll('udpXrayNoisePacket');
    const delaysMin = formData.getAll('udpXrayNoiseDelayMin');
    const delaysMax = formData.getAll('udpXrayNoiseDelayMax');
    const counts = formData.getAll('udpXrayNoiseCount');
    const applyTo = formData.getAll('applyTo');

    return modes.map((mode, index) => ({
        type: mode,
        packet: packets[index],
        delay: `${delaysMin[index]}-${delaysMax[index]}`,
        applyTo: applyTo[index],
        count: counts[index]
    }));
}

async function initI18n() {
    const storedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    const initialLanguage = supportedLanguages.includes(storedLanguage)
        ? storedLanguage
        : supportedLanguages.includes(browserLanguage)
            ? browserLanguage
            : 'en';

    await i18next.init({
        lng: initialLanguage,
        fallbackLng: 'en',
        resources,
        interpolation: { escapeValue: false }
    });

    setDocumentLanguage(initialLanguage);
    if (languageSelect) {
        languageSelect.value = initialLanguage;
    }
    applyTranslations();
}

initI18n();

if (languageSelect) {
    languageSelect.addEventListener('change', async (event) => {
        const newLang = event.target.value;
        await i18next.changeLanguage(newLang);
        localStorage.setItem('language', newLang);
        setDocumentLanguage(newLang);
        applyTranslations();
    });
}

localStorage.getItem('darkMode') === 'enabled' && document.body.classList.add('dark-mode');
const form = document.getElementById("configForm");
const [
    selectElements,
    numInputElements,
    inputElements,
    textareaElements,
    checkboxElements
] = [
    'select',
    'input[type=number]',
    'input:not([type=file])',
    'textarea',
    'input[type=checkbox]'
].map(query => form.querySelectorAll(query));

const defaultHttpsPorts = [443, 8443, 2053, 2083, 2087, 2096];
const defaultHttpPorts = [80, 8080, 8880, 2052, 2082, 2086, 2095];

fetch('/panel/settings')
    .then(async response => response.json())
    .then(({ success, status, message, body }) => {

        if (status === 401 && !body.isPassSet) {
            const closeBtn = document.querySelector(".close");
            openResetPass();
            closeBtn.style.display = 'none';
        }

        if (!success) {
            throw new Error(`status ${status} - ${message}`);
        }

        const { subPath, proxySettings } = body;
        globalThis.subPath = encodeURIComponent(subPath);
        initiatePanel(proxySettings);
    })
    .catch(error => console.error("Data query error:", error.message || error))
    .finally(() => {
        window.onclick = (event) => {
            const qrModal = document.getElementById('qrModal');
            const qrcodeContainer = document.getElementById('qrcode-container');

            if (event.target == qrModal) {
                qrModal.style.display = "none";
                qrcodeContainer.lastElementChild.remove();
            }
        }

        document.querySelectorAll(".toggle-password").forEach(toggle => {
            toggle.addEventListener("click", function () {
                const input = this.previousElementSibling;
                const isPassword = input.type === "password";
                input.type = isPassword ? "text" : "password";
                this.textContent = isPassword ? "visibility" : "visibility_off";
            });
        });
    });

function initiatePanel(proxySettings) {
    const {
        VLConfigs,
        TRConfigs,
        ports,
        xrayUdpNoises
    } = proxySettings;

    Object.assign(globalThis, {
        activeProtocols: VLConfigs + TRConfigs,
        activeTlsPorts: ports.filter(port => defaultHttpsPorts.includes(port)),
        xrayNoiseCount: xrayUdpNoises.length,
    });

    populatePanel(proxySettings);
    renderPortsBlock(ports.map(Number));
    renderUdpNoiseBlock(xrayUdpNoises);
    initiateForm();
    fetchIPInfo();
}

function populatePanel(proxySettings) {
    selectElements.forEach(elm => elm.value = proxySettings[elm.id]);
    checkboxElements.forEach(elm => elm.checked = proxySettings[elm.id]);
    inputElements.forEach(elm => elm.value = proxySettings[elm.id] || "");
    textareaElements.forEach(elm => {
        const key = elm.id;
        const element = document.getElementById(key);
        const value = proxySettings[key]?.join('\r\n');
        const rowsCount = proxySettings[key].length;
        element.style.height = 'auto';
        if (rowsCount) element.rows = rowsCount;
        element.value = value;
    });
}

function initiateForm() {
    const configForm = document.getElementById('configForm');
    globalThis.initialFormData = new FormData(configForm);
    enableApplyButton();

    configForm.addEventListener('input', enableApplyButton);
    configForm.addEventListener('change', enableApplyButton);
    const textareas = document.querySelectorAll("textarea");

    textareas.forEach(textarea => {
        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = `${this.scrollHeight}px`;
        });
    });

    handleFragmentMode();
}

function hasFormDataChanged() {
    const formDataToObject = (formData) => Object.fromEntries(formData.entries());
    const configForm = document.getElementById('configForm');
    const currentFormData = new FormData(configForm);

    const initialFormDataObj = formDataToObject(globalThis.initialFormData);
    const currentFormDataObj = formDataToObject(currentFormData);

    return JSON.stringify(initialFormDataObj) !== JSON.stringify(currentFormDataObj);
}

function enableApplyButton() {
    const applyButton = document.getElementById('applyButton');
    const isChanged = hasFormDataChanged();
    applyButton.disabled = !isChanged;
    applyButton.classList.toggle('disabled', !isChanged);
}

function openResetPass() {
    const resetPassModal = document.getElementById('resetPassModal');
    resetPassModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeResetPass() {
    const resetPassModal = document.getElementById('resetPassModal');
    resetPassModal.style.display = "none";
    document.body.style.overflow = "";
}

function closeQR() {
    const qrModal = document.getElementById('qrModal');
    const qrcodeContainer = document.getElementById('qrcode-container');
    qrModal.style.display = "none";
    qrcodeContainer.lastElementChild.remove();
}

function darkModeToggle() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

async function getIpDetails(ip) {
    try {
        const response = await fetch('/panel/my-ip', { method: 'POST', body: ip });
        const { success, status, message, body } = await response.json();

        if (!success) {
            throw new Error(`status ${status} - ${message}`);
        }

        return body;
    } catch (error) {
        console.error("Fetching IP error:", error.message || error)
    }
}

async function fetchIPInfo() {
    const refreshIcon = document.getElementById("refresh-geo-location").querySelector('i');
    refreshIcon.classList.add('fa-spin');
    const updateUI = (ip = '-', country = '-', countryCode = '-', city = '-', isp = '-', cfIP) => {
        const flag = countryCode !== '-' ? String.fromCodePoint(...[...countryCode].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) : '';
        const updateContent = (id, content) => document.getElementById(id).textContent = content;
        updateContent(cfIP ? 'cf-ip' : 'ip', ip);
        updateContent(cfIP ? 'cf-country' : 'country', `${country} ${flag}`);
        updateContent(cfIP ? 'cf-city' : 'city', city);
        updateContent(cfIP ? 'cf-isp' : 'isp', isp);
    };

    try {
        const response = await fetch('https://ipwho.is/' + '?nocache=' + Date.now(), { cache: "no-store" });
        const { success, ip, message } = await response.json();

        if (!success) {
            throw new Error(`Fetch Other targets IP failed at ${response.url} - ${message}`);
        }

        const { country, countryCode, city, isp } = await getIpDetails(ip);
        updateUI(ip, country, countryCode, city, isp);
        refreshIcon.classList.remove('fa-spin');
    } catch (error) {
        console.error("Fetching IP error:", error.message || error)
    }

    try {
        const response = await fetch('https://ipv4.icanhazip.com/?nocache=' + Date.now(), { cache: "no-store" });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Fetch Cloudflare targets IP failed with status ${response.status} at ${response.url} - ${errorMessage}`);
        }

        const ip = await response.text();
        const { country, countryCode, city, isp } = await getIpDetails(ip);
        updateUI(ip, country, countryCode, city, isp, true);
        refreshIcon.classList.remove('fa-spin');
    } catch (error) {
        console.error("Fetching IP error:", error.message || error)
    }
}

function downloadWarpConfigs(isAmnezia) {
    const client = isAmnezia ? "?app=amnezia" : "";
    window.location.href = "/panel/get-warp-configs" + client;
}

function generateSubUrl(path, app, tagKey, singboxType) {
    const url = new URL(window.location.href);
    url.pathname = `/sub/${path}/${globalThis.subPath}`;
    app && url.searchParams.append('app', app);

    const tag = tagKey ? t(tagKey) : '';
    if (tag) {
        url.hash = `💦 BPB ${tag}`;
    }

    return singboxType
        ? `sing-box://import-remote-profile?url=${url.href}`
        : url.href;
}

function subURL(path, app, tagKey, singboxType) {
    const url = generateSubUrl(path, app, tagKey, singboxType);
    copyToClipboard(url);
}

async function dlURL(path, app) {
    const url = generateSubUrl(path, app);

    try {
        const response = await fetch(url);
        const data = await response.text();

        if (!response.ok) {
            throw new Error(`status ${response.status} at ${response.url} - ${data}`);
        }

        downloadJSON(data, "config.json");
    } catch (error) {
        console.error("Download error:", error.message || error);
    }
}

function downloadJSON(data, fileName) {
    const blob = new Blob([data], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportSettings() {
    const form = validateSettings();
    const data = JSON.stringify(form, null, 4);
    const encodedData = btoa(data);
    downloadJSON(encodedData, `BPB-settings.dat`);
}

function importSettings() {
    const input = document.getElementById('fileInput');
    input.value = '';
    input.click();
}

async function uploadSettings(event) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const text = await file.text();
        const data = atob(text);
        const settings = JSON.parse(data);
        updateSettings(event, settings);
        initiatePanel(settings);
    } catch (err) {
        console.error('Failed to import settings:', err.message);
    }
}

function openQR(path, app, tagKey, titleKey, singboxType) {
    const qrModal = document.getElementById('qrModal');
    const qrcodeContainer = document.getElementById('qrcode-container');
    const url = generateSubUrl(path, app, tagKey, singboxType);
    let qrcodeTitle = document.getElementById("qrcodeTitle");
    qrcodeTitle.textContent = titleKey ? t(titleKey) : '';
    qrModal.style.display = "block";
    let qrcodeDiv = document.createElement("div");
    qrcodeDiv.className = "qrcode";
    qrcodeDiv.style.padding = "2px";
    qrcodeDiv.style.backgroundColor = "#ffffff";
    /* global QRCode */
    new QRCode(qrcodeDiv, {
        text: url,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrcodeContainer.appendChild(qrcodeDiv);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert(t('alerts.copied', { text })))
        .catch(error => console.error('Failed to copy:', error));
}

async function updateWarpConfigs() {
    const confirmReset = confirm(t('alerts.confirm'));
    if (!confirmReset) return;
    const refreshBtn = document.getElementById('warp-update');
    document.body.style.cursor = 'wait';
    refreshBtn.classList.add('fa-spin');

    try {
        const response = await fetch('/panel/update-warp', { method: 'POST', credentials: 'include' });
        const { success, status, message } = await response.json();

        document.body.style.cursor = 'default';
        refreshBtn.classList.remove('fa-spin');

        if (!success) {
            alert(t('alerts.warpUpdateError', { message }));

            throw new Error(`status ${status} - ${message}`);
        }

        alert(t('alerts.warpUpdated'));
    } catch (error) {
        console.error("Updating Warp configs error:", error.message || error)
    }
}

function handleProtocolChange(event) {
    if (event.target.checked) {
        globalThis.activeProtocols++;
        return true;
    }

    globalThis.activeProtocols--;

    if (globalThis.activeProtocols === 0) {
        event.preventDefault();
        event.target.checked = !event.target.checked;
        alert(t('alerts.protocolRequired'));
        globalThis.activeProtocols++;
        return false;
    }
}

function handlePortChange(event) {
    const portField = Number(event.target.name);

    if (event.target.checked) {
        globalThis.activeTlsPorts.push(portField);
        return true;
    }

    globalThis.activeTlsPorts = globalThis.activeTlsPorts.filter(port => port !== portField);

    if (globalThis.activeTlsPorts.length === 0) {
        event.preventDefault();
        event.target.checked = !event.target.checked;
        alert(t('alerts.tlsRequired'));
        globalThis.activeTlsPorts.push(portField);
        return false;
    }
}

function handleRiskyRules(event) {
    if (event.target.checked) {
        const proceed = confirm(t('alerts.riskyRules'));

        if (!proceed) {
            event.target.checked = false;
            return;
        }
    }
}

function handleFragmentMode() {
    const fragmentMode = document.getElementById("fragmentMode").value;
    const formDataObj = Object.fromEntries(globalThis.initialFormData.entries());
    const inputs = [
        "fragmentLengthMin",
        "fragmentLengthMax",
        "fragmentIntervalMin",
        "fragmentIntervalMax"
    ];

    const configs = {
        low: [100, 200, 1, 1],
        medium: [50, 100, 1, 5],
        high: [10, 20, 10, 20],
        severe: [1, 5, 1, 5],
        custom: inputs.map(id => formDataObj[id])
    };

    inputs.forEach((id, index) => {
        const elm = document.getElementById(id);
        elm.value = configs[fragmentMode][index];
        fragmentMode !== "custom"
            ? elm.setAttribute('readonly', 'true')
            : elm.removeAttribute('readonly');
    });
}

function resetSettings() {
    const confirmReset = confirm(t('alerts.resetConfirm'));
    if (!confirmReset) return;

    const resetBtn = document.getElementById("refresh-btn");
    resetBtn.classList.add('fa-spin');
    const body = { resetSettings: true };
    document.body.style.cursor = 'wait';

    fetch('/panel/reset-settings', {
        method: 'POST',
        body: JSON.stringify(body),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(({ success, status, message, body }) => {
            document.body.style.cursor = 'default';
            resetBtn.classList.remove('fa-spin');

            if (!success) {
                throw new Error(`status ${status} - ${message}`);
            }

            initiatePanel(body);
            alert(t('alerts.resetSuccess'));
        })
        .catch(error => console.error("Reseting settings error:", error.message || error));
}

function updateSettings(event, data) {
    event.preventDefault();
    event.stopPropagation();

    const validatedForm = validateSettings();
    if (!validatedForm) return false;

    const form = data ? data : validatedForm;
    const applyButton = document.getElementById('applyButton');
    const applyText = applyButton.querySelector('.apply-text');
    document.body.style.cursor = 'wait';
    const applyButtonVal = applyText ? applyText.textContent : '';
    if (applyText) {
        applyText.textContent = t('actions.loading');
    }

    fetch('/panel/update-settings', {
        method: 'PUT',
        body: JSON.stringify(form),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(({ success, status, message }) => {

            if (status === 401) {
                alert(t('alerts.sessionExpired'));
                window.location.href = '/login';
            }

            if (!success) {
                throw new Error(`status ${status} - ${message}`);
            }

            initiatePanel(form);
            alert(t('alerts.settingsApplied'));
        })
        .catch(error => console.error("Update settings error:", error.message || error))
        .finally(() => {
            document.body.style.cursor = 'default';
            if (applyText) {
                applyText.textContent = applyButtonVal;
            }
        });
}

function normalizeCleanIpValue(value) {
    const trimmed = value.trim();
    if (isIPv6(trimmed)) {
        return trimmed;
    }
    if (isIPv6CIDR(trimmed)) {
        return trimmed;
    }
    if (isBareIPv6(trimmed)) {
        return `[${trimmed}]`;
    }
    return trimmed;
}

function isBareIPv6(value) {
    if (!value || value.includes('[') || value.includes(']')) return false;
    const ipv6Regex = /^(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}|:(?::[a-fA-F0-9]{1,4}){1,7}|::)$/;
    return ipv6Regex.test(value);
}

function mergeCleanIPs(existing, incoming) {
    const merged = new Set();
    const addValue = (value) => {
        const normalized = normalizeCleanIpValue(value);
        if (!normalized) return;
        if (!isValidHostName(normalized)) return;
        merged.add(normalized);
    };

    existing.forEach(addValue);
    incoming.forEach(addValue);
    return [...merged];
}

function fetchCleanIPs() {
    const apiUrl = getElmValue('cleanIpApiUrl');
    if (!apiUrl) {
        alert(t('alerts.cleanIpApiEmpty'));
        return;
    }

    let parsedUrl;
    try {
        parsedUrl = new URL(apiUrl);
    } catch {
        alert(t('alerts.cleanIpApiInvalid'));
        return;
    }

    const button = document.getElementById('cleanIpFetchBtn');
    const icon = document.getElementById('cleanip-update');
    button.disabled = true;
    icon.classList.add('fa-spin');
    document.body.style.cursor = 'wait';

    fetch('/panel/cleanip', {
        method: 'POST',
        body: JSON.stringify({ apiUrl: parsedUrl.toString() }),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(({ success, status, message, body }) => {
            if (status === 401) {
                alert(t('alerts.sessionExpired'));
                window.location.href = '/login';
                return;
            }

            if (!success) {
                throw new Error(message || t('alerts.cleanIpFetchFailed'));
            }

            const cleanIpTextarea = document.getElementById('cleanIPs');
            const existing = parseElmValues('cleanIPs');
            const merged = mergeCleanIPs(existing, body?.cleanIPs || []);
            cleanIpTextarea.value = merged.join('\n');
            cleanIpTextarea.style.height = 'auto';
            cleanIpTextarea.rows = Math.max(1, merged.length);
            cleanIpTextarea.style.height = `${cleanIpTextarea.scrollHeight}px`;
            enableApplyButton();
            alert(t('alerts.cleanIpAdded', { count: merged.length - existing.length }));
        })
        .catch(error => {
            console.error("Fetch CleanIPs error:", error.message || error);
            alert(t('alerts.cleanIpFetchError', { message: error.message || error }));
        })
        .finally(() => {
            button.disabled = false;
            icon.classList.remove('fa-spin');
            document.body.style.cursor = 'default';
        });
}

function parseElmValues(id) {
    return document.getElementById(id).value?.split('\n')
        .map(value => value.trim())
        .filter(Boolean) || [];
}

function getElmValue(id) {
    return document.getElementById(id).value?.trim();
}

function isDomain(value) {
    const domainRegex = /^(?=.{1,253}$)(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)\.)+[a-zA-Z]{2,63}$/;
    return domainRegex.test(value);
}

function isIPv4(value) {
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
    return ipv4Regex.test(value);
}

function isIPv4CIDR(value) {
    const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)(?:\/(?:[0-9]|[1-2][0-9]|3[0-2]))?$/;
    return ipv4CidrRegex.test(value);
}

function isIPv6(value) {
    const ipv6Regex = /^\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}|:(?::[a-fA-F0-9]{1,4}){1,7})\]$/;
    return ipv6Regex.test(value);
}

function isIPv6CIDR(value) {
    const ipv6CidrRegex = /^(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6}|:(?::[a-fA-F0-9]{1,4}){1,7}|::)(?:\/(?:12[0-8]|1[01]?[0-9]|[0-9]?[0-9]))?$/;
    return ipv6CidrRegex.test(value);
}

function parseHostPort(input) {
    const regex = /^(?<host>\[.*?\]|[^:]+)(?::(?<port>\d+))?$/;
    const match = input.match(regex);

    if (!match) return null;

    return {
        host: match.groups.host,
        port: match.groups.port ? +match.groups.port : null
    };
}

function isValidHostName(value, isHost) {
    const hostPort = parseHostPort(value.trim());
    if (!hostPort) return false;
    const { host, port } = hostPort;
    if (port && (port > 65535 || port < 1)) return false;
    if (isHost && !port) return false;

    return isIPv6(host) || isIPv4(host) || isDomain(host);
}

function validateRemoteDNS() {
    let url;
    const dns = getElmValue("remoteDNS");

    try {
        url = new URL(dns);
    } catch (error) {
        alert(t('alerts.invalidDnsUrl'));
        return false;
    }

    const cloudflareDNS = [
        '1.1.1.1',
        '1.0.0.1',
        '1.1.1.2',
        '1.0.0.2',
        '1.1.1.3',
        '1.0.0.3',
        '2606:4700:4700::1111',
        '2606:4700:4700::1001',
        '2606:4700:4700::1112',
        '2606:4700:4700::1002',
        '2606:4700:4700::1113',
        '2606:4700:4700::1003',
        'cloudflare-dns.com',
        'security.cloudflare-dns.com',
        'family.cloudflare-dns.com',
        'one.one.one.one',
        '1dot1dot1dot1'
    ];

    if (!["tcp:", "https:", "tls:"].includes(url.protocol)) {
        alert(t('alerts.dnsProtocolInvalid'));
        return false;
    }

    if (cloudflareDNS.includes(url.hostname)) {
        alert(t('alerts.cloudflareDnsNotAllowed'));

        return false;
    }

    return true;
}

function validateSanctionDns() {
    const dns = getElmValue("antiSanctionDNS");
    let host;

    try {
        const url = new URL(dns);
        host = url.hostname;
    } catch {
        host = dns;
    }

    const isValid = isValidHostName(host, false);

    if (!isValid) {
        alert(t('alerts.invalidHost', { host }));

        return false;
    }

    return true;
}

function validateWarpDNS() {
    const dns = getElmValue("warpRemoteDNS");
    const isValid = isIPv4(dns);

    if (!isValid) {
        alert(t('alerts.invalidWarpDns', { items: `⚠️ ${dns}` }));

        return false;
    }

    return true;
}

function validateLocalDNS() {
    const dns = getElmValue("localDNS");
    const isValid = isIPv4(dns) || dns === 'localhost';

    if (!isValid) {
        alert(t('alerts.invalidLocalDns', { items: `⚠️ ${dns}` }));

        return false;
    }

    return true;
}

function validateCustomRules() {
    const invalidDomainIpValues = [
        'customBypassRules',
        'customBlockRules'
    ].flatMap(parseElmValues)
        .filter(value => !isIPv4CIDR(value) && !isIPv6CIDR(value) && !isDomain(value));

    const invalidDomainValues = parseElmValues('customBypassSanctionRules').filter(value => !isDomain(value));

    if (invalidDomainIpValues.length) {
        alert(t('alerts.invalidDomainIpRange', {
            items: invalidDomainIpValues.map(val => `⚠️ ${val}`).join('\n')
        }));

        return false;
    }

    if (invalidDomainValues.length) {
        alert(t('alerts.invalidDomains', {
            items: invalidDomainValues.map(val => `⚠️ ${val}`).join('\n')
        }));

        return false;
    }

    return true;
}

function validateMultipleHostNames() {
    const invalidValues = [
        'cleanIPs',
        'customCdnAddrs',
        'customCdnSni',
        'customCdnHost'
    ].flatMap(parseElmValues)
        .filter(value => !isValidHostName(value));

    if (invalidValues.length) {
        alert(t('alerts.invalidCustomIpsDomains', {
            items: invalidValues.map(ip => `⚠️ ${ip}`).join('\n')
        }));

        return false;
    }

    return true;
}

function validateProxyIPs() {
    const invalidValues = parseElmValues('proxyIPs')
        .filter(value => !isValidHostName(value));

    if (invalidValues.length) {
        alert(t('alerts.invalidProxyIps', {
            items: invalidValues.map(ip => `⚠️ ${ip}`).join('\n')
        }));

        return false;
    }

    return true;
}

function validateNAT64Prefixes() {
    const invalidValues = parseElmValues('prefixes')
        .filter(value => !isIPv6(value));

    if (invalidValues.length) {
        alert(t('alerts.invalidNat64', {
            items: invalidValues.map(ip => `⚠️ ${ip}`).join('\n')
        }));

        return false;
    }

    return true;
}

function validateWarpEndpoints() {
    const invalidEndpoints = parseElmValues('warpEndpoints')
        .filter(value => !isValidHostName(value, true));

    if (invalidEndpoints.length) {
        alert(t('alerts.invalidEndpoint', {
            items: invalidEndpoints.map(endpoint => `⚠️ ${endpoint}`).join('\n')
        }));

        return false;
    }

    return true;
}

function validateMinMax() {
    const getValue = (id) => parseInt(getElmValue(id), 10);

    const fields = [
        ['fragmentLengthMin', 'fragmentLengthMax', t('labels.fragmentLength')],
        ['fragmentIntervalMin', 'fragmentIntervalMax', t('labels.fragmentInterval')],
        ['fragmentMaxSplitMin', 'fragmentMaxSplitMax', t('labels.fragmentMaxSplit')],
        ['noiseCountMin', 'noiseCountMax', t('labels.noiseCount')],
        ['noiseSizeMin', 'noiseSizeMax', t('labels.noiseSize')],
        ['noiseDelayMin', 'noiseDelayMax', t('labels.noiseDelay')],
        ['amneziaNoiseSizeMin', 'amneziaNoiseSizeMax', t('labels.amneziaNoiseSize')]
    ];

    for (const [minId, maxId, label] of fields) {
        const min = getValue(minId);
        const max = getValue(maxId);

        if (min > max) {
            alert(t('alerts.minMaxInvalid', { label }));
            return false;
        }
    }

    return true;
}

function validateChainProxy() {
    let chainProxy = getElmValue('outProxy');
    if (!chainProxy) return true;
    const isVMess = /vmess:\/\/.+$/.test(chainProxy);
    const isOthers = /(http|socks|socks5|vless|trojan|ss):\/\/[^\s@]+@[^\s:]+:[^\s]+/.test(chainProxy);

    if (!isVMess && !isOthers) {
        alert(t('alerts.invalidConfigStandard'));

        return false;
    }

    const config = new URL(chainProxy);
    let { protocol, username } = config;
    let security = config.searchParams.get('security');
    let type = config.searchParams.get('type');

    if (isVMess) {
        const vmConfig = JSON.parse(atob(config.host));
        username = vmConfig.id;
        security = vmConfig.tls;
        type = vmConfig.net;
    }

    if (['vless:', 'trojan:', 'vmess:'].includes(protocol)) {
        if (!username) {
            alert(t('alerts.invalidConfigCredentials'));

            return false;
        }

        if (security && !['tls', 'none', 'reality'].includes(security)) {
            alert(t('alerts.invalidConfigSecurity'));

            return false;
        }

        if (!['tcp', 'raw', 'ws', 'grpc', 'httpupgrade'].includes(type)) {
            alert(t('alerts.invalidConfigTransport'));

            return false;
        }
    }

    return true;
}

function validateCustomCdn() {
    const customCdnHost = getElmValue('customCdnHost');
    const customCdnSni = getElmValue('customCdnSni');
    const customCdnAddrs = parseElmValues('customCdnAddrs');
    const isCustomCdn = customCdnAddrs.length || customCdnHost !== '' || customCdnSni !== '';

    if (isCustomCdn && !(customCdnAddrs.length && customCdnHost && customCdnSni)) {
        alert(t('alerts.customCdnMissing'));
        return false;
    }

    return true;
}

function validateKnockerNoise() {
    const regex = /^(none|quic|random|[0-9A-Fa-f]+)$/;
    const knockerNoise = getElmValue("knockerNoiseMode");

    if (!regex.test(knockerNoise)) {
        alert(t('alerts.invalidNoiseMode'));

        return false;
    }

    return true;
}

function validateXrayNoises(fields) {
    const [modes, packets, delaysMin, delaysMax] = fields;
    const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    let submisionError = false;

    modes.forEach((mode, index) => {
        if (Number(delaysMin[index]) > Number(delaysMax[index])) {
            alert(t('alerts.noiseDelayInvalid'));
            submisionError = true;
            return;
        }

        switch (mode) {
            case 'base64': {
                if (!base64Regex.test(packets[index])) {
                    alert(t('alerts.noiseBase64Invalid'));
                    submisionError = true;
                }

                break;
            }
            case 'rand': {
                if (!(/^\d+-\d+$/.test(packets[index]))) {
                    alert(t('alerts.noiseRandomInvalid'));
                    submisionError = true;
                }

                const [min, max] = packets[index].split("-").map(Number);

                if (min > max) {
                    alert(t('alerts.noiseRandomRangeInvalid'));
                    submisionError = true;
                }

                break;
            }
            case 'hex': {
                if (!(/^(?=(?:[0-9A-Fa-f]{2})*$)[0-9A-Fa-f]+$/.test(packets[index]))) {
                    alert(t('alerts.noiseHexInvalid'));
                    submisionError = true;
                }

                break;
            }
        }
    });

    return !submisionError;
}

function validateSettings() {
    const configForm = document.getElementById('configForm');
    const formData = new FormData(configForm);

    const fields = [
        'udpXrayNoiseMode',
        'udpXrayNoisePacket',
        'udpXrayNoiseDelayMin',
        'udpXrayNoiseDelayMax',
        'udpXrayNoiseCount',
        'applyTo'
    ].map(field => formData.getAll(field));

    const validations = [
        validateRemoteDNS(),
        validateSanctionDns(),
        validateLocalDNS(),
        validateWarpDNS(),
        validateMultipleHostNames(),
        validateProxyIPs(),
        validateNAT64Prefixes(),
        validateWarpEndpoints(),
        validateMinMax(),
        validateChainProxy(),
        validateCustomCdn(),
        validateKnockerNoise(),
        validateXrayNoises(fields),
        validateCustomRules()
    ];

    if (!validations.every(Boolean)) {
        return false;
    }

    const form = Object.fromEntries(formData.entries());
    const [modes, packets, delaysMin, delaysMax, counts, applyTo] = fields;

    form.xrayUdpNoises = modes.map((mode, index) => ({
        type: mode,
        packet: packets[index],
        delay: `${delaysMin[index]}-${delaysMax[index]}`,
        applyTo: applyTo[index],
        count: counts[index]
    }));

    form.ports = [
        ...defaultHttpPorts,
        ...defaultHttpsPorts
    ].filter(port => formData.has(port.toString()));

    checkboxElements.forEach(elm => {
        form[elm.id] = formData.has(elm.id);
    });

    selectElements.forEach(elm => {
        let value = form[elm.id];
        if (value === 'true') value = true;
        if (value === 'false') value = false;
        form[elm.id] = value;
    });

    inputElements.forEach(elm => {
        if (typeof form[elm.id] === 'string') {
            form[elm.id] = form[elm.id].trim();
        }
    });

    numInputElements.forEach(elm => {
        form[elm.id] = Number(form[elm.id].trim());
    });

    textareaElements.forEach(elm => {
        const key = elm.id;
        const value = form[key];
        form[key] = value?.split('\n').map(val => val.trim()).filter(Boolean) || [];
    });

    return form;
}

function logout(event) {
    event.preventDefault();
    fetch('/logout', { method: 'GET', credentials: 'same-origin' })
        .then(response => response.json())
        .then(({ success, status, message }) => {
            if (!success) {
                throw new Error(`status ${status} - ${message}`);
            }

            window.location.href = '/login';
        })
        .catch(error => console.error("Logout error:", error.message || error));
}

function resetPassword(event) {
    event.preventDefault();
    const resetPassModal = document.getElementById('resetPassModal');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (newPassword !== confirmPassword) {
        passwordError.textContent = t('alerts.passwordMismatch');
        return false;
    }

    const hasCapitalLetter = /[A-Z]/.test(newPassword);
    const hasNumber = /[0-9]/.test(newPassword);
    const isLongEnough = newPassword.length >= 8;

    if (!(hasCapitalLetter && hasNumber && isLongEnough)) {
        passwordError.textContent = t('password.errorPolicy');
        return false;
    }

    fetch('/panel/reset-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: newPassword,
        credentials: 'same-origin'
    })
        .then(response => response.json())
        .then(({ success, status, message }) => {
            if (!success) {
                passwordError.textContent = `⚠️ ${message}`;
                throw new Error(`status ${status} - ${message}`);
            }

            alert(t('alerts.passwordChanged'));
            window.location.href = '/login';

        })
        .catch(error => console.error("Reset password error:", error.message || error))
        .finally(() => {
            resetPassModal.style.display = "none";
            document.body.style.overflow = "";
        });
}

function renderPortsBlock(ports) {
    let noneTlsPortsBlock = '', tlsPortsBlock = '';
    const totalPorts = [
        ...(window.origin.includes('workers.dev') ? defaultHttpPorts : []),
        ...defaultHttpsPorts
    ];

    totalPorts.forEach(port => {
        const isChecked = ports.includes(port) ? 'checked' : '';
        let clss = '', handler = '';

        if (defaultHttpsPorts.includes(port)) {
            clss = 'class="https"';
            handler = 'onclick="handlePortChange(event)"';
        }

        const portBlock = `
            <div class="routing">
                <input type="checkbox" name=${port} ${clss} value="true" ${isChecked} ${handler}>
                <label>${port}</label>
            </div>`;

        defaultHttpsPorts.includes(port)
            ? tlsPortsBlock += portBlock
            : noneTlsPortsBlock += portBlock;
    });

    document.getElementById("tls-ports").innerHTML = tlsPortsBlock;

    if (noneTlsPortsBlock) {
        document.getElementById("non-tls-ports").innerHTML = noneTlsPortsBlock;
        document.getElementById("none-tls").style.display = 'flex';
    }
}

function addUdpNoise(isManual, noiseIndex, udpNoise) {
    const index = noiseIndex ?? globalThis.xrayNoiseCount;
    const noise = udpNoise || {
        type: 'rand',
        packet: '50-100',
        delay: '1-5',
        applyTo: 'ip',
        count: 5
    };

    const container = document.createElement('div');
    container.className = "inner-container";
    container.id = `udp-noise-${index + 1}`;

    container.innerHTML = `
        <div class="header-container">
            <h4>${t('noise.title', { index: index + 1 })}</h4>
            <button type="button" class="delete-noise">
                <span class="material-symbols-rounded">delete</span>
            </button>      
        </div>
        <div class="section">
            <div class="form-control">
                <label>${t('noise.mode')}</label>
                <div>
                    <select name="udpXrayNoiseMode">
                        <option value="base64" ${noise.type === 'base64' ? 'selected' : ''}>${t('noise.base64')}</option>
                        <option value="rand" ${noise.type === 'rand' ? 'selected' : ''}>${t('noise.random')}</option>
                        <option value="str" ${noise.type === 'str' ? 'selected' : ''}>${t('noise.string')}</option>
                        <option value="hex" ${noise.type === 'hex' ? 'selected' : ''}>${t('noise.hex')}</option>
                    </select>
                </div>
            </div>
            <div class="form-control">
                <label>${t('noise.packet')}</label>
                <div>
                    <input type="text" name="udpXrayNoisePacket" value="${noise.packet}">
                </div>
            </div>
            <div class="form-control">
                <label>${t('noise.count')}</label>
                <div>
                    <input type="number" name="udpXrayNoiseCount" value="${noise.count}" min="1" required>
                </div>
            </div>
            <div class="form-control">
                <label>${t('noise.delay')}</label>
                <div class="min-max">
                    <input type="number" name="udpXrayNoiseDelayMin"
                        value="${noise.delay.split('-')[0]}" min="1" required>
                    <span> - </span>
                    <input type="number" name="udpXrayNoiseDelayMax"
                        value="${noise.delay.split('-')[1]}" min="1" required>
                </div>
            </div>
            <div class="form-control">
                <label>${t('noise.applyTo')}</label>
                <div>
                    <select name="applyTo">
                        <option value="ip" ${!noise.applyTo || noise.applyTo === 'ip' ? 'selected' : ''}>${t('noise.applyIp')}</option>
                        <option value="ipv4" ${noise.applyTo === 'ipv4' ? 'selected' : ''}>${t('noise.applyIpv4')}</option>
                        <option value="ipv6" ${noise.applyTo === 'ipv6' ? 'selected' : ''}>${t('noise.applyIpv6')}</option>
                    </select>
                </div>
            </div>
        </div>`;

    container.querySelector(".delete-noise").addEventListener('click', deleteUdpNoise);
    container.querySelector("select").addEventListener('change', generateUdpNoise);

    document.getElementById("noises").append(container);
    if (isManual) enableApplyButton();
    globalThis.xrayNoiseCount++;
}

function generateUdpNoise(event) {
    const generateRandomBase64 = length => {
        const array = new Uint8Array(Math.ceil(length * 3 / 4));
        crypto.getRandomValues(array);
        let base64 = btoa(String.fromCharCode(...array));

        return base64.slice(0, length);
    }

    const generateRandomHex = length => {
        const array = new Uint8Array(Math.ceil(length / 2));
        crypto.getRandomValues(array);
        let hex = [...array].map(b => b.toString(16).padStart(2, '0')).join('');

        return hex.slice(0, length);
    }

    const generateRandomString = length => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const array = new Uint8Array(length);

        return Array.from(crypto.getRandomValues(array), x => chars[x % chars.length]).join('');
    };

    const noisePacket = event.target.closest(".inner-container").querySelector('[name="udpXrayNoisePacket"]');

    switch (event.target.value) {
        case 'base64':
            noisePacket.value = generateRandomBase64(64);
            break;

        case 'rand':
            noisePacket.value = "50-100";
            break;

        case 'hex':
            noisePacket.value = generateRandomHex(64);
            break;

        case 'str':
            noisePacket.value = generateRandomString(64);
            break;
    }
}

function deleteUdpNoise(event) {
    if (globalThis.xrayNoiseCount === 1) {
        alert(t('alerts.cannotDeleteNoise'));
        return;
    }

    const confirmReset = confirm(t('alerts.deleteNoiseConfirm'));

    if (!confirmReset) return;
    event.target.closest(".inner-container").remove();
    enableApplyButton();
    globalThis.xrayNoiseCount--;
}

function renderUdpNoiseBlock(xrayUdpNoises) {
    document.getElementById("noises").innerHTML = '';
    xrayUdpNoises.forEach((noise, index) => {
        addUdpNoise(false, index, noise);
    });

    globalThis.xrayNoiseCount = xrayUdpNoises.length;
}
