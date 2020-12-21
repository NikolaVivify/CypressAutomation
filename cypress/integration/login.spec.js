import {login} from '../Models//loginPageModel'
import {main} from '../Models//mainPageModel'



describe('Login testovi', () => {
   

    it('Login with valid credentials', () => {
        main.visitMainPage()
        main.clickLoginButton()
        login.loginUser('test123123@test.com', 'test123123')
        cy.get('.title-style').should('be.visible').and('have.text', "All Galleries")
    })

    it('Logout', () => {
        cy.get('.nav-link').should('have.length', 4)
        main.clickLogoutButton()
    })

    

})