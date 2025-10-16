import { Page, Locator } from '@playwright/test';

import { BaseComponent } from "../BaseComponent";
import { Button } from '../Button';
import { Label } from '../Label';

export class CartItem extends BaseComponent {
    readonly removeBtn: Button;
    readonly price: Label;
    readonly title: Label;
    readonly description: Label;
    readonly quantity: Label;

    constructor(page: Page, selectorLocator: string | Locator) {
        super(page, selectorLocator);
        this.removeBtn = new Button(this.page, this.root.locator('[data-test^="remove-sauce-labs-"]'));
        this.price = new Label(this.page, this.root.locator('[data-test="inventory-item-price"]'));
        this.title = new Label(this.page, this.root.locator('[data-test="inventory-item-name"]'));
        this.description = new Label(this.page, this.root.locator('[data-test="inventory-item-desc"]'));
        this.quantity = new Label(this.page, this.root.locator('[data-test="item-quantity"]'));
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
        return this.price.getText();
    }

    /**
     * Returns description of the item.
     * @returns Description.
     */
    async getDescription(): Promise<string> {
        return this.description.getText();
    }

    /**
     * Returns title of the item.
     * @returns Title.
     */
    async getTitle(): Promise<string> {
        return this.title.getText();
    }

    /**
     * Returns quantity of the item.
     * @returns Quantity.
     */
    async getQuantity(): Promise<string> {
        return this.quantity.getText();
    }
}