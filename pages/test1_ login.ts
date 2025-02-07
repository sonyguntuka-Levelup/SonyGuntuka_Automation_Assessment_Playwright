import { expect, Locator, Page } from "@playwright/test"; // Import necessary types and functions from Playwright

// Define the LoginPage class to encapsulate login-related actions and elements
export class LoginPage {
    readonly page: Page; // The Playwright Page object representing the current page
    readonly emailInput: Locator; // Locator for the email input field
    readonly passwordInput: Locator; // Locator for the password input field
    readonly signInButton: Locator; // Locator for the sign-in button

    // Constructor to initialize the LoginPage with the current page
    constructor(page: Page) {
        this.page = page; // Assign the page object to the class property
        // Initialize locators for the email input, password input, and sign-in button
        this.emailInput = page.locator('input[type="email"]');
        this.passwordInput = page.locator('input[type="password"]');
        this.signInButton = page.locator('button[type="submit"]');
    }

    // Method to fill in the email and password fields
    async fillCredentials(email: string, password: string) {
        await this.emailInput.fill(email); // Fill the email input with the provided email
        await this.passwordInput.fill(password); // Fill the password input with the provided password
    }

    // Method to assert that the email input, password input, and sign-in button are visible
    async assertFieldsVisible() {
        await expect(this.emailInput).toBeVisible(); // Assert that the email input is visible
        await expect(this.passwordInput).toBeVisible(); // Assert that the password input is visible
        await expect(this.signInButton).toBeVisible(); // Assert that the sign-in button is visible
    }
}