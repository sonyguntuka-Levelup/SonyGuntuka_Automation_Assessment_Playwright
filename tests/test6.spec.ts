import { test, expect } from "@playwright/test";
import { GridValuePage } from "../pages/test6_ gridValue";
import { BASE_URL } from "../config";

test.describe('Grid Value Tests', () => {
    test('Find cell value in the grid and assert it', async ({ page }) => {
        const gridValuePage = new GridValuePage(page);
        await page.goto(BASE_URL);
        const cellValue = await gridValuePage.getCellValue(2, 2);
        expect(cellValue).toBe('Ventosanzap');
    });
});