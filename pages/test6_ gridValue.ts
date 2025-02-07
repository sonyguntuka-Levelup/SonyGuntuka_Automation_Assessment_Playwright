import { Locator, Page } from "@playwright/test"; // Import necessary types from Playwright

// Define the GridValuePage class to encapsulate actions and elements related to the grid
export class GridValuePage {
    readonly page: Page; // The Playwright Page object representing the current page

    // Constructor to initialize the GridValuePage with the current page
    constructor(page: Page) {
        this.page = page; // Assign the page object to the class property
    }

    // Method to get the value of a specific cell in the grid based on row and column indices
    async getCellValue(row: number, col: number) {
        // Locate the cell in the grid using the provided row and column indices
        const cell = this.page.locator('#test-6-div table tbody tr').nth(row).locator('td').nth(col);
        // Return the inner text of the located cell
        return await cell.innerText();
    }
}