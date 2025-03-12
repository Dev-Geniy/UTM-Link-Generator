// Переключение темы

const toggleButton = document.getElementById('theme-toggle');

const body = document.body;

const icon = toggleButton.querySelector('.icon');

// Загрузка сохраненной темы

const savedTheme = localStorage.getItem('theme') || 'light';

body.setAttribute('data-theme', savedTheme);

icon.textContent = savedTheme === 'light' ? '☀️' : '🌙';

// Обработчик переключения

toggleButton.addEventListener('click', () => {

    const currentTheme = body.getAttribute('data-theme');

    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);

    icon.textContent = newTheme === 'light' ? '☀️' : '🌙';

});

// Логика генератора UTM-ссылок

const generateButton = document.getElementById('generate-utm');

const baseUrlInput = document.getElementById('base-url');

const sourceInput = document.getElementById('utm-source');

const mediumInput = document.getElementById('utm-medium');

const campaignInput = document.getElementById('utm-campaign');

const termInput = document.getElementById('utm-term');

const contentInput = document.getElementById('utm-content');

const utmLinkOutput = document.getElementById('utm-link');

const copyButton = document.getElementById('copy-utm');

generateButton.addEventListener('click', () => {

    const baseUrl = baseUrlInput.value.trim();

    const source = sourceInput.value.trim();

    const medium = mediumInput.value.trim();

    const campaign = campaignInput.value.trim();

    const term = termInput.value.trim();

    const content = contentInput.value.trim();

    // Проверка обязательных полей

    if (!baseUrl || !isValidUrl(baseUrl)) {

        alert('Please enter a valid Base URL (e.g., https://example.com)');

        return;

    }

    if (!source) {

        alert('Please enter a Source (e.g., twitter)');

        return;

    }

    if (!medium) {

        alert('Please enter a Medium (e.g., social)');

        return;

    }

    // Построение UTM-ссылки

    const params = new URLSearchParams();

    params.append('utm_source', encodeURIComponent(source));

    params.append('utm_medium', encodeURIComponent(medium));

    if (campaign) params.append('utm_campaign', encodeURIComponent(campaign));

    if (term) params.append('utm_term', encodeURIComponent(term));

    if (content) params.append('utm_content', encodeURIComponent(content));

    const utmLink = `${baseUrl}?${params.toString()}`;

    utmLinkOutput.textContent = utmLink;

    copyButton.disabled = false;

});

// Копирование UTM-ссылки

copyButton.addEventListener('click', () => {

    const utmLink = utmLinkOutput.textContent;

    if (utmLink && utmLink !== 'Your generated link will appear here') {

        navigator.clipboard.writeText(utmLink).then(() => {

            copyButton.textContent = 'Copied!';

            setTimeout(() => {

                copyButton.textContent = 'Copy';

            }, 2000);

        }).catch(err => {

            console.error('Failed to copy: ', err);

        });

    }

});

// Проверка валидности URL

function isValidUrl(string) {

    try {

        new URL(string);

        return true;

    } catch (_) {

        return false;

    }

}

// Копирование Bitcoin-адреса

const copyBtcButton = document.querySelector('.btc-address .copy-btn');

copyBtcButton.addEventListener('click', () => {

    const btcCode = document.getElementById('btc-code').textContent;

    navigator.clipboard.writeText(btcCode).then(() => {

        copyBtcButton.textContent = 'Copied!';

        setTimeout(() => {

            copyBtcButton.textContent = 'Copy';

        }, 2000);

    }).catch(err => {

        console.error('Failed to copy: ', err);

    });

});
