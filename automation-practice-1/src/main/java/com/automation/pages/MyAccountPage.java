package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyAccountPage extends Utility {
    private static final Logger log = Logger.getLogger(MyAccountPage.class.getName());


    public MyAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[@class='page-heading']")
    WebElement myaccountTextField;
    @CacheLookup
    @FindBy(linkText = "Sign out")
    WebElement signOutLinkFiled;

    public String getMyaccountText() {
        log.info("get my account text" + myaccountTextField.toString());

        return getTextFromElement(myaccountTextField);
    }

    public String verifysignOutLink() {
        log.info("verify signout link text" + signOutLinkFiled.toString());
        return signOutLinkFiled.getText();
    }

    public void clickOnSignOutLink() {

        clickOnElement(signOutLinkFiled);
        log.info("click on signout link" + signOutLinkFiled.toString());

    }
}
