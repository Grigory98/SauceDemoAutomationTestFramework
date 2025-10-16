import { Page, Locator, expect } from '@playwright/test';

import { BasePage } from './BasePage';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

const SUCESSFUL_MSG = "Thank you for your order!";
const SUCESSFUL_DSCR = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";

export class CheckoutComplete extends BasePage {
    readonly homeBtn: Button;
    readonly message: Label;
    readonly description: Label;

    constructor(page: Page) {
        super(page);
        this.homeBtn = new Button(this.page, '[data-test="back-to-products"]');
        this.message = new Label(this.page, '[data-test="complete-header"]');
        this.description = new Label(this.page, '[data-test="complete-text"]');
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
        expect(await this.message.getText(), "Check sucessfull header").toBe(SUCESSFUL_MSG);
        expect(await this.description.getText(), "Check succesfull description").toBe(SUCESSFUL_DSCR);
    }
}