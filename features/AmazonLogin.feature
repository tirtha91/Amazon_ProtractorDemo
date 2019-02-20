Feature: Login to the Amazon website

Scenario Outline: Veify the Login functionality of Amazon website
    Given User opens the Amazon website
    Then User provides "<EmailId>" and "<Password>"
    And User clicks on the Login button

Examples:

    | EmailId               | Password    |  
    | me.tirtha91@gmail.com | Tirtha@1234 |