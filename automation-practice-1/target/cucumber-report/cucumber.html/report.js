$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccountPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "AccountPage",
  "description": "As a, user I wont to Sign in automation wab site",
  "id": "accountpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12939264000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "accountpage;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on signin link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter valid EmailId",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I fill all mandetory fields",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to create Account Successfully page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "verify the text my account filed",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 108741201,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 14884286199,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iEnterValidEmailId()"
});
formatter.result({
  "duration": 235468501,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 76065100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iFillAllMandetoryFields()"
});
formatter.result({
  "duration": 19979907301,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 14748529600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.iShouldNavigateToCreateAccountSuccessfullyPage()"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountPageSteps.verifyTheTextMyAccountFiled()"
});
formatter.result({
  "duration": 50370200,
  "error_message": "org.junit.ComparisonFailure: verify the message expected:\u003cM[y Account]\u003e but was:\u003cM[Y ACCOUNT]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.cucumber.steps.MyAccountPageSteps.verifyTheTextMyAccountFiled(MyAccountPageSteps.java:59)\r\n\tat ✽.And verify the text my account filed(CreateAccountPageTest.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1088713099,
  "status": "passed"
});
formatter.uri("Signpagetest.feature");
formatter.feature({
  "line": 2,
  "name": "SignPage",
  "description": "As a user I wont SignIn In to automation wab site",
  "id": "signpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13082066001,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "user Should Navigate To Sign In Page SuccessFully",
  "description": "",
  "id": "signpage;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to sign In page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify the authentication message on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 53100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 11893730000,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iShouldNavigateToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 71400,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.verifyTheAuthenticationMessageOnThePage()"
});
formatter.result({
  "duration": 76810800,
  "status": "passed"
});
formatter.after({
  "duration": 745608500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "signpage;verify-the-errormessage-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter Invalid \"\u003cusername\u003e\"username",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Invalid \"\u003cpassword\u003e\"password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Invalid \"\u003cerrormessage\u003e\"with Invalid  detalies",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "signpage;verify-the-errormessage-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errormessage"
      ],
      "line": 23,
      "id": "signpage;verify-the-errormessage-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 24,
      "id": "signpage;verify-the-errormessage-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 25,
      "id": "signpage;verify-the-errormessage-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 26,
      "id": "signpage;verify-the-errormessage-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 27,
      "id": "signpage;verify-the-errormessage-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8501671500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "signpage;verify-the-errormessage-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter Invalid \"\"username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Invalid \"123456\"password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Invalid \"An email address required.\"with Invalid  detalies",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 25800,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 4138808300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 154833599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 89872001,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 2803009599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 20
    }
  ],
  "location": "SignInPageSteps.verifyTheInvalidWithInvalidDetalies(String)"
});
formatter.result({
  "duration": 37377000,
  "status": "passed"
});
formatter.after({
  "duration": 753298200,
  "status": "passed"
});
formatter.before({
  "duration": 8694104700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "signpage;verify-the-errormessage-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter Invalid \"abcd@gmail.com\"username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Invalid \"\"password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Invalid \"Password is required.\"with Invalid  detalies",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 5104752800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 17
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 102076801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 99281700,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 1957005799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 20
    }
  ],
  "location": "SignInPageSteps.verifyTheInvalidWithInvalidDetalies(String)"
});
formatter.result({
  "duration": 67958800,
  "status": "passed"
});
formatter.after({
  "duration": 795675401,
  "status": "passed"
});
formatter.before({
  "duration": 4837503500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "signpage;verify-the-errormessage-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter Invalid \"adfdfgfg\"username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Invalid \"123456\"password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Invalid \"Invalid email address.\"with Invalid  detalies",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 1454130400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 17
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 96595200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 97923900,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 838119600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 20
    }
  ],
  "location": "SignInPageSteps.verifyTheInvalidWithInvalidDetalies(String)"
});
formatter.result({
  "duration": 35074401,
  "status": "passed"
});
formatter.after({
  "duration": 749053501,
  "status": "passed"
});
formatter.before({
  "duration": 4767343500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify The ErrorMessage With InValid Credentials",
  "description": "",
  "id": "signpage;verify-the-errormessage-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter Invalid \"abcd@gmail.com\"username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter Invalid \"123456\"password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Invalid \"Authentication failed.\"with Invalid  detalies",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninLink()"
});
formatter.result({
  "duration": 2805244400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 17
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidUsername(String)"
});
formatter.result({
  "duration": 134339200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 17
    }
  ],
  "location": "SignInPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 128326800,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 1705407500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 20
    }
  ],
  "location": "SignInPageSteps.verifyTheInvalidWithInvalidDetalies(String)"
});
formatter.result({
  "duration": 45184300,
  "status": "passed"
});
formatter.after({
  "duration": 734108301,
  "status": "passed"
});
formatter.uri("WomenCategoryPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "Women category page",
  "description": "As a user I wont SignIn In to automation wab site",
  "id": "women-category-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4301536300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verify User Should Navigate To Women Category Page Successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I m click on women text link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to women category page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the women text on women catrgory page",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iMClickOnWomenTextLink()"
});
formatter.result({
  "duration": 2001725301,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iShouldNavigateToWomenCategoryPageSuccessfully()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.verifyTheWomenTextOnWomenCatrgoryPage()"
});
formatter.result({
  "duration": 47586000,
  "error_message": "org.junit.ComparisonFailure: verify the women link text expected:\u003cWOM[W]N\u003e but was:\u003cWOM[E]N\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.automation.cucumber.steps.WomenCategoryPageSteps.verifyTheWomenTextOnWomenCatrgoryPage(WomenCategoryPageSteps.java:26)\r\n\tat ✽.And verify the women text on women catrgory page(WomenCategoryPageTest.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1410811200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I m click on women text link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product tab \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change the  quantity \"\u003cqty\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "pop up window will diplayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify the Message on pop window",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click X button and close the pop up window",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 24,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 25,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 26,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 27,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 28,
      "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4714163400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I m click on women text link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product tab \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change the  quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "pop up window will diplayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify the Message on pop window",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click X button and close the pop up window",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iMClickOnWomenTextLink()"
});
formatter.result({
  "duration": 1652028500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 28
    }
  ],
  "location": "WomenCategoryPageSteps.iClickOnTheProductTab(String)"
});
formatter.result({
  "duration": 2701480901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 4215296000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTheSize(String)"
});
formatter.result({
  "duration": 100592200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTheColour(String)"
});
formatter.result({
  "duration": 144064900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 79838700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.popUpWindowWillDiplayed()"
});
formatter.result({
  "duration": 25901,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.verifyTheMessageOnPopWindow()"
});
formatter.result({
  "duration": 36414699,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickXButtonAndCloseThePopUpWindow()"
});
formatter.result({
  "duration": 4834530599,
  "status": "passed"
});
formatter.after({
  "duration": 789456500,
  "status": "passed"
});
formatter.before({
  "duration": 9326810000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I m click on women text link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product tab \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change the  quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "pop up window will diplayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify the Message on pop window",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click X button and close the pop up window",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 33699,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iMClickOnWomenTextLink()"
});
formatter.result({
  "duration": 5445058000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 28
    }
  ],
  "location": "WomenCategoryPageSteps.iClickOnTheProductTab(String)"
});
formatter.result({
  "duration": 4891339399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 4282543600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTheSize(String)"
});
formatter.result({
  "duration": 156436501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTheColour(String)"
});
formatter.result({
  "duration": 154018300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 92925200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.popUpWindowWillDiplayed()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.verifyTheMessageOnPopWindow()"
});
formatter.result({
  "duration": 64389400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickXButtonAndCloseThePopUpWindow()"
});
formatter.result({
  "duration": 5467027400,
  "status": "passed"
});
formatter.after({
  "duration": 816360400,
  "status": "passed"
});
formatter.before({
  "duration": 6510825200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I m click on women text link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product tab \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change the  quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "pop up window will diplayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify the Message on pop window",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click X button and close the pop up window",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 82199,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iMClickOnWomenTextLink()"
});
formatter.result({
  "duration": 4450964200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 28
    }
  ],
  "location": "WomenCategoryPageSteps.iClickOnTheProductTab(String)"
});
formatter.result({
  "duration": 6040846400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 4282998301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTheSize(String)"
});
formatter.result({
  "duration": 86209900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTheColour(String)"
});
formatter.result({
  "duration": 200255900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 75348999,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.popUpWindowWillDiplayed()"
});
formatter.result({
  "duration": 28700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.verifyTheMessageOnPopWindow()"
});
formatter.result({
  "duration": 44732200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickXButtonAndCloseThePopUpWindow()"
});
formatter.result({
  "duration": 3126241399,
  "status": "passed"
});
formatter.after({
  "duration": 805725001,
  "status": "passed"
});
formatter.before({
  "duration": 7823802500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "verify User Should Add Product To The Cart Successfully",
  "description": "",
  "id": "women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I m on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I m click on women text link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on the product tab \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I change the  quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "pop up window will diplayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "verify the Message on pop window",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "click X button and close the pop up window",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageSteps.iMOnHomepage()"
});
formatter.result({
  "duration": 48899,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iMClickOnWomenTextLink()"
});
formatter.result({
  "duration": 13308440600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 28
    }
  ],
  "location": "WomenCategoryPageSteps.iClickOnTheProductTab(String)"
});
formatter.result({
  "duration": 222420900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 22103250099,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027quantity_wanted\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-JPKCAVC\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [15dd86e557633c696ba9dee930297d18, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027quantity_wanted\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:55417}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55417/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 15dd86e557633c696ba9dee930297d18\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.clear(Unknown Source)\r\n\tat com.automation.pages.ProductPage.enterQuantity(ProductPage.java:42)\r\n\tat com.automation.cucumber.steps.WomenCategoryPageSteps.iChangeTheQuantity(WomenCategoryPageSteps.java:37)\r\n\tat ✽.And I change the  quantity \"2\"(WomenCategoryPageTest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTheSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 21
    }
  ],
  "location": "WomenCategoryPageSteps.iSelectTheColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageSteps.popUpWindowWillDiplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageSteps.verifyTheMessageOnPopWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageSteps.clickXButtonAndCloseThePopUpWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1168269600,
  "status": "passed"
});
});