/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../pages/loginPage"

Then("User must see the message: {string}",(message)=>{
    loginPage.assertingErrorMessage(message)
})