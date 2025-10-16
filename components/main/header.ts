import { Page, Locator } from '@playwright/test';

import { BaseComponent } from '../BaseComponent';
import { Button } from '../Button';
import { Label } from '../Label';

export class Header extends BaseComponent {
    readonly basketBtn: Button;
    readonly basketCountItems: Label;

    constructor(page: Page, selectorLocator: string | Locator) {
        super(page, selectorLocator);
        this.basketBtn = new Button(this.page, '[data-test="shopping-cart-link"]');
        this.basketCountItems = new Label(this.page, '[data-test="shopping-cart-badge"]');
    }

    /**
     * Open the basket.
     */
    async openBasket(): Promise<void> {
        await this.basketBtn.click();
    }

    /**
     * Returnts count of selected items choosed in inventory.
     * @returns Count of selected items.
     */
    async getItemsCount(): Promise<number> {
        let isVisible = await this.basketCountItems.isVisible();

        if (!isVisible) {
            return 0;
        }

        let num = Number(await (this.basketCountItems.getText()));
        return isNaN(num) ? 0 : num;
    }
}