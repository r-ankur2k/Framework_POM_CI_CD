import { expect, Page } from "@playwright/test";
import { LoginPageSelectors } from "../selectors/LoginPageSelectors";


export class LoginPage{
    constructor(private page : Page){};

    async clickAccountBtn(){
        await expect(this.page.locator(LoginPageSelectors.accountbtn)).toBeVisible();
        await this.page.click(LoginPageSelectors.accountbtn);
    }
    async enterUsername(value : string){
        await expect(this.page.locator(LoginPageSelectors.username)).toBeVisible();
        await this.page.fill(LoginPageSelectors.username , value);
    }
    async enterPassword(value : string){
        await expect(this.page.locator(LoginPageSelectors.password)).toBeVisible();
        await this.page.fill(LoginPageSelectors.password, value);
    }
    async clickLoginBtn(){
        await expect(this.page.locator(LoginPageSelectors.loginBtn)).toBeVisible();
        await this.page.click(LoginPageSelectors.loginBtn);
    }
}