package com.automation.cucumber.steps;

import com.automation.pages.AuthenticationPage;
import com.automation.pages.HomePage;
import com.automation.pages.MyAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInPageSteps {
    @Given("^I m on homepage$")
    public void iMOnHomepage() {
    }

    @When("^I click on signin link$")
    public void iClickOnSigninLink() {
        new HomePage().clickOnsignInLinkFiled();
    }

    @Then("^I should navigate to sign In page successfully$")
    public void iShouldNavigateToSignInPageSuccessfully() {
    }

//    @And("^I enter Invalid <username>$")
//    public void iEnterInvalidUsername(String username) {
//        new SignInPage().enterEmailForSignIn(username);
//    }
//
//    @And("^I click on signin button$")
//    public void iClickOnSigninButton() {
//        new SignInPage().clickOnSignInButton();
//    }
//
//    @Then("^Verify the <errormessage>with Invalid detalies$")
//    public void verifyTheErrormessageWithInvalidDetalies(String errormessage) {
//        String expectedresultes = errormessage;
//         String actualresultes=new AuthenticationPage().getErrorMessage();
//         Assert.assertEquals("Verify the errorMessage",expectedresultes,actualresultes);
//    }


    @Then("^verify the authentication message on the page$")
    public void verifyTheAuthenticationMessageOnThePage() {
        String expectedMessage = "AUTHENTICATION";
        String actualMessage = new SignInPage().getAuthenticationText();
        Assert.assertEquals("verify the message", expectedMessage, actualMessage);
    }

    @And("^I enter valid username$")
    public void iEnterValidUsername() {
        new SignInPage().enterEmailForSignIn("shilpapatel@gmail.com");

    }

    @And("^I enter valid password$")
    public void iEnterValidPassword() {
        new SignInPage().enterPasswordForSignIn("123456");
    }

    @Then("^verify that Sign out link is displayed$")
    public void verifyThatSignOutLinkIsDisplayed() {
        String expectedresult = "Sign out";
        String actualresult = new MyAccountPage().verifysignOutLink();
        Assert.assertEquals("verify the signout text", expectedresult, actualresult);
    }


    @And("^I enter Invalid \"([^\"]*)\"username$")
    public void iEnterInvalidUsername(String username) {
        new SignInPage().enterEmailForSignIn(username);
    }

    @And("^I enter Invalid \"([^\"]*)\"password$")
    public void iEnterInvalidPassword(String password) {
        new SignInPage().enterPasswordForSignIn(password);
    }

    @And("^I click on signin button$")
    public void iClickOnSigninButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^Verify the Invalid \"([^\"]*)\"with Invalid  detalies$")
    public void verifyTheInvalidWithInvalidDetalies(String errormessage) {
        String expectedresultes = errormessage;
        String actualresultes = new AuthenticationPage().getErrorMessage();
        Assert.assertEquals("Verify the errorMessage", expectedresultes, actualresultes);

    }
}
