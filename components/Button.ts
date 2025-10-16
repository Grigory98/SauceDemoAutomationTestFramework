import { BaseComponent } from "./BaseComponent";

export class Button extends BaseComponent {

    /**
     * Click on the button.
     */
    async click(): Promise<void> {
        await this.root.click();
    }

    /**
     * Check that button is enabled.
     * @returns Button is enabled.
     */
    async isEnabled(): Promise<boolean> {
        return this.root.isEnabled();
    }
}