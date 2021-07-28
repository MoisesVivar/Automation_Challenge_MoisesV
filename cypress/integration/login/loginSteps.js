/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../pages/loginPage"

When("User types the username: {string}",(username)=>{
    loginPage.typeUsername(username)
})

And("User types the password: {string}",(password)=>{
    loginPage.typePassword(password)
})

And("User clicks on the login button",()=>{
    loginPage.clickLogin()
})

Then("User must see the message: {string}",(message)=>{
    loginPage.verifyErrorMessage(message)
})