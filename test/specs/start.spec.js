describe('Formulario - Webdriver io', () => {
    it('Deve acessar e preencher o menu Forms', async () => {
        await $('~Forms').click()
        await $('~text-input').waitForExist({timeout: 99999999})
        await $('~text-input').setValue('Texto teste')
        expect(await $('~text-input')).toBeDisplayed()

        await $('~switch').click()
        await $('~switch-text').waitForExist({timeout: 99999999})
        expect(await $('~switch-text')).toHaveText('Click to turn the switch OFF')

        // await $('~Dropdown').click()
        // await $('~android:id/text1').selectByIndex(1)
        // expect(await $('~android:id/text1')).toHaveText('webdriver.io is awesome')
        

        // await $('button-Active').click()
        // await $('android:id/parentPanel').waitForExist({timeout: 1000000})
        // await $('android:id/button1').click()

    }); 
});