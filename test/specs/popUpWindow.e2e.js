const { default: popUpWindowPage } = require("../pageobjects/popUpWindowPage");
const { default: beforeTestPage } = require("../pageobjects/beforeTestPage")
const { creds } = require("../../cred/credetials");

before('login', async () => {
    await browser.url('/');
    await beforeTestPage.login(creds.userName, creds.password);
});
beforeEach('reopen page', async () => {
    await browser.pause(2000)
});
afterEach('reopen page', async () => {
    await browser.url('/');
});


describe("iFrame", () => {
    it("Ceck status on the pop-up window", async () => {
        await popUpWindowPage.clickPopUpWindowButt()
        await popUpWindowPage.switchMainFrame()
        await popUpWindowPage.clickStatusButt()
        await popUpWindowPage.switchFirstFrame()
        await popUpWindowPage.switchSecFrame()
        await popUpWindowPage.isStatusHaveText('All Systems Operational')
    });
    it("Check search field on the pop-up window", async () => {
        await popUpWindowPage.clickPopUpWindowButt()
        await popUpWindowPage.switchMainFrame()
        await popUpWindowPage.clickSarchField()
        await popUpWindowPage.typeSearchField('API')
        await popUpWindowPage.clickFirstSearchResult()
        await popUpWindowPage.isEntryTitleHaveText('API Keys and How to Use Them')
    });
});
