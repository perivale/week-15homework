package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {
    private static final Logger log = Logger.getLogger(AuthenticationPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "id_gender2")
    WebElement mrsRadioButton;
    @CacheLookup
    @FindBy(xpath = "//input[@id='customer_firstname']")
    WebElement infoFirstNameField;
    @CacheLookup
    @FindBy(id = "customer_lastname")
    WebElement infoLastNameField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement infoPassWordField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='days']")
    WebElement dateDropDownField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='months']")
    WebElement monthdropDownField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='years']")
    WebElement yearDropDownField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='firstname']")
    WebElement addressFirstNameField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='lastname']")
    WebElement addressLastNameFeild;
    @CacheLookup
    @FindBy(xpath = "//input[@id='company']")
    WebElement companyField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='address1']")
    WebElement addressField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='address2']")
    WebElement addressLine2Field;
    @CacheLookup
    @FindBy(id = "city")
    WebElement cityField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")
    WebElement stateDropDownField;
    @CacheLookup
    @FindBy(id = "postcode")
    WebElement zipCodeField;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement countryDropDownField;
    @CacheLookup
    @FindBy(xpath = "//textarea[@id='other']")
    WebElement additionalField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='phone']")
    WebElement homePhoneField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement mobileNumberField;
    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement addressAliasField;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement registerButtonField;


    public void clickOnMrsRadioButton() {

        clickOnElement(mrsRadioButton);
        log.info("click on mrs radio button" + mrsRadioButton.toString());
    }

    public void enterFirstNameInInfo(String fName) {

        sendTextToElement(infoFirstNameField, fName);
        log.info("enter firstnameinfo filed" + infoFirstNameField.toString());
    }

    public void enterlastNameInInfo(String lName) {
        sendTextToElement(infoLastNameField, lName);
        log.info("enterlastnamefiled" + infoLastNameField.toString());
    }

    public void enterPasswordInInfo(String password) {
        sendTextToElement(infoPassWordField, password);
        log.info("enterpassword" + infoPassWordField.toString());
    }

    public void clickOnDatedropDown() {
        clickOnElement(dateDropDownField);
    }

    public void selectDateFromDropDown(String text) {
        selectByVisibleTextFromDropDown(dateDropDownField, text);
    }

    public void clickOnMonthDropDown() {
        clickOnElement(monthdropDownField);
    }

    public void selectMonthFromDropDown(String text) {
        selectByVisibleTextFromDropDown(monthdropDownField, text);
    }

    public void clickOnYearDropDown() {
        clickOnElement(yearDropDownField);
    }

    public void selectYearFromDropDown(String text) {
        selectByVisibleTextFromDropDown(yearDropDownField, text);
    }

    public void enterFirstNameInAddress(String fName) {
        sendTextToElement(addressFirstNameField, fName);
        log.info("enter fristname in add" + addressFirstNameField.toString());
    }

    public void enterLastNameInAddress(String lName) {
        sendTextToElement(addressLastNameFeild, lName);
    }

    public void enterCompanyName(String name) {
        sendTextToElement(companyField, name);
    }

    public void enterAddress(String address) {
        sendTextToElement(addressField, address);
    }

    public void enterAddressLine2(String line2) {
        sendTextToElement(addressLine2Field, line2);
    }

    public void enterCity(String city) {
        sendTextToElement(cityField, city);
        log.info("entercity" + cityField.toString());
    }

    public void clickOnStateDropDown() {
        clickOnElement(stateDropDownField);
        log.info("click on statedropdown menu" + stateDropDownField.toString());
    }

    public void selectStateFromDropDown(String text) {
        selectByVisibleTextFromDropDown(stateDropDownField, text);
        log.info("selecttext form dropdown menu" + stateDropDownField.toString());
    }

    public void enterZipCode(String code) {
        sendTextToElement(zipCodeField, code);
        log.info("enterzip code" + zipCodeField.toString());
    }

    public void clickOnCounetrydropDownField() {
        clickOnElement(countryDropDownField);
        log.info("click on country drop down" + countryDropDownField.toString());
    }

    public void selectCountryFromDropDown(String country) {
        selectByVisibleTextFromDropDown(countryDropDownField, country);
        log.info("select country by dropdown menu" + countryDropDownField.toString());
    }

    public void enterAdditionalField(String text) {
        sendTextToElement(additionalField, text);

    }

    public void enterHomePhoneNumber(String num) {
        sendTextToElement(homePhoneField, num);
    }

    public void enterMobilePhone(String mobileNum) {
        sendTextToElement(mobileNumberField, mobileNum);
        log.info("enter moblie phone" + mobileNumberField.toString());
    }

    public void enterAliasAddress(String add) {
        sendTextToElement(addressAliasField, add);
        log.info("enteralias add" + addressAliasField.toString());
    }

    public void clickOnRegisterField() {
        clickOnElement(registerButtonField);
        log.info("click on ragister filed" + registerButtonField.toString());
    }


}

