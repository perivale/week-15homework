package com.automation.pages;


import com.automation.utility.Utility;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {
    private static final Logger log = Logger.getLogger(AuthenticationPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement quantity;
    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement sizeField;
    @CacheLookup
    @FindBy(xpath = "//a[contains(@class,'color_pick' )]")
    List<WebElement> coulr;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addCartField;
    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement successfullyAddedMessageTextField;
    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeWindowTAb;


    public void enterQuantity(String qty) throws InterruptedException {
        Thread.sleep(2000);
        quantity.clear();
        Thread.sleep(2000);
        sendTextToElement(quantity, qty);

        log.info("clear qut and type new qut"+quantity.toString());
    }

    public void selectSize(String siz) {

        selectByVisibleTextFromDropDown(sizeField, siz);
        log.info("select size" + sizeField.toString());

    }

    public void clickOnColur(String colur) {
        for (WebElement cLists : coulr) {
            if (cLists.getAttribute("title").equals(colur)) {
                cLists.click();
            }
        }
    }

    public void clickOnAddCart() {

        clickOnElement(addCartField);
        log.info("click on add to cart" + addCartField.toString());

    }

    public String getSuccessFullyAddedTextonpopupwindow() {
        log.info("get the text on pop up window" + successfullyAddedMessageTextField.toString());
        //   return successfullyAddedMessageTextField.getAttribute("innerHTML");
        return successfullyAddedMessageTextField.getAttribute("innerHTML");

    }

    public void clickOnCloseWindowTab() {
        clickOnElement(closeWindowTAb);
        log.info("click on close window tab" + closeWindowTAb.toString());
    }


}
