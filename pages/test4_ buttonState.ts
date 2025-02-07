import { expect, Locator, Page } from "@playwright/test"; // Import necessary types and functions from Playwright

// Define the ButtonStatePage class to encapsulate actions and elements related to button states
export class ButtonStatePage {
    readonly page: Page; // The Playwright Page object representing the current page
    readonly test4Div: Locator; // Locator for the div containing the buttons

    // Constructor to initialize the ButtonStatePage with the current page
    constructor(page: Page) {
        this.page = page; // Assign the page object to the class property
        // Initialize the locator for the div that contains the buttons
        this.test4Div = page.locator('#test-4-div');
    }

    // Method to assert the states of the buttons within the test4Div
    async assertButtonStates() {
        // Locate the first and second buttons within the test4Div
        const firstButton = this.test4Div.locator('button').nth(0); // First button (index 0)
        const secondButton = this.test4Div.locator('button').nth(1); // Second button (index 1)

        // Assert that the first button is enabled
        await expect(firstButton).toBeEnabled();
        // Assert that the second button is disabled
        await expect(secondButton).toBeDisabled();
    }
}