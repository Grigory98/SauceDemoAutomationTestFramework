import { Page, Locator, expect } from '@playwright/test';

import { BasePage } from './BasePage';
import { Button } from '../components/Button';

export class CheckoutComplete extends BasePage {
    readonly homeBtn: Button;
    readonly message: Locator;
    readonly description: Locator;

    constructor(page: Page) {
        super(page);
        this.homeBtn = new Button(this.page, '[data-test="back-to-products"]');
        this.message = this.page.locator('[data-test="complete-header"]');
        this.description = this.page.locator('[data-test="complete-text"]');
    }

    /**
     * Tab the Back Home button.
     */
    async backHome(): Promise<void> {
        await this.homeBtn.click();
    }

    /**
     * Checks that order is success.
     */
    async checkOrderSucess(): Promise<void> {
        expect(await this.message.innerText(), "Check sucessfull header").toBe("Thank you for your order!");
        expect(await this.description.innerText(), "Check succesfull description").toBe("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    }
}