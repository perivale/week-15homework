package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.Logger;
import org.apache.poi.ss.formula.functions.T;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {
    private static final Logger log = Logger.getLogger(SignInPage.class.getName());
    int num=generateRandomNumber();
    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailField;
    @CacheLookup
    @FindBy(id = "passwd")
    WebElement passWordField;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/form[1]/div[1]/p[2]/button[1]/span[1]/i[1]")
    WebElement signInButton;
    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement authenticationTextField;

    @CacheLookup
    @FindBy(xpath = "//h3[normalize-space()='Create an account']")
    WebElement creatAccountTextField;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Create an account']")
    WebElement creatAccoutnButtonField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailFieldInCreatAccount;

    public void enterEmailForCreateAccount() throws InterruptedException {
        Thread.sleep(3000);
        sendTextToElement(emailFieldInCreatAccount,"sita" + num + "@gmail.com");
        log.info("Enter email : "+"sita" + num + "@gmail.com"+" to email field "+ emailField.toString());
    }

    public void clickOnCreateAccountButton() {
        clickOnElement(creatAccoutnButtonField);
        log.info("click on create acc button " + creatAccoutnButtonField.toString());
    }
//    public void enterEmail(){
//        sendTextToElement(emailField,"sita" + num + "@gmail.com");
//        log.info("Enter email : "+"sita" + num + "@gmail.com"+" to email field "+ emailField.toString());
//    }

    public void enterEmailForSignIn(String email) {
        sendTextToElement(emailField, email);
        log.info("enter email for sign in" + emailField.toString());
    }

    public void enterPasswordForSignIn(String password) {
        sendTextToElement(passWordField, password);
        log.info("enter password for sign in" + passWordField.toString());
    }

    public String getAuthenticationText() {
        log.info("verify the text" + authenticationTextField.toString());

        return getTextFromElement(authenticationTextField);
    }

    public String getCreatAnAccountText() {

        log.info("verify thecreate account text" + creatAccountTextField.toString());
        return getTextFromElement(creatAccountTextField);
    }

    public void clickOnSignInButton() {
        clickOnElement(signInButton);
        log.info("click on sign in button" + signInButton.toString());
    }


    }


