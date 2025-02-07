import { test, expect } from "@playwright/test";
import { ListGroupPage } from "../pages/test2_ listGroup";
import { BASE_URL } from "../config";

test.describe('List Group Tests', () => {
    test('Test 2 - Verify list items in Test 2 div', async ({ page }) => {
        const listGroupPage = new ListGroupPage(page);
        await page.goto(BASE_URL);
        await listGroupPage.assertListItemsCount(3);
        await listGroupPage.assertSecondListItemText('List Item 2');
        await listGroupPage.assertSecondListItemBadgeValue('6');
    });
});