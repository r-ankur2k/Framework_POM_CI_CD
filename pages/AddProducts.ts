import { expect, Page } from "@playwright/test";
import {ProductPageSelectors } from "../selectors/ProductPageSelectors";


export class AddProductsPage{
    constructor(private page : Page){};

    async addProduct1(){
        await expect(this.page.locator(ProductPageSelectors.Fjallraven)).toBeVisible();
        await this.page.click(ProductPageSelectors.Fjallraven);

        // Add to Cart
        await expect(this.page.locator(ProductPageSelectors.addToCartBtn)).toBeVisible();
        await this.page.click(ProductPageSelectors.addToCartBtn);

        // Back to Products
        await expect(this.page.locator(ProductPageSelectors.productsSectionBtn)).toBeVisible();
        await this.page.click(ProductPageSelectors.productsSectionBtn);
    }

    async addProduct2(){
        await expect(this.page.locator(ProductPageSelectors.JohnHardy)).toBeVisible();
        await this.page.click(ProductPageSelectors.JohnHardy);

        // Add to Cart
        await expect(this.page.locator(ProductPageSelectors.addToCartBtn)).toBeVisible();
        await this.page.click(ProductPageSelectors.addToCartBtn);

        // Back to Products
        await expect(this.page.locator(ProductPageSelectors.productsSectionBtn)).toBeVisible();
        await this.page.click(ProductPageSelectors.productsSectionBtn);
    }

    async addProduct3(){
        await expect(this.page.locator(ProductPageSelectors.monitorSamsung)).toBeVisible();
        await this.page.click(ProductPageSelectors.monitorSamsung);

        // Add to Cart
        await expect(this.page.locator(ProductPageSelectors.addToCartBtn)).toBeVisible();
        await this.page.click(ProductPageSelectors.addToCartBtn);

        // Back to Products
        await expect(this.page.locator(ProductPageSelectors.productsSectionBtn)).toBeVisible();
        await this.page.click(ProductPageSelectors.productsSectionBtn);
    }
}