import { expect, Locator, Page } from "@playwright/test"; // Import necessary types and functions from Playwright

// Define the ListGroupPage class to encapsulate actions and elements related to the list group
export class ListGroupPage {
    readonly page: Page; // The Playwright Page object representing the current page
    readonly listItems: Locator; // Locator for the list items in the list group

    // Constructor to initialize the ListGroupPage with the current page
    constructor(page: Page) {
        this.page = page; // Assign the page object to the class property
        // Initialize the locator for the list items within the specified div
        this.listItems = page.locator('#test-2-div .list-group-item');
    }

    // Method to assert that the number of list items matches the expected count
    async assertListItemsCount(count: number) {
        await expect(this.listItems).toHaveCount(count); // Assert that the list items count is equal to the expected count
    }

    // Method to assert that the text of the second list item matches the expected text
    async assertSecondListItemText(expectedText: string) {
        const secondListItem = this.listItems.nth(1); // Get the second list item (index 1)
        // Assert that the inner text of the second list item contains the expected text
        expect((await secondListItem.innerText()).trim()).toContain(expectedText);
    }

    // Method to assert that the badge value of the second list item matches the expected value
    async assertSecondListItemBadgeValue(expectedValue: string) {
        const secondListItem = this.listItems.nth(1); // Get the second list item (index 1)
        const badgeValue = await secondListItem.locator('.badge').innerText(); // Get the inner text of the badge within the second list item
        // Assert that the badge value matches the expected value
        expect(badgeValue).toBe(expectedValue);
    }
}