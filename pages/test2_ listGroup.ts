import { expect, Locator, Page } from "@playwright/test";

export class ListGroupPage {
    readonly page: Page;
    readonly listItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.listItems = page.locator('#test-2-div .list-group-item');
    }

    async assertListItemsCount(count: number) {
        await expect(this.listItems).toHaveCount(count);
    }

    async assertSecondListItemText(expectedText: string) {
        const secondListItem = this.listItems.nth(1);
        expect((await secondListItem.innerText()).trim()).toContain(expectedText);
    }

    async assertSecondListItemBadgeValue(expectedValue: string) {
        const secondListItem = this.listItems.nth(1);
        const badgeValue = await secondListItem.locator('.badge').innerText();
        expect(badgeValue).toBe(expectedValue);
    }
}