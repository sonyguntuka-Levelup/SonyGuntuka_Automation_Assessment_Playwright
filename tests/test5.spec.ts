import { test, expect } from "@playwright/test";
import { SuccessMessagePage } from "../pages/test5_ successMessage";
import { BASE_URL } from "../config";

test.describe('Success Message and Button State Tests', () => {
    test('Test 5 - Wait for button, click it, and verify success message and button state', async ({ page }) => {
        const successMessagePage = new SuccessMessagePage(page);

        // Navigate to the home page using the BASE_URL
        await page.goto(BASE_URL);

        // Wait for the button to be displayed (note: the delay is random)
        await successMessagePage.waitForButtonToBeVisible();

        // Click the button once it is visible
        await successMessagePage.clickButton();

        // Assert that the success message is displayed after clicking the button
        await successMessagePage.assertSuccessMessageVisible();

        // Assert that the button is now disabled after the success message is shown
        await successMessagePage.assertButtonDisabled();
    });
});