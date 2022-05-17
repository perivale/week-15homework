Feature: AccountPage
  As a, user I wont to Sign in automation wab site
@sanity
  Scenario: verify That User Should Create Account Successfully
    Given I m on homepage
    And I click on signin link
    And I enter email to create an account
    And I click on create an account button
    And I fill all mandetory fields
    And I click on register button
    Then I should navigate to create Account Successfully page
    And verify the text my account filed


