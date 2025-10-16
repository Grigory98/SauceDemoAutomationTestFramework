import { Page, Locator } from '@playwright/test';

import { BaseComponent } from "../BaseComponent";
import { Button } from '../Button';

export class CartItem extends BaseComponent {
    readonly removeBtn: Button;
    readonly price: Locator;
    readonly title: Locator;
    readonly description: Locator;
    readonly quantity: Locator;

    constructor(page: Page, selectorLocator: string | Locator) {
        super(page, selectorLocator);
        this.removeBtn = new Button(this.page, this.root.locator('[data-test^="remove-sauce-labs-"]'));
        this.price = this.root.locator('[data-test="inventory-item-price"]');
        this.title = this.root.locator('[data-test="inventory-item-name"]');
        this.description = this.root.locator('[data-test="inventory-item-desc"]');
        this.quantity = this.root.locator('[data-test="item-quantity"]');
    }

    /**
     * Remove item from basket.
     */
    async remove(): Promise<void> {
        await this.removeBtn.click();
    }

    /**
     * Returns price of the item.
     * @returns Price.
     */
    async getPrice(): Promise<string> {
        return this.price.innerText();
    }

    /**
     * Returns description of the item.
     * @returns Description.
     */
    async getDescription(): Promise<string> {
        return this.description.innerText();
    }

    /**
     * Returns title of the item.
     * @returns Title.
     */
    async getTitle(): Promise<string> {
        return this.title.innerText();
    }

    /**
     * Returns quantity of the item.
     * @returns Quantity.
     */
    async getQuantity(): Promise<string> {
        return this.quantity.innerText();
    }
}