Feature: To verify the UI of the website

  @Foo
  @Valid
  Scenario: To login with a valid username and password
    Given User enter the "https://the-internet.herokuapp.com/login" into the browser
    When User will enter the valid credentials like "tomsmith" and "SuperSecretPassword!"
    Then User will be able to login into the website
  @Foo
  @Invalid
  Scenario: To login with a invalid username and password
    Given User enter the "https://the-internet.herokuapp.com/login" into the browser
    When User will enter the invalid credentials like "tomsmith1 " and "SuperSecretPassword!"
    Then User will be able to see the error message in the website
