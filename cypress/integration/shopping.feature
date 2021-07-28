    Feature: Shopping
    
        This is the feature related to the selection of the products to be bought before checkout.
        This feature must allow you to customize the visibility order of the products and add them to a 
        shopping cart.

        Background: The user is already logged in
        Given User visits the main page
        When User logs in with the username: 'standard_user' and password: 'secret_sauce'
        Then User navigates to the products page when logged in

        Scenario: Logout from the home page
        When User clicks on the right upper corner burger button
        And User clicks on the logout button
        Then User navigates to the login page

        Scenario Outline: Sort products by Criteria
        When User selects '<filter option>' option
        Then User must see products ordered by '<filter option>'
        Examples:
            | filter option       |
            | Name (A to Z)       |
            | Name (Z to A)       |
            | Price (low to high) |
            | Price (high to low) |

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









