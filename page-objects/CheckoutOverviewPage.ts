import { Page, Locator } from '@playwright/test';

import { BasePage } from './BasePage';
import { Button } from '../components/Button';
import { Label } from '../components/Label';
import { Formatter } from '../Tools/Formatter';

export class CheckoutOverviewPage extends BasePage {
    readonly cancelBtn: Button;
    readonly finishBtn: Button;
    readonly paymentInfo: Label;
    readonly shippingInfo: Label;
    readonly itemTotal: Label;
    readonly tax: Label;
    readonly total: Label;

    constructor(page: Page) {
        super(page);
        this.cancelBtn = new Button(this.page, '[data-test="cancel"]');
        this.finishBtn = new Button(this.page, '[data-test="finish"]');
        this.paymentInfo = new Label(this.page, '[data-test="payment-info-value"]');
        this.shippingInfo = new Label(this.page, '[data-test="shipping-info-value"]');
        this.itemTotal = new Label(this.page, '[data-test="subtotal-label"]');
        this.tax = new Label(this.page, '[data-test="tax-label"]');
        this.total = new Label(this.page, '[data-test="total-label"]');
    }

    /**
     * Click the finish button.
     */
    async finish(): Promise<void> {
        await this.finishBtn.click();
    }

    /**
     * Click the cancel button.
     */
    async cancel(): Promise<void> {
        await this.cancelBtn.click();
    }

    /**
     * Returnts text from payment info.
     * @returns Payment info text.
     */
    async getPaymentInfo(): Promise<string> {
        return this.paymentInfo.getText();
    }

    /**
     * Returns text from shipping info.
     * @returns Shipping info.
     */
    async getShippingInfo(): Promise<string> {
        return this.shippingInfo.getText();
    }

    /**
     * Returns item total price.
     * @returns Item total price.
     */
    async getItemTotalPrice(): Promise<number> {
        return Formatter.formatPrice(await this.itemTotal.getText())
    }

    /**
     * Returns tax price.
     * @returns Tax.
     */
    async getTax(): Promise<number> {
        return Formatter.formatPrice(await this.tax.getText())
    }

    /**
     * Returns total price.
     * @returns Total price.
     */
    async getTotal(): Promise<number> {
        return Formatter.formatPrice(await this.total.getText())
    }
}