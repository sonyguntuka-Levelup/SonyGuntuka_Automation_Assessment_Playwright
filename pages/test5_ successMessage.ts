import { expect, Locator, Page } from "@playwright/test";

export class SuccessMessagePage {
    readonly page: Page;
    readonly button: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.button = page.locator('#test-5-div button');
        this.successMessage = page.locator('#test5-alert');
    }

    async clickButton() {
        await this.button.click();
    }

    async assertSuccessMessageVisible() {
        await expect(this.successMessage).toBeVisible();
    }

    async assertButtonDisabled() {
        await expect(this.button).toBeDisabled();
    }
}