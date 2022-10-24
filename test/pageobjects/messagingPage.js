import page from "./page"
const searchYourFreeNumberButt = '[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]'
const claimYourNumberButt = '[class*="iBcEMa"] li:nth-child(2) div>div>button'
const errorMessage = '[class*="lbs5ge-2 ilxvtf"]'
const createYoureFirstProfileButt = '[class*="1n4VDd"]'
const profileNameField = '[name="name"]'
const saveButt = '[class="mr-2"]'
const profileLoc = '[class="tx-2jo5gH tx-2tY6qe tx-FwKkh"]'
const createNewOrderButt = '[class*="kgCFcR"]'
const orderNhoneNumberField = '[name="numbers"]'
const dropDownArrow = '[class="css-19bqh2r"]'
const profileInDropDown = '#react-select-7-option-0'
const createOrder = '[class="Button__StyledDefaultButton-sc-44gl5i-0 kgCFcR"]'
const ordersButt = '[data-testid*="orders"]'
const phoneNumberLoc = '[class="tx-FzfH5"]>tbody>tr:nth-child(1)>td:nth-child(2)'
const pancileButt = '[class="tx-FzfH5"]>tbody>tr:nth-child(1)>td>button'
const trashBinButt = '[class*="-jiGObN eoxzgz"]'
const deleteButt = '[class*="25bAfo"]'
const confirmMessage = '[class="Message__MessageContent-sc-1lbs5ge-1 ijTSPa"]'
const profilTrashBin = '[class="tx-Z2cdXrc"]'
const confirmTitle = '[class="tx-Z1bQ1vM"]' 
const addNewProf = '[data-testid="add-messaging-profile-button"]'

class MessaginPage {
    async clickAddNewProfButt() {
        await page.clickClicableElement(addNewProf)
    }
    async clickSearchYourFreeNumberButt() {
        await page.clickClicableElement(searchYourFreeNumberButt)
    }
    async clickClaimYourNumberButt() {
        await page.clickClicableElement(claimYourNumberButt)
    }
    async isErrorMessageHaveText(text) {
        await page.elementToHaveText(errorMessage, text)
    }
    async clickCreateYoureFirstProfileButt() {
        await page.clickClicableElement(createYoureFirstProfileButt)
    }
    async typeProfileNameField(text) {
        await page.typeElement(profileNameField, text)
    }
    async clickSaveButt() {
        await page.clickClicableElement(saveButt)
    }
    async isProfileLocHaveText(text) {
        await page.elementToHaveText(profileLoc, text)
    }
    async clickCreateNewOrderButt() {
        await page.clickClicableElement(createNewOrderButt)
    }
    async typeOrderNhoneNumberField(value) {
        await page.typeElement(orderNhoneNumberField, value)
    }
    async clickDropDownArrow() {
        await page.clickClicableElement(dropDownArrow)
    }
    async clickProfileInDropDown() {
        await page.clickClicableElement(profileInDropDown)
    }
    async clickCreateOrder() { 
        await page.clickClicableElement(createOrder)
    }
    async clickOrdersButt() {
        await page.clickClicableElement(ordersButt)
    }
    async isPhoneNumberHaveText(text) {
        await page.elementToHaveText(phoneNumberLoc, text)
    }
    async clickPancileButt() {
        await page.clickClicableElement(pancileButt)
    }
    async clickTrashBinButt() {
        await page.clickClicableElement(trashBinButt)
    }
    async clickDeleteButt() {
        await page.clickClicableElement(deleteButt)
    }
    async isConfirmMessageHaveText(text) {
        await page.elementToHaveText(confirmMessage, text)
    }
    async clickProfilTrashBin() {
        await page.clickClicableElement(profilTrashBin)
    }
    async isConfirmTitleHaveText(text) {
        await page.elementToHaveText(confirmTitle, text)
    }
}
export default new MessaginPage