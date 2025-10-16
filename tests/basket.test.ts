import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage';
import { InventoryPage } from '../page-objects/InventoryPage';
import { BasketPage } from '../page-objects/BasketPage';
import { CheckoutInfoPage } from '../page-objects/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../page-objects/CheckoutOverviewPage';
import { CheckoutComplete } from '../page-objects/CheckoutComplete';

const user = 'standard_user';

test.describe('Basket tests', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let basketPage: BasketPage;
    let checkoutInfoPage: CheckoutInfoPage;
    let checkoutOverviewPage: CheckoutOverviewPage;
    let checkoutComplete: CheckoutComplete;
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        basketPage = new BasketPage(page);
        checkoutInfoPage = new CheckoutInfoPage(page);
        checkoutOverviewPage = new CheckoutOverviewPage(page);
        checkoutComplete = new CheckoutComplete(page);

        await loginPage.login(user);
    });

    test('1. Check Add and Remove item from the cart', async ({ page }) => {
        await inventoryPage.getCard(0).addToCart();
        await inventoryPage.header.openBasket();
        expect(await inventoryPage.header.getItemsCount()).toBe(1);

        await basketPage.getCard(0).remove();
        expect(await basketPage.header.getItemsCount()).toBe(0);
    });

    test('2. Full process buy item.', async ({ page }) => {
        let firstCard = inventoryPage.getCard(1);
        await firstCard.addToCart();
        let firstCardPrice = await firstCard.getPrice();
        
        let secondCard = inventoryPage.getCard(2);
        await secondCard.addToCart();
        let secondCardPrice = await secondCard.getPrice();

        await inventoryPage.header.openBasket();
        expect(await inventoryPage.header.getItemsCount()).toBe(2);

        await basketPage.checkout();
        await checkoutInfoPage.fill("Abc", "Def", "1234567890");
        await checkoutInfoPage.continue();

        let tax = await checkoutOverviewPage.getTax();
        let sum = firstCardPrice + secondCardPrice;
        expect(await checkoutOverviewPage.getItemTotalPrice(), "Check item total price").toBe(sum);
        let sumWithTax = Number(Number(firstCardPrice + secondCardPrice + tax).toFixed(2));
        expect(await checkoutOverviewPage.getTotal(), "Check total price").toBe(sumWithTax);
        checkoutOverviewPage.finish();

        await checkoutComplete.checkOrderSucess();
    });
});