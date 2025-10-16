import { Page, Locator } from '@playwright/test'

import { BaseComponent } from '../BaseComponent';
import { Button } from '../Button';

export class InventoryItem extends BaseComponent {
    readonly addBtn: Button;
    readonly title: Locator;
    readonly price: Locator;
    readonly description: Locator;

    constructor(page: Page, selector: string | Locator) {
        super(page, selector);
        this.addBtn = new Button(this.page, this.root.locator('[data-test^="add-to-cart-"]'));
        this.title = this.root.locator('[data-test="inventory-item-name"]');
        this.price = this.root.locator('[data-test="inventory-item-price"]');
        this.description = this.root.locator('[data-test="inventory-item-desc"]');
    }

    /**
     * Click button "Add to cart".
     */
    async addToCart(): Promise<void> {
        await this.addBtn.click();
    }

    /**
     * Returns price.
     * @returns Price.
     */
    async getPrice(): Promise<number> {
        return this.formatPrice(await this.price.innerText());
    }

    /**
     * Returns description.
     * @returns Description.
     */
    async getDescription(): Promise<string> {
        return this.description.innerText();
    }

    /**
     * Returns title.
     * @returns Title.
     */
    async getTitle(): Promise<string> {
        return this.title.innerText();
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