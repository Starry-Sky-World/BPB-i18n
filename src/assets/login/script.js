const resources = {
    en: {
        translation: {
            "app.title": "BPB Panel {{version}}",
            "language.label": "Language",
            "login.title": "User Login",
            "login.password": "Password",
            "login.submit": "Login",
            "login.error": "⚠️ Wrong Password!"
        }
    },
    fa: {
        translation: {
            "app.title": "پنل BPB {{version}}",
            "language.label": "زبان",
            "login.title": "ورود کاربر",
            "login.password": "رمز عبور",
            "login.submit": "ورود",
            "login.error": "⚠️ رمز عبور اشتباه است!"
        }
    },
    zh: {
        translation: {
            "app.title": "BPB 面板 {{version}}",
            "language.label": "语言",
            "login.title": "用户登录",
            "login.password": "密码",
            "login.submit": "登录",
            "login.error": "⚠️ 密码错误！"
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

    const version = document.getElementById('panel-version').textContent.trim();
    document.title = t('app.title', { version });
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

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: password
        });

        const { success, status, message } = await response.json();
        if (!success) {
            const passwordError = document.getElementById("passwordError");
            passwordError.textContent = t('login.error');
            throw new Error(`Login failed with status ${status}: ${message}`);
        }

        window.location.href = '/panel';
    } catch (error) {
        console.error('Login error:', error.message || error);
    }
});

document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    this.textContent = isPassword ? "visibility_off" : "visibility";
});
