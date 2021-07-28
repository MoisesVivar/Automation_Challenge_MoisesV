/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../pages/loginPage"
import homePage from "../pages/homePage"
import shoppingCartPage from "../pages/shoppingCartPage"

When("User clicks on the right upper corner burger button",()=>{
    homePage.clickBurgerButton()
})

And("User clicks on the logout button",()=>{
    homePage.clickLogout()
})

Then("User navigates to the login page",()=>{
    loginPage.verifyLoginPage()
})

When("User selects {string} option",(option)=>{
    homePage.selectFilterOption(option)
})

Then("User must see products ordered by {string}",(option)=>{
    homePage.verifyDataIsSorted(option)
})

Then("User must see the products added to the shopping cart",(products)=>{
    shoppingCartPage.verifySelectedProducts(products)
})
