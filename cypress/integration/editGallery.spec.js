import GalleryPage from '../Models/galleryPageModel'
import loginModel from '../Models/loginPageModel'
import MainPage from '../Models/mainPageModel'
import createGallery from '../Models/createGalleryPageModel'


describe('edit functionality', () => {
    
    const login = new loginModel();
    const gallery = new GalleryPage();
    const main = new MainPage();
    const create = new createGallery();
    

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

    it('Edit gallery', () => {
        main.clickFirstGallery()
        gallery.clickEditGallery()
    })
})