import page from "./page"

const createVerifyProfilButt = '[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]'
const profilNameField = '[name="name"]'
const createButt = '[data-testid*="submit"]'
const messageLoc = '[class="Message__MessageContent-sc-1lbs5ge-1 ijTSPa"]'
const trashBinButt = '[class*="trash fa-fw"]'
const deleteButt = '[class*="-tx-25bAfo"]'
const headerText = '[class*="juXwaZ"]'

class IdentityPage {
    async clickCreateVerifyProfilButt() {
        await page.clickElement(createVerifyProfilButt)
    }
    async typeProfilNameField(value) {
        await page.typeElement(profilNameField, value)
    }
    async clickCreateButt() {
        await page.clickElement(createButt)
    }
    async isMessageHaveText(text) {
        await page.elementToHaveText(messageLoc, text)
    }

    async clickTrashBinButt() {
        await page.clickElement(trashBinButt)
    }
    async clickDeleteButt() {
        await page.clickElement(deleteButt)
    }
    async isHeaderTextHaveText(text) {
        await page.elementToHaveText(headerText, text)
    }
}
export default new IdentityPage