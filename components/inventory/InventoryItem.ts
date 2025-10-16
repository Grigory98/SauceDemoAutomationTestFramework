import { Page, Locator } from '@playwright/test'

import { BaseComponent } from '../BaseComponent';
import { Button } from '../Button';
import { Label } from '../Label';
import { Formatter } from '../../Tools/Formatter';

export class InventoryItem extends BaseComponent {
    readonly addBtn: Button;
    readonly title: Label;
    readonly price: Label;
    readonly description: Label;

    constructor(page: Page, selector: string | Locator) {
        super(page, selector);
        this.addBtn = new Button(this.page, this.root.locator('[data-test^="add-to-cart-"]'));
        this.title = new Label(this.page, this.root.locator('[data-test="inventory-item-name"]'));
        this.price = new Label(this.page, this.root.locator('[data-test="inventory-item-price"]'));
        this.description = new Label(this.page, this.root.locator('[data-test="inventory-item-desc"]'));
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
        return Formatter.formatPrice(await this.price.getText());
    }

    /**
     * Returns description.
     * @returns Description.
     */
    async getDescription(): Promise<string> {
        return this.description.getText();
    }

    /**
     * Returns title.
     * @returns Title.
     */
    async getTitle(): Promise<string> {
        return this.title.getText();
    }
}