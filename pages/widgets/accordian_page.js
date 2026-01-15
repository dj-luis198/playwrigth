class AccordianPage {
    constructor(page) {
        this.page = page;
        this.section1 = page.locator('#section1Heading');
        this.section1Content = page.locator('#section1Content');
        this.section2 = page.locator('#section2Heading');
        this.section2Content = page.locator('#section2Content');
        this.section3 = page.locator('#section3Heading');
        this.section3Content = page.locator('#section3Content');
    }

    async navigate() {
        await this.page.goto('/accordian');
    }

    async clickSecction1() {
        await this.section1.click();
    }

    async secction1Content() {
        return await this.section1Content;
    }

    async clickSecction2() {
        await this.section2.click();
    }
    async secction2Content() {
        return await this.section2Content;
    }

    async clickSecction3() {
        await this.section3.click();
    }
    async secction3Content() {
        return await this.section3Content;
    }
}

export { AccordianPage }