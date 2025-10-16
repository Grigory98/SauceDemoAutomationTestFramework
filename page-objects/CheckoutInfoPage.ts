import { Page, Locator } from '@playwright/test';

import { BasePage } from './BasePage';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export class CheckoutInfoPage extends BasePage {
    readonly firstName: Input;
    readonly lastName: Input;
    readonly zip: Input;
    readonly cancelBtn: Button;
    readonly continueBtn: Button;

    constructor(page: Page) {
        super(page);
        this.firstName = new Input(page, '[data-test="firstName"]');
        this.lastName = new Input(page, '[data-test="lastName"]');
        this.zip = new Input(page, '[data-test="postalCode"]');
        this.cancelBtn = new Button(page, '[data-test="cancel"]');
        this.continueBtn = new Button(page , '[data-test="continue"]');
    }

    /**
     * Fill some fields on the page.
     * @param firstName First name.
     * @param lastName Last name.
     * @param zip Zip or Postal code.
     */
    async fill(firstName: string | null, lastName: string | null, zip: string | null) {
        firstName !== null && await this.firstName.fill(firstName);
        lastName !== null && await this.lastName.fill(lastName);
        zip !== null && await this.zip.fill(zip);
    }

    /**
     * Click continue button.
     */
    async continue(): Promise<void> {
        await this.continueBtn.click();
    }

    /**
     * Click cancel button.
     */
    async cancel(): Promise<void> {
        await this.cancelBtn.click();
    }
}