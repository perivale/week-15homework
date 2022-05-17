
Feature: SignPage
  As a user I wont SignIn In to automation wab site

 @smoke
  Scenario: user Should Navigate To Sign In Page SuccessFully
    Given I m on homepage
    When I click on signin link
    And I should navigate to sign In page successfully
  Then verify the authentication message on the page


 @regression
  Scenario Outline: verify The ErrorMessage With InValid Credentials
    Given I m on homepage
    When I click on signin link
    And I enter Invalid "<username>"username
    And I enter Invalid "<password>"password
    And I click on signin button
    Then Verify the Invalid "<errormessage>"with Invalid  detalies

    Examples:
      | username       | password | errormessage               |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |



   Scenario: verify That User Should LogIn SuccessFully With Valid Credentials
     Given I m on homepage
     When I click on signin link
     And I enter valid username
     And I enter valid password
     And I click on signin button
     And I should navigate to sign In page successfully
     Then verify that Sign out link is displayed


