import LoginModel from './loginPageModel'
import MainPage from './mainPageModel'


const login = new LoginModel();
const main = new MainPage();

describe('Login testovi', () => {
    it('Posetiti stranicu', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it('Kliknuti na login', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
    })

    it('Login with valid credentials', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('a[href="/login"]').click()
        cy.get('#email').type('test123123@test.com')
        cy.get('#password').type('test123123')
        cy.get('button').click()
    })

    it.only('Logout', () => {
        main.visitMainPage()
        main.clickLoginButton()
        login.loginUser('test123123@test.com', 'test123123')
        cy.get('.nav-link').should('have.length', 4)
        main.clickLogoutButton()
    })

    

})