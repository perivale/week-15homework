package com.automation.cucumber.steps;

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomenCategoryPageSteps {
    @When("^I m click on women text link$")
    public void iMClickOnWomenTextLink() {
        new HomePage().clickOnWomanField();
    }

    @Then("^I should navigate to women category page successfully$")
    public void iShouldNavigateToWomenCategoryPageSuccessfully() {

    }

    @And("^verify the women text on women catrgory page$")
    public void verifyTheWomenTextOnWomenCatrgoryPage() {
        String expectedtext="WOMWN";
        String actualtext=new WomenCategoryPage().getWomenText();
        Assert.assertEquals("verify the women link text",expectedtext,actualtext);
    }

    @And("^I click on the product tab \"([^\"]*)\"$")
    public void iClickOnTheProductTab(String product)  {
        new WomenCategoryPage().clickOnProduct(product);

    }

    @And("^I change the  quantity \"([^\"]*)\"$")
    public void iChangeTheQuantity(String qty) throws InterruptedException {
        new ProductPage().enterQuantity(qty);

    }

    @And("^I select the size \"([^\"]*)\"$")
    public void iSelectTheSize(String size)  {
        new ProductPage().selectSize(size);

    }

    @And("^I select the colour \"([^\"]*)\"$")
    public void iSelectTheColour(String colour)  {
        new ProductPage().clickOnColur(colour);

    }

    @And("^I click on Add to Cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().clickOnAddCart();
    }

    @Then("^pop up window will diplayed$")
    public void popUpWindowWillDiplayed() {

    }


    @And("^verify the Message on pop window$")
    public void verifyTheMessageOnPopWindow() {
     //   String expectedText="Product successfully added to your shopping cart";
        String actualText =new  ProductPage(). getSuccessFullyAddedTextonpopupwindow();
        Assert.assertTrue(actualText.contains("Product successfully added to your shopping cart"));



    }

    @And("^click X button and close the pop up window$")
    public void clickXButtonAndCloseThePopUpWindow() {
        new ProductPage().clickOnCloseWindowTab();
    }
}
