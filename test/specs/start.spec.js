describe('Formulario - Webdriver io', () => {
    it('Deve acessar e preencher o menu Forms', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Pedro teste')
        expect(await $('~text-input')).toBeDisplayed()

        await $('~switch').click()
        await $('~switch').waitForExist()
        expect(await $('~switch-text')).toHaveText('Click to turn the switch OFF')

        await $('~Dropdown').click()
        await $('resource-id').getValue('webdriver.io is awesome')
        expect(await $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText')).toHaveText('webdriver.io is awesome')

        await $('~button-Active').click()
        await $('~android:id/parentPanel').toBeDisplayed()
        await $('~android:id/button1').click()
        expect(await $('~android:id/parentPanel')).waitForExist({ reverse: true })
    });
});