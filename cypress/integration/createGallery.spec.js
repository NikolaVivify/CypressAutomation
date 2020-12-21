import {gallery} from '../Models/galleryPageModel'
import {login} from '../Models/loginPageModel'
import {main} from '../Models/mainPageModel'
import {create} from '../Models/createGalleryPageModel'


describe('Kreiranje galerije test', () =>{


   it('Login', () => {
        main.visitMainPage()
        main.clickLoginButton()
        login.loginUser('something423423@gmail.com', '12345678')
    })

    it('Kreiranje galerije', () => {
        main.clickCreateGallery()
        create.createGallery('Cy gallery', 'Cy test', 'https://www.hollandamerica.com/content/dam/hal/marketing-assets/home-page/special-offers/greece-santorini-blue-domes-C031.jpg.image.1008.754.low.jpg')
        cy.get('.title-style').should('be.visible').and('have.text', "All Galleries")
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

    
    it('Brisanje galerije', () => {
        cy.get('.btn').should('have.length', 3)
        gallery.clickDeleteGallery()
    })
})