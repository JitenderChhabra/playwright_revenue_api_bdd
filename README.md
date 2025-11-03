This project is an API automation testing framework built using Playwright, Cucumber (BDD), and JavaScript.
It provides a structured, maintainable, and scalable approach for testing RESTful APIs, validating responses in JSON/XML, and generating detailed HTML reports.

🚀 Key Features

✅ Playwright API testing – leveraging the request API from Playwright

✅ Cucumber (BDD) – readable test scenarios in Gherkin format

✅ Data-driven testing using JSON or environment variables

✅ Reusable step definitions for common API operations

✅ HTML Reports for clear and shareable test results

✅ Environment-based configuration (QA, Stage, Prod)

✅ Tag-based test execution

✅ Automatic screenshot & log capture on failure (optional)


⚙️ Setup Instructions

1. Prerequisites
   
Node.js (v18 or above)

npm or yarn installed

Git

3. Install Dependencies
npm install

4. Install Playwright
npx playwright install

🧪 Running Tests
Run all API tests

npx cucumber-js

🧱 Reporting

After test execution, an HTML report is generated automatically in the reports/html-report directory.

🔄 CI/CD Integration

Easily integrates with CI/CD tools such as Jenkins, GitHub Actions, or Azure Pipelines.

🧠 Framework Design Highlights

BDD approach: Scenarios written in plain English for easy readability

Playwright request context: Ensures fast and reliable API calls

Reusable steps & hooks: Common setup and teardown logic

Environment config: Easily switch between environments using .env or config files

Extensible reporting: Support for HTML, JSON, and JUnit formats


🧰 Tech Stack

Component	Technology

Language	JavaScript (Node.js)

Test Framework	Cucumber (BDD)

API Automation	Playwright request context

Reporting	cucumber-html-reporter

CI/CD	GitHub Actions / Jenkins / Azure Pipelines



👤 Author

Jitender Chhabra

📧 jai.chhabra@gmail.com

💼 QA Automation | Playwright | API | BDD | CI/CD


