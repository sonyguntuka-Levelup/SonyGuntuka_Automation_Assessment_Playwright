import { test, expect } from "@playwright/test";
import { ListGroupPage } from "../pages/test2_ listGroup";
import { BASE_URL } from "../config";

test.describe('List Group Tests', () => {
    test('Test 2 - Verify list items in Test 2 div', async ({ page }) => {
        const listGroupPage = new ListGroupPage(page);

        // Navigate to the home page using the BASE_URL
        await page.goto(BASE_URL);

        // Assert that there are three items in the list group within the Test 2 div
        await listGroupPage.assertListItemsCount(3);

        // Assert that the text of the second list item is 'List Item 2'
        await listGroupPage.assertSecondListItemText('List Item 2');

        // Assert that the badge value of the second list item is '6'
        await listGroupPage.assertSecondListItemBadgeValue('6');
    });
});