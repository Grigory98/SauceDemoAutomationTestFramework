import { expect, Locator, Page } from '@playwright/test'

import { BasePage } from './BasePage';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const inventoryUrl = /inventory.html/;
const mainUrl = 'https://www.saucedemo.com/';

export class LoginPage extends BasePage {
    readonly username: Input;
    readonly password: Input;
    readonly loginBtn: Button;
    readonly passwordList: Locator;

    constructor(page: Page) {
        super(page);
        this.username = new Input(page, '[data-test="username"]');
        this.password = new Input(page, '[data-test="password"]');
        this.loginBtn = new Button(page, '[data-test="login-button"]');
        this.passwordList = this.page.locator('[data-test="login-password"]');
    }

    /**
     * Fill username and password fields and click "Login" button.
     * @param username Username.
     */
    async login(username: string) {
        await this.page.goto(mainUrl);
        let pass = (await this.passwordList.innerText()).split(':')[1].trim().replace(/"/g, '');

        await this.username.fill(username);
        await this.password.fill(pass);
        await this.loginBtn.click();

        await expect(this.page).toHaveURL(inventoryUrl);
    }
}