import { test, expect } from "@playwright/test";
import { SuccessMessagePage } from "../pages/test5_ successMessage";
import { BASE_URL } from "../config";

test.describe('Success Message and Button State Tests', () => {
    test('Test 5 - Wait for button, click it, and verify success message and button state', async ({ page }) => {
        const successMessagePage = new SuccessMessagePage(page);
        await page.goto(BASE_URL);
        await successMessagePage.clickButton();
        await successMessagePage.assertSuccessMessageVisible();
        await successMessagePage.assertButtonDisabled();
    });
});