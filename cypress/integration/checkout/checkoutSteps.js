/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import shoppingCartPage from "../pages/shoppingCartPage"
import yourInformationPage from "../pages/yourInformationPage"
import overviewPage from "../pages/overeviewPage"

Given("User clicks on the Checkout button",()=>{
    shoppingCartPage.clickCheckout()
})

Then("User must be redirected to {string} page",(title)=>{
    yourInformationPage.verifyYourInformationTitle(title)
})

Given("User enters the following data and clicks continue:",(data)=>{
    yourInformationPage.enterPersonalData(data)
})

Then("User must be redirected to {string} page",(title)=>{
    overviewPage.verifyOverviewTitle(title)
})

When("User clicks on the finish button",()=>{
    overviewPage.clickFinish()
})

Then("User must be redirected to {string} page",(title)=>{
    overviewPage.verifyOverviewTitle(title)
})