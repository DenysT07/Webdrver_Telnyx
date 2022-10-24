import page from "./page";

const emailField = '[class*="fCOoik"] [name="email"]'
const passwordField = '[type="password"]'
const submiteLogInBut = '[class*="eazkBi"]'

class BeforeTestPage{
  
  
  async login(email, password) {
    await page.typeElement(emailField, email)
    await page.typeElement(passwordField, password)
    await page.clickClicableElement(submiteLogInBut)
  }

}

export default new BeforeTestPage();


