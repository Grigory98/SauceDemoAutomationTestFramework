import { Page, Locator } from '@playwright/test'

import { BasePage } from './BasePage'
import { InventoryItem } from '../components/inventory/InventoryItem';

export class InventoryPage extends BasePage {
    readonly itemLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.itemLocator = this.page.locator('[data-test="inventory-item"]');
    }

    /**
     * Get card by number.
     * @param index Index of the card.
     * @returns Item
     */
    getCard(index: number): InventoryItem {
        return new InventoryItem(this.page, this.itemLocator.nth(index));
    }

    /**
     * Get count of cards.
     * @returns Count of cards.
     */
    async getCardsCount(): Promise<number> {
        return this.itemLocator.count();
    }
}