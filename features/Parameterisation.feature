Feature: To verify the login with valid and invalid credentials

@Parameterised
Scenario Outline: To verify the website handling
Given user enter the "<URL>" 
When user enter credentials "<username>" and "<password>"
Then user will get the message

Examples:
|                   URL                    | username      | password             |
| https://the-internet.herokuapp.com/login | tomsmith      | SuperSecretPassword! |
| https://the-internet.herokuapp.com/login | test          | test                 |
