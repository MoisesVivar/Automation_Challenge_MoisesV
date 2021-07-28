    Feature: Home page
    
        The home page is where the user can check products to buy. The user can customize the visibility of the products,
        sorting them by Name and Price, and add them to the shopping cart for its purchase

        Background: The user is already logged in
        Given User visits the main page
        When User types the username: 'standard_user'
        And User types the password: 'secret_sauce'
        And User clicks on the login button
        Then User navigates to the products page when logged in

        Scenario: Logout from the home page
        When User clicks on the right upper corner burger button
        And User clicks on the logout button
        Then User navigates to the login page

        Scenario: Sort products by Price (low to high)
        When User selects 'Price (low to high)' option
        Then User must see products ordered by 'Price (low to high)'

        Scenario: Sort products by Price (high to low)
        When User selects 'Price (high to low)' option
        Then User must see products ordered by 'Price (high to low)'        

        Scenario: Sort products by Name (A to Z)
        When User selects 'Name (A to Z)' option
        Then User must see products ordered by 'Name (A to Z)'

        Scenario: Sort products by Name (Z to A)
        When User selects 'Name (Z to A)' option
        Then User must see products ordered by 'Name (Z to A)'

        Scenario: Add multiple items to the shopping cart.
        When User adds the following products to the shopping cart:
            | Sauce Labs Fleece Jacket          |
            | Test.allTheThings() T-Shirt (Red) |
            | Sauce Labs Backpack               |
        And User opens the shopping cart
        Then User must see the products added to the shopping cart
            | Sauce Labs Fleece Jacket          |
            | Test.allTheThings() T-Shirt (Red) |
            | Sauce Labs Backpack               |

        Scenario: Add the specific product ‘Sauce Labs Onesie’ to the shopping cart.
        When User adds the following products to the shopping cart:
            | Sauce Labs Onesie |
        And User opens the shopping cart
        Then User must see the products added to the shopping cart
            | Sauce Labs Onesie |








