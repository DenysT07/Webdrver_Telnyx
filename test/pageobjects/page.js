class Page {
    async getElement(element) {
        return await $(element)
    }
    async waitForElemDisplayed(element) {
        return await (await this.getElement(element)).waitForDisplayed({timeout: 30000})
    }
    async waitForElemClickable(element) {
        return await (await this.getElement(element)).waitForClickable({timeout: 30000})
    }
    async clickElement(element) {
        await this.waitForElemDisplayed(element)
        await (await this.getElement(element)).click()
    }
    async clickClicableElement(element) {
        await this.waitForElemClickable(element)
        await (await this.getElement(element)).click()
    }
    async typeElement(element, value) {
        await this.waitForElemDisplayed(element)
        await (await this.getElement(element)).addValue(value)
    }
    async elementToHaveText (element, text) {
        await this.waitForElemDisplayed(element)
        await expect(await this.getElement(element)).toHaveText(text)
    }
}
export default new Page