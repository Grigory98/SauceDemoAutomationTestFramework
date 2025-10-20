🧩 SauceDemo Automation Test Framework

![Tests](https://github.com/Grigory98/SauceDemoAutomationTestFramework/actions/workflows/playwright.yml/badge.svg)

Автоматизированный фреймворк для UI-тестирования сайта saucedemo.com
с использованием Playwright + TypeScript и архитектуры Page Object Model.
Проект создан для демонстрации профессиональных подходов к построению масштабируемого тестового фреймворка.

🚀 Возможности

🧠 Page Object Model (POM) — чёткое разделение логики страниц, компонентов и тестов

🌍 Playwright — поддержка Chrome, Firefox, Safari, Edge

⚙️ Конфигурируемость через playwright.config.ts

🧾 Отчёты о тестах (HTML Report, Traces, Videos)

🧪 Параллельное выполнение тестов

🧰 TypeScript — строгая типизация, автодополнение, чистая структура кода

📁 Структура проекта
SauceDemoAutomationTestFramework/
<p>│</p>
<p>├── components/ # Повторно используемые UI-компоненты</p>
<p>├── page-objects/ # Page Object классы (LoginPage, InventoryPage, CartPage и др.)</p>
<p>├── tests/ # Тестовые сценарии</p>
<p>├── playwright.config.ts # Основная конфигурация Playwright</p>
<p>├── package.json # Зависимости и скрипты</p>
<p>└── tsconfig.json # Настройки TypeScript</p>

🛠️ Технологии
Компонент Технология
Язык TypeScript
Тестовый раннер Playwright Test Runner
Отчётность Playwright HTML Report
Архитектура Page Object Model (POM)
Среда исполнения Node.js ≥ 18
⚙️ Установка и запуск
1️⃣ Клонируйте проект
git clone https://github.com/Grigory98/SauceDemoAutomationTestFramework.git
cd SauceDemoAutomationTestFramework

2️⃣ Установите зависимости
npm install

3️⃣ Запустите тесты
npx playwright test

4️⃣ Откройте HTML-отчёт
npx playwright show-report

🧩 Пример теста
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { InventoryPage } from '../page-objects/InventoryPage';

test('Проверка успешного входа и отображения товаров', async ({ page }) => {
const loginPage = new LoginPage(page);
const inventoryPage = new InventoryPage(page);

await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');

await expect(inventoryPage.inventoryList).toBeVisible();
await expect(inventoryPage.inventoryItems).toHaveCount(6);
});

🧱 Архитектура проекта
playwright.config.ts
<p>├── Определяет базовый URL, таймауты, браузеры</p>
<p>├── Настраивает отчётность и поведение при падениях</p>
<p>└── Поддерживает запуск в headless/headful режимах</p>

page-objects/
<p>├── LoginPage.ts – методы: goto(), login()</p>
<p>├── InventoryPage.ts – методы: addToCart(), getCartCount()</p>
<p>└── CartPage.ts – методы: checkout(), removeItem()</p>

tests/
<p>├── login.spec.ts</p>
<p>└── cart.spec.ts</p>

⚡ Полезные команды
Команда Назначение
npx playwright test Запуск всех тестов
npx playwright test --ui Запуск с интерактивным UI
npx playwright show-report Просмотр отчёта
npx playwright codegen https://www.saucedemo.com Запись нового теста
npx playwright test --grep "Login" Запуск тестов по имени
📈 Возможные улучшения

🔹 Интеграция с Allure Reports

🔹 Добавление .env для переменных окружения

🔹 Логирование шагов тестов

🔹 Поддержка API-тестов (через Playwright APIRequestContext)

🧑‍💻 Автор
Grigory98
GitHub: github.com/Grigory98
