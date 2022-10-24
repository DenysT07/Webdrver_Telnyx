import page from "./page"
const homeButt = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(1) a'
const buyPhoneNumberButt = '[class*="fMbAzJ"] button'
const messaginBut = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(3) button'
const programbleMessaginBut = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(3)>div>a:nth-child(1)'
const hostedSMSButt = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(3)>div>a:nth-child(5)'
const networkingButt = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(8) a'
const videoButt = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(6) a'
const identityButt = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(5)>button'
const verifyButt = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(5)>div>a:nth-child(1)'
const voiceButt = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(4)>button'
const programbleVoiceButt = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(4)>div>a:nth-child(1)'
const outboundVoiceProfilesButton = '[class="relative h-100"] nav section>ul:nth-child(2)>li:nth-child(4)>div>a:nth-child(3)'

class LeftMenuPage {
    async clickHomeButt() {
        await page.clickElement(homeButt)
    }
    async clickBuyPhonrNumberButt() {
        await page.clickElement(buyPhoneNumberButt)
    }
    async clickMessaginBut() {
        await page.clickElement(messaginBut)
    }
    async clickProgrambleMessaginBut() {
        await page.clickElement(programbleMessaginBut)
    }
    async clickHostedSMSButt() {
        await page.clickClicableElement(hostedSMSButt)
    }
    async clickNetworkingButt() {
        await page.clickElement(networkingButt)
    }
    async clickVideoButt() {
        await page.clickElement(videoButt)
    }

    async clickIdentityButt() {
        await page.clickElement(identityButt)
    }
    async clickVerifyButt() {
        await page.clickElement(verifyButt)
    }

    async clickVoiceButt() {
        await page.clickElement(voiceButt)
    }
    async clickProgrambleVoiceButt() {
        await page.clickElement(programbleVoiceButt)
    }
    async clickOutboundVoiceProfilesButton() {
        await page.clickClicableElement(outboundVoiceProfilesButton)
    }
}
export default new LeftMenuPage