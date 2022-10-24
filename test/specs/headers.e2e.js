// const { creds } = require("../../cred/credetials");
// const { default: helper } = require("../../helper/helper");
// const { default: beforeTestPage } = require("../pageobjects/beforeTestPage")
// const { default: headenrsPage } = require("../pageobjects/headenrsPage")


// before('', async () => {
//     await browser.url('/');
//     await beforeTestPage.login(creds.userName, creds.password);
// })
// describe('Header buttons', () => {
//     it('Check "Card" button', async () => {
//         await headenrsPage.clickCardButt()
//         await headenrsPage.clickDropDownArrow()
//         browser.keys("Enter");
//         // await headenrsPage.chooseSimAmount()
//         await headenrsPage.clickAddSimToCardButt()
//         await headenrsPage.isMessegeHaveText('Added 1 SIM to your cart.')
//     })
//     it("Check 'Platform Status' button", async () => {
//         await headenrsPage.clickPlatformStatusButt();
//         await browser.switchWindow('status.telnyx.com');
//         await headenrsPage.isTitleHaveText('All Systems Operational')
//         await browser.switchWindow('portal.telnyx.com')
//     })
//     it('Check Promo code field', async () => {
//         await headenrsPage.clickPlusButt()
//         await headenrsPage.promoFieldType('helper.randomString1')
//         await headenrsPage.clickAddButt()
//         await headenrsPage.isErrorMessegeHaveText('Sorry, we couldn\'t find that promotional code. Please check and try again.')
//     })
    
// })
