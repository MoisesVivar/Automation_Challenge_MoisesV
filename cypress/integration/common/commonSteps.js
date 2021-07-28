/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../pages/loginPage"
import homePage from "../pages/homePage"
import shoppingCartPage from "../pages/shoppingCartPage"

Given("User visits the main page",()=>{
    cy.visit(Cypress.env("url"))
    loginPage.verifyLoginPage()
    cy.clearCookies({ log: true})
})

When("User logs in with the username: {string} and password: {string}",(username,password)=>{
    loginPage.typeUsername(username)
    loginPage.typePassword(password)
    loginPage.clickLogin()
})

Then("User navigates to the products page when logged in",()=>{
    homePage.verifyHomePageTitle()
})

When("User adds the following products to the shopping cart:", (products) => {
    homePage.addProducts(products)
})

And("User opens the shopping cart", ()=>{
    homePage.selectShoppingCart()
})

Then("User must be redirected to {string} page", (title)=>{
    shoppingCartPage.verifyShoppingCartTitle(title)
})

