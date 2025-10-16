import { Page, Locator } from '@playwright/test';

import { BasePage } from './BasePage';
import { Button } from '../components/Button';

export class CheckoutOverviewPage extends BasePage {
    readonly cancelBtn: Button;
    readonly finishBtn: Button;
    readonly paymentInfo: Locator;
    readonly shippingInfo: Locator;
    readonly itemTotal: Locator;
    readonly tax: Locator;
    readonly total: Locator;

    constructor(page: Page) {
        super(page);
        this.cancelBtn = new Button(this.page, '[data-test="cancel"]');
        this.finishBtn = new Button(this.page, '[data-test="finish"]');
        this.paymentInfo = this.page.locator('[data-test="payment-info-value"]');
        this.shippingInfo = this.page.locator('[data-test="shipping-info-value"]');
        this.itemTotal = this.page.locator('[data-test="subtotal-label"]');
        this.tax = this.page.locator('[data-test="tax-label"]');
        this.total = this.page.locator('[data-test="total-label"]');
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
        return this.paymentInfo.innerText();
    }

    /**
     * Returns text from shipping info.
     * @returns Shipping info.
     */
    async getShippingInfo(): Promise<string> {
        return this.shippingInfo.innerText();
    }

    /**
     * Returns item total price.
     * @returns Item total price.
     */
    async getItemTotalPrice(): Promise<number> {
        return this.formatPrice(await this.itemTotal.innerText())
    }

    /**
     * Returns tax price.
     * @returns Tax.
     */
    async getTax(): Promise<number> {
        return this.formatPrice(await this.tax.innerText())
    }

    /**
     * Returns total price.
     * @returns Total price.
     */
    async getTotal(): Promise<number> {
        return this.formatPrice(await this.total.innerText())
    }

    /**
     * Get string with price and convert price to number.
     * @param text Text with price.
     * @returns Price as number.
     */
    private formatPrice(text: string): number {
        return Number(text.replace(/[^0-9.]/g, ''));
    }
}