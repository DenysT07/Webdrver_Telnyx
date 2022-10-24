const { default: popUpWindowPage } = require("../pageobjects/popUpWindowPage");
const { default: beforeTestPage } = require("../pageobjects/beforeTestPage")
const { creds } = require("../../cred/credetials");
const { default: identityPage } = require("../pageobjects/identityPage");
const { default: leftMenuPage } = require("../pageobjects/leftMenuPage");
const { default: messagingPage } = require("../pageobjects/messagingPage");
const { default: networkingPage } = require("../pageobjects/networkingPage");
const { default: videoPage } = require("../pageobjects/videoPage");
const { default: voicePage } = require("../pageobjects/voicePage");
const { default: helper } = require("../../helper/helper");
const { default: headenrsPage } = require("../pageobjects/headenrsPage")

before('login', async () => {
    await browser.url('/');
    await beforeTestPage.login(creds.userName, creds.password);
});
beforeEach('reopen page', async () => {
    await browser.pause(2000)
})
afterEach('reopen page', async () => {
            await browser.url('/');
        })

// const { creds } = require("../../cred/credetials");
// const { default: helper } = require("../../helper/helper");
// const { default: beforeTestPage } = require("../pageobjects/beforeTestPage")
// const { default: headenrsPage } = require("../pageobjects/headenrsPage")


// before('', async () => {
//     await browser.url('/');
//     await beforeTestPage.login(creds.userName, creds.password);
// })
// describe('Header buttons', () => {
//     // beforeEach('reopen page', async () => {
//     //     await browser.url('/');
//     // })
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
//         await headenrsPage.isTitleHaveText('Scheduled SIP Trunking Signaling Maintenance - EU Region')
//         await browser.switchWindow('portal.telnyx.com')
//     })
//     it('Check Promo code field', async () => {
//         await headenrsPage.clickPlusButt()
//         await headenrsPage.promoFieldType('helper.randomString1')
//         await headenrsPage.clickAddButt()
//         await headenrsPage.isErrorMessegeHaveText('Sorry, we couldn\'t find that promotional code. Please check and try again.')
//     })
    
// });

// const { default: helper } = require("../../helper/helper");
// const { default: beforeTestPage } = require("../pageobjects/beforeTestPage");
// const { default: identityPage } = require("../pageobjects/identityPage");
// const { default: leftMenuPage } = require("../pageobjects/leftMenuPage");
// const { default: messagingPage } = require("../pageobjects/messagingPage");
// const { default: networkingPage } = require("../pageobjects/networkingPage");
// const { default: videoPage } = require("../pageobjects/videoPage");
// const { default: voicePage } = require("../pageobjects/voicePage");
// const { creds } = require("../../cred/credetials");


// before('', async () => {
//     await browser.url('/');
//     await beforeTestPage.login(creds.userName, creds.password);
// })
describe('Messagin', () => {
    it("Check 'Learn & Build' page ", async () => {
        await leftMenuPage.clickHomeButt()
        await leftMenuPage.clickBuyPhonrNumberButt()
        await messagingPage.clickSearchYourFreeNumberButt()
        await messagingPage.clickClaimYourNumberButt()
        await messagingPage.isErrorMessageHaveText('You do not have enough funds to perform this action.')
    });
    it("Check 'Messaging Profiles' page", async () => {
        await leftMenuPage.clickMessaginBut()
        await leftMenuPage.clickProgrambleMessaginBut()
        await leftMenuPage.clickProgrambleMessaginBut()
        await messagingPage.clickAddNewProfButt()
        await messagingPage.typeProfileNameField(helper.randomString1);
        await browser.pause(2000);
        await messagingPage.clickSaveButt();
        browser.url('/');
        await leftMenuPage.clickMessaginBut()
        await leftMenuPage.clickProgrambleMessaginBut()
        await leftMenuPage.clickProgrambleMessaginBut()
        await messagingPage.isProfileLocHaveText(helper.randomString1)
    });
    it("Check 'Hosted SMS' page", async () => {
        await leftMenuPage.clickMessaginBut()
        await leftMenuPage.clickHostedSMSButt()
        await leftMenuPage.clickHostedSMSButt()
        await messagingPage.clickCreateNewOrderButt()
        await messagingPage.typeOrderNhoneNumberField('+1800' + helper.randomPhone)
        await messagingPage.clickDropDownArrow()
        browser.keys("Enter");
        await messagingPage.clickCreateOrder()
        await messagingPage.clickOrdersButt()
        await messagingPage.isPhoneNumberHaveText('+1800' + helper.randomPhone)
    })
    it("Delete ordered number from 'orders' page ", async () => {
        await leftMenuPage.clickMessaginBut()
        await leftMenuPage.clickHostedSMSButt()
        await leftMenuPage.clickHostedSMSButt()
        await messagingPage.clickOrdersButt()
        await messagingPage.clickPancileButt()
        await messagingPage.clickTrashBinButt()
        await messagingPage.clickDeleteButt()
        await messagingPage.isConfirmMessageHaveText(`Number +1800${helper.randomPhone} deleted from order`)
    })
    it("Delete Messaging Profiles from 'Messaging Profiles' page", async () => {
        await leftMenuPage.clickMessaginBut()
        await leftMenuPage.clickProgrambleMessaginBut()
        await leftMenuPage.clickProgrambleMessaginBut()
        await messagingPage.clickProfilTrashBin()
        await messagingPage.clickDeleteButt()
        // await messagingPage.isConfirmTitleHaveText('You currently have no Messaging Profiles set up.')
    })

});

