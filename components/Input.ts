import { BaseComponent } from "./BaseComponent";

export class Input extends BaseComponent {

    /**
     * Fill the text into the input.
     * @param value Text for input.
     */
    async fill(value: string): Promise<void> {
        await this.root.fill(value);
    }

    /**
     * Clear the field.
     */
    async clear(): Promise<void> {
        await this.root.clear();
    }

    /**
     * Get current input value.
     * @returns Input value.
     */
    async getValue(): Promise<string> {
        return this.root.inputValue();
    }
}