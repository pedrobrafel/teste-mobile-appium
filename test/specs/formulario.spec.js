const formulario = require("../screens/formulario.screen.js");

describe('Formulario - Webdriver io', () => {
    it('Deve acessar o formulario', async () => {
        await formulario.acessaFormulario()
    });

    it('Deve preencher e interagir com o formulario', async () => {
        await formulario.addDados()

        expect(await formulario.tituloVisivel()).toBeTruthy()
        expect(await formulario.validateTitle()).toEqual('Form components')
    });
});