describe("Networking", () => {
    it("Check 'networking' page ", async () => {
        await leftMenuPage.clickNetworkingButt()
        await leftMenuPage.clickNetworkingButt()
        await networkingPage.clickCreateNetworkButt()
        await networkingPage.typeNameField(helper.randomString1)
        await networkingPage.clickCreateButt()
        await networkingPage.isMessageHaveText('Network successfully created')
    });
    it("Delete network from 'networking' page ", async () => {
        await leftMenuPage.clickNetworkingButt()
        await leftMenuPage.clickNetworkingButt()
        await networkingPage.clickTrashBinButt()
        await networkingPage.clickDeleteButt()
        await networkingPage.isMessageHaveText(`Network '${helper.randomString1}' removed`)
    });
});

describe("Video", () => {
    it("Check 'Video' page", async () => {
        await leftMenuPage.clickVideoButt()
        await leftMenuPage.clickVideoButt()
        await videoPage.clickTryTheDemoButt()
        await videoPage.typeNameField(helper.randomString1)
        await videoPage.clickSubmiteButt()
        await videoPage.isMessagehaveText(`Created video room ${helper.randomString1} successfully.`)
    }); 
    it("Delete video room from 'Video' page", async () => {
        await leftMenuPage.clickVideoButt()
        await leftMenuPage.clickVideoButt()
        await videoPage.clickTrashBinButt()
        await videoPage.clickDeleteButt()
        await videoPage.isMessagehaveText(`${helper.randomString1} has been deleted`)
    });
});

describe("Identity", () => {
    it("Check 'Verify Profiles' page", async () => {
        await leftMenuPage.clickIdentityButt()
        await leftMenuPage.clickVerifyButt()
        await leftMenuPage.clickVerifyButt()
        await identityPage.clickCreateVerifyProfilButt()
        await identityPage.typeProfilNameField(helper.randomString1)
        await identityPage.clickCreateButt()
        await identityPage.isMessageHaveText('Verify Profile created successfully')
    }); 
    it("Delete Verified profile from  'Verify Profiles' page", async () => {
        await leftMenuPage.clickIdentityButt()
        await leftMenuPage.clickVerifyButt()
        await leftMenuPage.clickVerifyButt()
        await identityPage.clickTrashBinButt()
        await identityPage.clickDeleteButt()
        await identityPage.isHeaderTextHaveText('Create Your First Verify Profile')
    });
});

// describe("Voice", () => {
//     it("Check 'Outbound Voice Profiles' page", async () => {
//         await leftMenuPage.clickVoiceButt()
//         await leftMenuPage.clickOutboundVoiceProfilesButton()
//         await leftMenuPage.clickOutboundVoiceProfilesButton()
//         await voicePage.clickCreateYoureFirstProfileButt()
//         await voicePage.typeNameField(helper.randomString1)
//         await voicePage.clickSubmiteButt()
//         await voicePage.isMessageHaveText('Created Outbound Profile Successfully.')
//     }); 
//     it("Delete 'Outbound Voice Profile' on  'Outbound Voice Profiles' page", async () => {
//         await leftMenuPage.clickVoiceButt()
//         await leftMenuPage.clickOutboundVoiceProfilesButton()
//         await leftMenuPage.clickOutboundVoiceProfilesButton()
//         await voicePage.clickTrashBinButt()
//         await voicePage.clickDeleteButt()
//         await voicePage.isMessageHaveText(`Deleted Outbound Voice Profile: ${helper.randomString1}`)
//     });
//     it("Check 'Programmable Voice' page", async () => {
//         await leftMenuPage.clickVoiceButt()
//         await leftMenuPage.clickProgrambleVoiceButt()
//         await leftMenuPage.clickProgrambleVoiceButt()
//         await voicePage.clickCreateYoureFirstAppButt()
//         await voicePage.typeAppNameField(helper.randomString1)
//         await voicePage.typeUrlField(`https://${helper.randomString1}.com/`)
//         await voicePage.clickSaveButt()
//         await voicePage.isMessageHaveText('Created App Successfully.')
    
//     });
//     it("Delete Voice API Applications from 'Programmable Voice' page", async () => {
//         await leftMenuPage.clickVoiceButt()
//         await leftMenuPage.clickProgrambleVoiceButt()
//         await leftMenuPage.clickProgrambleVoiceButt()
//         await voicePage.clickTrashBinButt()
//         await voicePage.clickDeleteButt()
//         await voicePage.isMessageHaveText(`Deleted App: ${helper.randomString1}`)
//     });
    
// });

// describe("iFrame", () => {
//     it("Ceck status on the pop-up window", async () => {
//         await popUpWindowPage.clickPopUpWindowButt()
//         await popUpWindowPage.switchMainFrame()
//         await popUpWindowPage.clickStatusButt()
//         await popUpWindowPage.switchFirstFrame()
//         await popUpWindowPage.switchSecFrame()
//         await popUpWindowPage.isStatusHaveText('Scheduled SIP Trunking Signaling Maintenance - EU Region')
//     });
//     it("Check search field on the pop-up window", async () => {
//         await browser.url('/');
//         await popUpWindowPage.clickPopUpWindowButt()
//         await popUpWindowPage.switchMainFrame()
//         await popUpWindowPage.clickSarchField()
//         await popUpWindowPage.typeSearchField('API')
//         await popUpWindowPage.clickFirstSearchResult()
//         await popUpWindowPage.isEntryTitleHaveText('API Keys and How to Use Them')
//     });
// });
