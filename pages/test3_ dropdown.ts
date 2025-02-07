import { expect, Locator, Page } from "@playwright/test"; // Import necessary types and functions from Playwright

// Define the DropdownPage class to encapsulate actions and elements related to the dropdown menu
export class DropdownPage {
    readonly page: Page; // The Playwright Page object representing the current page
    readonly dropdownButton: Locator; // Locator for the dropdown button

    // Constructor to initialize the DropdownPage with the current page
    constructor(page: Page) {
        this.page = page; // Assign the page object to the class property
        // Initialize the locator for the dropdown button
        this.dropdownButton = page.locator('#dropdownMenuButton');
    }

    // Method to assert that the default selected value in the dropdown matches the expected value
    async assertDefaultSelectedValue(expectedValue: string) {
        const defaultSelectedValue = await this.dropdownButton.innerText(); // Get the current text of the dropdown button
        // Assert that the default selected value contains the expected value
        expect(defaultSelectedValue).toContain(expectedValue);
    }

    // Method to select an option from the dropdown menu
    async selectOption(optionText: string) {
        await this.dropdownButton.click(); // Click the dropdown button to open the menu
        // Locate the dropdown item that matches the provided option text
        const option = this.page.locator('.dropdown-item', { hasText: optionText });
        await option.click(); // Click the located option to select it
    }
}