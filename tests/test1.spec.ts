import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/test1_ login";
import { BASE_URL } from "../config";

test.describe('Login Scenarios', () => {
    test('Test 1 - Verify presence of login fields and enter credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto(BASE_URL);
        await loginPage.assertFieldsVisible();
        await loginPage.fillCredentials('test@gmail.com', 'password123');
        await expect(loginPage.emailInput).toHaveValue('test@gmail.com');
        await expect(loginPage.passwordInput).toHaveValue('password123');
    });
});