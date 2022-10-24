import page from "./page"

const tryTheDemoAppButt = '[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]'
const nameField = '[name="unique_name"]'
const submiteButt = '[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]'
const messageLoc = '[class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]'
const trashBinButt = '[class*="trash fa-fw"]'
const deleteButt = '[class*="25bAfo"]'


class LeftMenuPage {
    async clickTryTheDemoButt() {
        await page.clickClicableElement(tryTheDemoAppButt)
    }
    async typeNameField(value) {
        await page.typeElement(nameField, value)
    }
    async clickSubmiteButt() {
        await page.clickElement(submiteButt)
    }
    async isMessagehaveText(text) {
        await page.elementToHaveText(messageLoc, text)
    }
    async clickTrashBinButt() {
        await page.clickElement(trashBinButt)
    }
    async clickDeleteButt() {
        await page.clickClicableElement(deleteButt)
    }


}
export default new LeftMenuPage