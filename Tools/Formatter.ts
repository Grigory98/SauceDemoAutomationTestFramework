export class Formatter {
    /**
     * Get string with price and convert price to number.
     * @param text Text with price.
     * @returns Price as number.
     */
    static formatPrice(text: string): number {
        return Number(text.replace(/[^0-9.]/g, ''));
    }
}