import { test, expect } from "@playwright/test";
import { GridValuePage } from "../pages/test6_ gridValue";
import { BASE_URL } from "../config";

test.describe('Grid Value Tests', () => {
    test('Find cell value in the grid and assert it', async ({ page }) => {
        const gridValuePage = new GridValuePage(page);

        // Navigate to the home page using the BASE_URL
        await page.goto(BASE_URL);

        // Use the method to get the value of the cell at coordinates (2, 2)
        // Note: Coordinates start at (0, 0) in the top left corner
        const cellValue = await gridValuePage.getCellValue(2, 2);

        // Assert that the value of the cell is 'Ventosanzap'
        expect(cellValue).toBe('Ventosanzap');
    });
});