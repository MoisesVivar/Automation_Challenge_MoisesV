/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import homePage from "../pages/homePage"
import loginPage from "../pages/loginPage"

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

When("User adds the following products to the shopping cart:", (products) => {
    homePage.addProducts(products)
})

And("User opens the shopping cart", ()=>{
    homePage.selectShoppingCart()
})

Then("User must see the products added to the shopping cart",(products)=>{
    homePage.verifySelectedProducts(products)
})
