import { test, expect } from "@playwright/test";
import { DropdownPage } from "../pages/test3_ dropdown";
import { BASE_URL } from "../config";

test.describe('Dropdown Tests', () => {
    test('Test 3 - Verify default selected value and select new option', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);
        await page.goto(BASE_URL);
        await dropdownPage.assertDefaultSelectedValue('Option 1');
        await dropdownPage.selectOption('Option 3');
        const newSelectedValue = await dropdownPage.dropdownButton.innerText();
        expect(newSelectedValue).toBe('Option 3');
    });
});