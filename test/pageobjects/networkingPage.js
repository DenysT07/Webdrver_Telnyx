import page from "./page"
const createNetworkButt = '[class*="j ifHSFX"]'
const nameField = '[name="name"]'
const messageLoc = '[class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]'
const createButt = '[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]'
const trashBinButt = '[class*="trash fa-fw"]'
const deleteButt = '[class*="iBHKFV"]'
const deleteMessageLoc = '[class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]'

class NetworkingPage {
    async clickCreateNetworkButt() {
        await page.clickElement(createNetworkButt)
    }
    async typeNameField(value) {
        await page.typeElement(nameField, value)
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
    async isDeleteHaveText(text) {
        await page.elementToHaveText(deleteMessageLoc, text)
    }


}
export default new NetworkingPage