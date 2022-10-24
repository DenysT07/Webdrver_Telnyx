import page from "./page"

const platformStatusButt = '[class="tx-1pz1KC"]>section>div>a'
const title = '[class="status font-large"]'
const plusButton = '[class*="tx-2sQL9h"]'
const promoField = '[name="promocode"]'
const addButt = '[class="ml-2"]>[class*=" QRlWQ"]'
const errorMessege = '[class*=" ilxvtf"]'
const cardButt = '[class*="2qNoRn"]'
const numbersAmountField = '#react-select-2-option-1'
const DropDownArrow = '[class="css-19bqh2r"]'
const addSimToCardButt = '[class*="kaagSE"]>button'
const compliteMessege = '[class*="ijTSPa"]' 

class HeadersPage {
    async clickPlatformStatusButt() {
        await page.clickElement(platformStatusButt)
    }
    async isTitleHaveText(text) {
        await page.elementToHaveText(title, text)
    }
    async clickPlusButt() {
        await page.clickElement(plusButton)
    }
    async promoFieldType (value) {
        await page.typeElement(promoField, value)
    }
    async clickAddButt () {
        await page.clickElement(addButt)
    }
    async isErrorMessegeHaveText(text) {
        await page.elementToHaveText(errorMessege, text)
    }
    async clickCardButt() {
        await page.clickElement(cardButt)
    }
    async clickDropDownArrow() {
        await page.clickElement(DropDownArrow)
    }
    async chooseSimAmount() {
        await page.clickElement(numbersAmountField)
    }
    async clickAddSimToCardButt() {
        await page.clickElement(addSimToCardButt)
    }
    async isMessegeHaveText(text) {
        await page.elementToHaveText(compliteMessege, text)
    }
}
export default new HeadersPage