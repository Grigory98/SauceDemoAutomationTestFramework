import { Page, Locator } from '@playwright/test';

import { BasePage } from './BasePage';
import { Button } from '../components/Button';
import { CartItem } from '../components/cart/cartItem';

export class BasketPage extends BasePage {
    readonly continueShoppingBtn: Button;
    readonly checkoutBtn: Button;
    readonly itemLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.continueShoppingBtn = new Button(this.page, '[data-test="continue-shopping"]');
        this.checkoutBtn = new Button(this.page, '[data-test="checkout"]');
        this.itemLocator = this.page.locator('[data-test="inventory-item"]');
    }

    /**
     * Return cart item.
     * @param index Item index.
     * @returns Cart item.
     */
    getCard(index: number): CartItem {
        return new CartItem(this.page, this.itemLocator.nth(index));
    }

    /**
     * Get count of cards.
     * @returns Count of cards.
     */
    async getCardsCount(): Promise<number> {
        return this.itemLocator.count();
    }

    /**
     * Click the checkout button.
     */
    async checkout(): Promise<void> {
        await this.checkoutBtn.click();
    }

    /**
     * Click the button Continue shopping and back to the inventory.
     */
    async back(): Promise<void> {
        await this.continueShoppingBtn.click();
    }
}