Feature: Login page

    The login feature is used to authenticate users from the SWAGLABS page, 
    in order to begin shopping articles

    Background: User is already in the main page
    Given User visits the main page

    Scenario Outline: Login with a valid user
    When User types the username: '<username>'
    And User types the password: '<password>'
    And User clicks on the login button
    Then User navigates to the products page when logged in
    Examples:
        | username                | password     |
        | standard_user           | secret_sauce |
        | locked_out_user         | secret_sauce |
        | problem_user            | secret_sauce |
        | performance_glitch_user | secret_sauce |

    Scenario Outline: Login with an invalid user.
    When User types the username: '<username>'
    And User types the password: '<password>'
    And User clicks on the login button
    Then User must see the message: 'Epic sadface: Username and password do not match any user in this service'
    Examples:
        | username                | password         |
        | invalid_user            | secret_sauce     |
        | standard_user           | invalid_password |
        | invalid_user            | invalid_password |



