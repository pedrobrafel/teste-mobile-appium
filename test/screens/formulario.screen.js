class FormScreen {

    get #formulario() {
        return $('~Forms')
    }

    get #textoInput() {
        return $('~text-input')
    }

    get #switch() {
        return $('id:switch')
    }

    get #dropwdown() {
        return $('android=new UiSelector().text("Select an item...")')
    }

    get #listaOpcoes() {
        return $('index:2')
    }

    get #button() {
        return $('android=new UiSelector().text("Active")')
    }

    get #tituloForms() {
        return $('android=new UiSelector().text("Form components)')
    }

    async acessaFormulario() {
        this.#formulario.click()
    }

    async addDados() {
        await this.#textoInput.setValue('Pedro Teste')
        await this.#switch.click()
        await this.#dropwdown.click()
        await this.#listaOpcoes.click()
        await this.#button.click()
    }

    async tituloVisivel() {
        await this.#tituloForms.waitForExist()
        return await this.#tituloForms.isDisplayed()
    }

    async validaTitulo() {
        return await this.#tituloForms.getText()
    } 
}

module.exports = new FormScreen()