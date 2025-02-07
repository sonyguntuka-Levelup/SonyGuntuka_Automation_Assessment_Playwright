Overview
This project is an end-to-end testing suite built using Playwright, a powerful automation library for web applications which used TypeScript language. 
The tests are organized using the Page Object Model (POM) design pattern, which enhances maintainability and readability.

Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (version 14 or higher)
npm (Node package manager, comes with Node.js)
IDE: Visual Studio Code

Getting Started
Follow these steps to set up the project and run the tests:

**You are in the project directory on the terminal

1. Initialize the Project
Navigate to your project directory and initialize a new Node.js project:

npm init -y

2. Install Dependencies
Install Playwright, the Playwright test library, TypeScript, and ts-node as development dependencies:

npm install playwright @playwright/test typescript ts-node --save-dev

3. Modify the BASE_URL
The BASE_URL variable is defined in the config.ts file. This URL points to the HTML file that the tests will interact with.

Open the config.ts file and modify the BASE_URL to point to the correct location of your HTML file:

// config.ts
export const BASE_URL = 'local path to your QE-index.html file';

4. Run the Tests
Once the dependencies are installed, you can run the Playwright tests using the following command:

npx playwright test

5. View Test Reports
After running the tests, Playwright generates a report that you can view. I have configured to always open index.html on browser in the file playwright.congig.js
You can also find this index.html file under the folder playwright-report //I am comitting this file of mine if you want to check the results

You can also quickly view the last test run report using the command:

npx playwright show-report

You can try to fail a test and check if the screenshot and video are recorded for debugging purpose.

6. Additional Commands
Run Tests in Headless Mode: By default, Playwright runs tests in headless mode. If you want to see the browser UI, you can run:

npx playwright test --headed

Run Specific Tests: To run a specific test file, use:

npx playwright test tests/test1.ts

Run Tests in a Specific Browser: If you want to run tests in a specific browser, you can specify the project name defined in your playwright.config.js:

npx playwright test --project=Chromium

####You are now set up to run the Playwright tests for this project.####




