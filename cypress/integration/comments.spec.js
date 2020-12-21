import {gallery} from '../Models/galleryPageModel'
import {login} from '../Models/loginPageModel'
import {main} from '../Models/mainPageModel'

    

describe('comment tests', () => {

    it('Login', () => {
        main.visitMainPage()
        main.clickLoginButton()
        login.loginUser('something423423@gmail.com', '12345678')
    })


    it('post comment', () => {
        main.clickFirstGallery()
        cy.get('textarea').should('be.visible')
        gallery.fillTextField('Cy comment')
        gallery.clickSubmitButton()
    })

    it('Delete comment', () => {
        gallery.clickDeleteComment()
    })
})