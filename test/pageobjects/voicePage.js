import page from "./page"

const createYoureFirstProfileButt = '[class*="j ifHSFX"]'
const nameField = '[name="name"]'
const submiteButt = '[class*="QRlWQ"]'
const messageLoc = '[class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]'
const trashBinButt = '[class*="trash fa-fw"]'
const deleteButt = '[class*="x-25bAfo"]'
const createYoureFirstAppButt = '[class*=" ifHSFX"]'
const appNameField = '[name="application_name"]'
const urlField = '[name="webhook_event_url"]'
const saveButt = '[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]'



class VoicePage {
    async clickCreateYoureFirstProfileButt() {
        await page.clickClicableElement(createYoureFirstProfileButt)
    }
    async typeNameField(value) {
        await page.typeElement(nameField, value)
    }
    async clickSubmiteButt() {
        await page.clickElement(submiteButt)
    }
    async isMessageHaveText(text) {
        await page.elementToHaveText(messageLoc, text)
    }

    async clickTrashBinButt() {
        await page.clickClicableElement(trashBinButt)
    }
    async clickDeleteButt() {
        await page.clickElement(deleteButt)
    }

    async clickCreateYoureFirstAppButt() {
        await page.clickElement(createYoureFirstAppButt)
    }
    async typeAppNameField(value) {
        await page.typeElement(appNameField, value)
    }
    async typeUrlField(value) {
        await page.typeElement(urlField, value)
    }
    async clickSaveButt() {
        await page.clickElement(saveButt)
    }
}
export default new VoicePage