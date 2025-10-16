import { BaseComponent } from './BaseComponent';

export class Label extends BaseComponent {

    /**
     * Get text.
     * @returns Text.
     */
    async getText(): Promise<string> {
        return await this.root.innerText();
    }
}