import { test, expect } from "@playwright/test";
import { ButtonStatePage } from "../pages/test4_ buttonState";
import { BASE_URL } from "../config";

test.describe('Button State Tests', () => {
    test('Test 4 - Verify button states in Test 4 div', async ({ page }) => {
        const buttonStatePage = new ButtonStatePage(page);

        // Navigate to the home page using the BASE_URL
        await page.goto(BASE_URL);

        // Assert that the first button is enabled
        await buttonStatePage.assertButtonStates();
    });
});