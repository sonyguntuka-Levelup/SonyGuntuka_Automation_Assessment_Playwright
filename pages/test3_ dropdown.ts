import { expect, Locator, Page } from "@playwright/test";

export class DropdownPage {
    readonly page: Page;
    readonly dropdownButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdownButton = page.locator('#dropdownMenuButton');
    }

    async assertDefaultSelectedValue(expectedValue: string) {
        const defaultSelectedValue = await this.dropdownButton.innerText();
        expect(defaultSelectedValue).toContain(expectedValue);
    }

    async selectOption(optionText: string) {
        await this.dropdownButton.click();
        const option = this.page.locator('.dropdown-item', { hasText: optionText });
        await option.click();
    }
}