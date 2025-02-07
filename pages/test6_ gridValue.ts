import { Locator, Page } from "@playwright/test";

export class GridValuePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getCellValue(row: number, col: number) {
        const cell = this.page.locator('#test-6-div table tbody tr').nth(row).locator('td').nth(col);
        return await cell.innerText();
    }
}