import { test, expect } from "@playwright/test";
import { DropdownPage } from "../pages/test3_ dropdown";
import { BASE_URL } from "../config";

test.describe('Dropdown Tests', () => {
    test('Test 3 - Verify default selected value and select new option', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);

        // Navigate to the home page using the BASE_URL
        await page.goto(BASE_URL);

        // Assert that the default selected value in the dropdown is 'Option 1'
        await dropdownPage.assertDefaultSelectedValue('Option 1');

        // Select 'Option 3' from the dropdown list
        await dropdownPage.selectOption('Option 3');

        // Retrieve the currently selected value from the dropdown button
        const newSelectedValue = await dropdownPage.dropdownButton.innerText();

        // Assert that the new selected value is 'Option 3'
        expect(newSelectedValue).toBe('Option 3');
    });
});