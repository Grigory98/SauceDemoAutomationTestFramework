import { Page } from '@playwright/test'
import { Header } from '../components/main/header';

export abstract class BasePage {
    readonly page: Page;
    readonly header: Header;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(this.page, '[data-test="primary-header"]');
    }
}