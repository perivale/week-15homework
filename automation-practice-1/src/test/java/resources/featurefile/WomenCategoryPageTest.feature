Feature: Women category page
  As a user I wont SignIn In to automation wab site
@smoke
  Scenario: verify User Should Navigate To Women Category Page Successfully
    Given  I m on homepage
    When I m click on women text link
    Then I should navigate to women category page successfully
    And verify the women text on women catrgory page
@regression
  Scenario Outline: verify User Should Add Product To The Cart Successfully
    Given I m on homepage
    When I m click on women text link
    And I click on the product tab "<product>"
    And I change the  quantity "<qty>"
    And I select the size "<size>"
    And I select the colour "<colour>"
    And I click on Add to Cart button
    Then pop up window will diplayed
    And verify the Message on pop window
    And click X button and close the pop up window


    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |




