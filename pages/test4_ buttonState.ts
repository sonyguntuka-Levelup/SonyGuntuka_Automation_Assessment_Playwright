import { expect, Locator, Page } from "@playwright/test";

export class ButtonStatePage {
    readonly page: Page;
    readonly test4Div: Locator;

    constructor(page: Page) {
        this.page = page;
        this.test4Div = page.locator('#test-4-div');
    }

    async assertButtonStates() {
        const firstButton = this.test4Div.locator('button').nth(0);
        const secondButton = this.test4Div.locator('button').nth(1);
        await expect(firstButton).toBeEnabled();
        await expect(secondButton).toBeDisabled();
    }
}