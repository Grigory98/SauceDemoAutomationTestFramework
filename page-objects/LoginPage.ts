import { expect, Locator, Page } from '@playwright/test'

import { BasePage } from './BasePage';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Label } from '../components/Label';

const INVENTORY_URL = /inventory.html/;
const MAIN_URL = 'https://www.saucedemo.com/';

export class LoginPage extends BasePage {
    readonly username: Input;
    readonly password: Input;
    readonly loginBtn: Button;
    readonly passwordList: Label;

    constructor(page: Page) {
        super(page);
        this.username = new Input(this.page, '[data-test="username"]');
        this.password = new Input(this.page, '[data-test="password"]');
        this.loginBtn = new Button(this.page, '[data-test="login-button"]');
        this.passwordList = new Label(this.page, '[data-test="login-password"]');
    }

    /**
     * Fill username and password fields and click "Login" button.
     * @param username Username.
     */
    async login(username: string) {
        await this.page.goto(MAIN_URL);
        let pass = (await this.passwordList.getText()).split(':')[1].trim().replace(/"/g, '');

        await this.username.fill(username);
        await this.password.fill(pass);
        await this.loginBtn.click();

        await expect(this.page).toHaveURL(INVENTORY_URL);
    }
}