# Test info

- Name: First Playwright test
- Location: /Users/rrajivkumar/PlayWrightAutomation/tests/UIBasicstest.spec.js:6:1

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('a.button')
    - locator resolved to <a href="/logout" class="button secondary radius">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

    at UIBasicPage.logout (/Users/rrajivkumar/PlayWrightAutomation/PageObjects/UIBasicPage.js:23:33)
```

# Page snapshot

```yaml
- navigation:
  - link "ProtoCommerce":
    - /url: "#"
  - list:
    - listitem:
      - link "Home":
        - /url: /angularpractice
    - listitem:
      - link "Shop":
        - /url: /angularpractice/shop
- navigation:
  - link "ProtoCommerce Home":
    - /url: "#"
  - list:
    - listitem: Checkout ( 0 ) (current)
- heading "Shop Name" [level=1]
- link "Category 1":
  - /url: "#"
- link "Category 2":
  - /url: "#"
- link "Category 3":
  - /url: "#"
- list:
  - listitem
  - listitem
  - listitem
- listbox:
  - img "Third slide"
- button "Previous"
- button "Next"
- link:
  - /url: "#"
- heading "iphone X" [level=4]:
  - link "iphone X":
    - /url: "#"
- heading "$24.99" [level=5]
- paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
- button "Add "
- text: ★ ★ ★ ★ ☆
- link:
  - /url: "#"
- heading "Samsung Note 8" [level=4]:
  - link "Samsung Note 8":
    - /url: "#"
- heading "$24.99" [level=5]
- paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
- button "Add "
- text: ★ ★ ★ ★ ☆
- link:
  - /url: "#"
- heading "Nokia Edge" [level=4]:
  - link "Nokia Edge":
    - /url: "#"
- heading "$24.99" [level=5]
- paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
- button "Add "
- text: ★ ★ ★ ★ ☆
- link:
  - /url: "#"
- heading "Blackberry" [level=4]:
  - link "Blackberry":
    - /url: "#"
- heading "$24.99" [level=5]
- paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
- button "Add "
- text: ★ ★ ★ ★ ☆
- contentinfo:
  - paragraph: Copyright © ProtoCommerce 2018
```

# Test source

```ts
   1 | class UIBasicPage {
   2 |
   3 |     constructor(page) {
   4 |
   5 |
   6 |         this.page = page;
   7 |         this.username = page.locator('#username');
   8 |         this.password = page.locator('#password');
   9 |         this.signInButton = page.locator('.radius');
  10 |         this.logoutButton = page.locator('a.button');
  11 |     }
  12 |     async goToUrl(url) {
  13 |         await this.page.goto(url);
  14 |
  15 |     }
  16 |     async validlogin(username, password) {
  17 |         await this.username.fill(username);
  18 |         await this.password.fill(password);
  19 |         await this.signInButton.click();
  20 |     }
  21 |     async logout() {
  22 |         await this.logoutButton.waitFor({ state: 'visible' }); // Ensures element is ready
> 23 |         await this.logoutButton.click();
     |                                 ^ Error: locator.click: Test ended.
  24 |     }
  25 | }
  26 | module.exports = { UIBasicPage };
  27 |
```