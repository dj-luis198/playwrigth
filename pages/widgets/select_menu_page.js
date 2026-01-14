class SelectMenuPage {
    constructor(page) {
        this.page = page;
        this.selectOptions = page.locator('div').filter({ hasText: /^Select Option$/ }).nth(4);
        this.optGroupOption = page.locator('div[class*="singleValue"]');
        this.selectTitle = page.locator('div').filter({ hasText: /^Select Title$/ }).nth(4);
        this.oldSelectMenu = page.locator('#oldSelectMenu');
        this.multiSelectDropDown = page.locator('div').filter({ hasText: /^Select\.\.\.$/ }).nth(2);
        this.multiValueOptiosSelects = page.locator('div[class*="multiValue"]');
        this.standardMultiSelect = page.locator('#cars');
    }

    async navigate() {
        await this.page.goto('/select-menu');
    }

    async selectOption(option) {
        await this.selectOptions.click();
        const optionLocator = this.page.getByText(option, { exact: true });
        await optionLocator.click();
    }

    async getSelectedOptionText() {
        return await this.optGroupOption.textContent();
    }

    async selectTitleOption(title) {
        await this.selectTitle.click();
        const titleLocator = this.page.getByText(title, { exact: true });
        await titleLocator.click();
    }

    async getSelectedTitleText() {
        return await this.optGroupOption.textContent();
    }

    async selectOldMenuOption(option) {
        await this.oldSelectMenu.click();
        await this.oldSelectMenu.selectOption(option);
        await this.oldSelectMenu.press('Escape');
    }

    async getOptionChecked() {
        return await this.oldSelectMenu.locator('option:checked');
    }

    async generateOptions(options) {
        const shuffled = options
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort).map(({ value }) => value); 
            // Elegir cuántas opciones quieres (ejemplo: 2 al azar) 
            const randomCount = Math.floor(Math.random() * options.length) + 1; 
            return shuffled.slice(0, randomCount);
    }


    async selectMultiOptions(options) {
        await this.multiSelectDropDown.click();
        //const optionLocator = await this.page.locator('div[class*="css-26l3qy-menu"]').innerHTML();
        //console.log(optionLocator);
        for (const option of options) {
            switch (option) {
                case 'Green':
                    await this.page.locator('#react-select-4-option-0').click();
                    break;
                case 'Blue':
                    await this.page.locator('#react-select-4-option-1').click();
                    break;
                case 'Black':
                    await this.page.locator('#react-select-4-option-2').click();
                    break;
                case 'Red':
                    await this.page.locator('#react-select-4-option-3').click();
                    break;

                default:
                    break;
            }
        }
        await this.page.keyboard.press('Escape');
    }

    async getTextOptionsSelected() {
        return await this.page.locator('.css-1rhbuit-multiValue .css-12jo7m5').allTextContents();
    }




    async selectStandardMultiOptions(option) {
        await this.standardMultiSelect.selectOption(option);
    }
}

module.exports = { SelectMenuPage };