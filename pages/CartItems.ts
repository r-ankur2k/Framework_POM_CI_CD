import { expect, Page } from "@playwright/test";
import { cartItemsSelecters } from "../selectors/cartItemsSelectors";


export class cartItemsPage{
    constructor(private page : Page){};

    async clickcheckoutButton(){
        await expect(this.page.locator(cartItemsSelecters.cartCheckoutButton)).toBeVisible();
        await this.page.click(cartItemsSelecters.cartCheckoutButton);
    }

    async validateProduct1(){
        await expect(this.page.locator(cartItemsSelecters.product1)).toBeVisible();
        await expect(this.page.locator(cartItemsSelecters.product1)).toContainText("Fjallraven");
    }


    async validateProduct2(){
        await expect(this.page.locator(cartItemsSelecters.product2)).toBeVisible();
        await expect(this.page.locator(cartItemsSelecters.product2)).toContainText("John Hardy");
    }

    async validateProduct3(){
        await expect(this.page.locator(cartItemsSelecters.product3)).toBeVisible();
        await expect(this.page.locator(cartItemsSelecters.product3)).toContainText("Samsung 49-Inch");
    }

    async finalCheckoutItems() {
    this.page.once('dialog', async dialog => {
        console.log("✅ " + dialog.message());
        await dialog.accept();
    });
    await this.page.locator(cartItemsSelecters.finalCheckoutBtn).click();
}};