package com.automation.cucumber.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.MyAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class MyAccountPageSteps {



    @And("^I enter email to create an account$")
    public void iEnterEmailToCreateAnAccount() throws InterruptedException {
        new SignInPage().enterEmailForCreateAccount();
    }

    @And("^I click on create an account button$")
    public void iClickOnCreateAnAccountButton() {
        new SignInPage().clickOnCreateAccountButton();
    }

    @And("^I fill all mandetory fields$")
    public void iFillAllMandetoryFields() throws InterruptedException {
        new CreateAccountPage().clickOnMrsRadioButton();
        new CreateAccountPage().enterFirstNameInInfo("shilpa");
        new CreateAccountPage().enterlastNameInInfo("patel");
        new CreateAccountPage().enterPasswordInInfo("1234567");
        new CreateAccountPage().enterFirstNameInAddress("shilpa patel");
        new CreateAccountPage().enterlastNameInInfo("patel");
        new CreateAccountPage().enterAddress("11 eden close");
        new CreateAccountPage().enterCity("surat");
        Thread.sleep(3000);
        new CreateAccountPage().clickOnStateDropDown();
        new CreateAccountPage().selectStateFromDropDown("Alabama");
        Thread.sleep(3000);
        new CreateAccountPage().enterZipCode("00000");
        new CreateAccountPage().clickOnCounetrydropDownField();
        new CreateAccountPage().selectCountryFromDropDown("United States");
        Thread .sleep(3000);
        new CreateAccountPage().enterMobilePhone("07878787879");
        new  CreateAccountPage().enterAliasAddress("11 eden close");




    }@And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickOnRegisterField();
    }

    @Then("^I should navigate to create Account Successfully page$")
    public void iShouldNavigateToCreateAccountSuccessfullyPage() {
    }

    @And("^verify the text my account filed$")
    public void verifyTheTextMyAccountFiled() {
        String expectedresult="My Account";
        String actualresults=new MyAccountPage().getMyaccountText();
        Assert.assertEquals("verify the message",expectedresult,actualresults);
    }



}
