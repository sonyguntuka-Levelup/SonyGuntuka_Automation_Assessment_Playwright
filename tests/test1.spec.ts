import { test, expect } from "@playwright/test"; // Import necessary functions from Playwright
import { LoginPage } from "../pages/test1_ login"; // Import the LoginPage class for page object model
import { BASE_URL } from "../config"; // Import the base URL for navigation

// Describe the test suite for login scenarios
test.describe('Login Scenarios', () => {
    // Define a test case for verifying the presence of login fields and entering credentials
    test('Test 1 - Verify presence of login fields and enter credentials', async ({ page }) => {
        // Create an instance of the LoginPage class, passing the page object
        const loginPage = new LoginPage(page);

        // Navigate to the home page using the BASE_URL
        await page.goto(BASE_URL);

        // Assert that the email input, password input, and login button are visible on the page
        await loginPage.assertFieldsVisible();

        // Fill in the email address and password fields with test credentials
        await loginPage.fillCredentials('test@gmail.com', 'password123');

        // Assert that the email input field contains the expected email address
        await expect(loginPage.emailInput).toHaveValue('test@gmail.com');

        // Assert that the password input field contains the expected password
        await expect(loginPage.passwordInput).toHaveValue('password123');
    });
});