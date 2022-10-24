import page from "./page"

const popUpWindowButt = '[class*="launcher-icon-open"]'
const statusButt = '.intercom-1c8rdjc.ebvwrrs3'
const statusLoc = '[class="whitespace-pre-wrap actual-title with-ellipsis"]'
const sarchField = '[class*="epcpgzs2"]'
const secSearchField = '[aria-label="Search for help"]'
const firstSearchResult = '[class="intercom-b8kzem ev7qqra0"]>div:nth-child(1)>div>p'
const entryTitle = '[class*=" eltcq8z0"]'

class PopUpWindowPage {
    async clickPopUpWindowButt() {
        await page.clickElement(popUpWindowButt)
    }
    async typeNameField(value) {
        await page.typeElement(nameField, value)
    }
    async clickStatusButt() {
        await page.clickElement(statusButt)
    }
    async isStatusHaveText(text) {
        await page.elementToHaveText(statusLoc, text)
    }

   
    get mainFrame() {
        return $("[name='intercom-messenger-frame']");
    }
    async switchMainFrame () {
        await this.mainFrame.waitForExist({ timeout: 3000 });
        await browser.switchToFrame(await this.mainFrame); 
    }  

    get firstFrame() {
        return $("[name='intercom-messenger-sheet-proxy']");
    }
    async switchFirstFrame () {
        await this.firstFrame.waitForExist({ timeout: 3000 });
        await browser.switchToFrame(await this.firstFrame); 
    }  

    get secFrame() {
        return $("[id='intercom-messenger-sheet']");
    }
    async switchSecFrame () {
        await this.secFrame.waitForExist({ timeout: 3000 });
        await browser.switchToFrame(await this.secFrame); 
    }  

    async clickSarchField() {
        await page.clickElement(sarchField)
    }
    async typeSearchField(value) {
        await page.typeElement(secSearchField, value)
    }
    async clickFirstSearchResult() {
        await page.clickElement(firstSearchResult)
    }
    async isEntryTitleHaveText(text) {
        await page.elementToHaveText(entryTitle, text)
    }
}
export default new PopUpWindowPage