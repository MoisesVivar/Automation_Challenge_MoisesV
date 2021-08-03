Feature: Checkout

    The checkout feature consists of 3 steps. The first step consists on entering personal data for 
    shipping. The second step is the overview and the total amount to pay including taxes.
    The last step is the final confirmation of the purchase.

    Background: The user is already logged in and have already selected at least one product
    Given User visits the main page
    When User logs in with the username: 'standard_user' and password: 'secret_sauce'
    Then User navigates to the products page when logged in
    When User adds the following products to the shopping cart:
        | Sauce Labs Onesie |
    And User opens the shopping cart
    Then User must be redirected to 'Your Cart' page
    @Scenario7
    Scenario: Complete a purchase.
    Given User clicks on the Checkout button
    Then User must be redirected to 'Checkout: Your Information' page
    Given User enters the following data and clicks continue:
        |First Name   | Last Name   | Zip/Postal Code  |
        |Moisés       | Vivar       | 54055            |
    Then User must be redirected to 'Checkout: Overview' page
    When User clicks on the finish button
    Then User must be redirected to 'Checkout: Complete!' page

    






