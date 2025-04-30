Feature: Ecommerence Validation

  @Regression
  Scenario: Placing and Validation of Purchase order
    Given a valid login to Ecommerence website with "rajiv2@grr.la" and "Test@1234"
    When add product with name "IPHONE 13 PRO" into Cart
    Then Valiate same product name "IPHONE 13 PRO" is added to the Cart
    When Enter valid country name under Shipping address and Place order successfully
    Then Verify order present in the Order History page
