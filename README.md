# **Playwright Page Object Model Framework**

🎭 Playwright • 🟦 TypeScript • 📊 Allure Reporting

## **Overview**

A modular and scalable Page Object Model (POM) framework built with Playwright, TypeScript, and Allure. Designed for clean structure, maintainability, and fast UI automation development.

## **Features**

✨ Structured POM architecture
🧩 Centralized selectors
🌐 Environment-based config handling
📑 Allure reporting with artifacts
📁 Fixtures & reusable utilities
⚡ Parallel & cross-browser execution

## **Tech Stack**

🧪 Playwright
🟦 TypeScript
📊 Allure
🟩 Node.js

## **Project Structure**

```
config/               🌐 Environment configs  
fixtures/             📁 Test data  
pages/                📄 Page Objects  
selectors/            🔖 Selectors  
tests/                🧪 Test suites  
utils/                🔧 Helpers  
playwright.config.ts  ⚙️ Playwright global config  
package.json          📦 Dependencies
```

## **Setup**

```
npm install
```

## **Run Tests**

```
npx playwright test
```

## **Allure Reporting**

```
npx playwright test --reporter=line,allure-playwright
allure generate ./allure-results --clean
allure open ./allure-report
```

## **Environment Handling**

Stored inside `config/env.ts`.

## **Reports**

📊 Allure HTML report
🖼️ Screenshots
📝 Logs
🔍 Step details
📁 Playwright HTML & trace reports

## **Recommended VSCode Extensions**

🧪 Playwright Test
✨ Prettier
✔️ ESLint
