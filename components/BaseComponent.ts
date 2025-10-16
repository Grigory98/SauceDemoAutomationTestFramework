import { Locator, Page } from '@playwright/test'

export abstract class BaseComponent {
    readonly page: Page;
    readonly root: Locator;

    /**
     * @param page Object Page.
     * @param selector Selector or locator of the root element.
     */
    constructor(page: Page, selectorLocator: string | Locator) {
        this.page = page;
        this.root = typeof selectorLocator === 'string' ? page.locator(selectorLocator) : selectorLocator;
    }

    /**
     * Check that element is visible.
     * @returns element is visible.
     */
    async isVisible(): Promise<boolean> {
        return this.root.isVisible();
    }

    /**
     * Wait for element on the page.
     * @param timeout Time for wait (ms).
     */
    async waitForVisible(timeout = 5000): Promise<void> {
        await this.root.waitFor({ state: 'visible', timeout });
    }
}