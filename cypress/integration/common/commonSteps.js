/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../pages/loginPage"
import homePage from "../pages/homePage"

Given("User visits the main page",()=>{
    cy.visit(Cypress.env("url"))
    loginPage.verifyLoginPage()
    cy.clearCookies({ log: true})
})

When("User types the username: {string}",(username)=>{
    loginPage.typeUsername(username)
})

And("User types the password: {string}",(password)=>{
    loginPage.typePassword(password)
})

And("User clicks on the login button",()=>{
    loginPage.clickLogin()
})

Then("User navigates to the products page when logged in",()=>{
    homePage.verifyHomePageTitle()
})

