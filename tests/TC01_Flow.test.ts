import {test , Page } from "@playwright/test";
import { LoginPage } from "../pages/Login";
import {EnvLinks } from "../config/env"
import users from "../fixtures/users.json";
import { AddProductsPage } from "../pages/AddProducts";
import { cartItemsPage } from "../pages/CartItems";
import { log } from "console";

test.describe.serial("E2E Flow", () => {
    let page : Page;
        
    test.beforeAll( async ({browser}) => {
        const context = await browser.newContext();
        page = await context.newPage();

        //Object For LoginPage
        
        const login = new LoginPage(page);

        // Steps
        await page.goto(EnvLinks.login);
        await login.clickAccountBtn();
        await login.enterUsername(users.validUser.username);
        await login.enterPassword(users.validUser.password);
        await login.clickLoginBtn();
        console.log("✅ Login Completed !");
        
    })

    test("Adding Products", async () => {
        const products = new AddProductsPage(page);
        await products.addProduct1();
        await products.addProduct2();
        await products.addProduct3();
        console.log("✅ Added Products !");
    })

    test("Checkout Items Validation" , async ()=>{
        const items = new cartItemsPage(page);
        await items.clickcheckoutButton();
        await items.validateProduct1();
        await items.validateProduct2();
        await items.validateProduct3();
        console.log("✅ Items Validations !");
    })

    test("Checkout Items" , async ()=>{
        const items = new cartItemsPage(page);
        await items.finalCheckoutItems();
    })

});