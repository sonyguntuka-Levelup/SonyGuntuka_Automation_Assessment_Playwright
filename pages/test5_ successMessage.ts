import { expect, Locator, Page } from "@playwright/test"; // Import necessary types and functions from Playwright

// Define the SuccessMessagePage class to encapsulate actions and elements related to the success message
export class SuccessMessagePage {
    readonly page: Page; // The Playwright Page object representing the current page
    readonly button: Locator; // Locator for the button that triggers the success message
    readonly successMessage: Locator; // Locator for the success message element

    // Constructor to initialize the SuccessMessagePage with the current page
    constructor(page: Page) {
        this.page = page; // Assign the page object to the class property
        // Initialize locators for the button and the success message
        this.button = page.locator('#test-5-div button'); // Locator for the button within the test-5-div
        this.successMessage = page.locator('#test5-alert'); // Locator for the success message alert
    }

    // Method to wait for the button to be visible before interacting with it
    async waitForButtonToBeVisible() {
        await this.button.waitFor({ state: 'visible' }); // Wait until the button is visible
    }
    
    // Method to click the button
    async clickButton() {
        await this.button.click(); // Click the button to trigger the success message
    }

    // Method to assert that the success message is visible
    async assertSuccessMessageVisible() {
        await expect(this.successMessage).toBeVisible(); // Assert that the success message is visible
    }

    // Method to assert that the button is disabled after the success message is shown
    async assertButtonDisabled() {
        await expect(this.button).toBeDisabled(); // Assert that the button is disabled
    }
}