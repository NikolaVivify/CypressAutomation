///<reference types="Cypress"/>
const Locators = require('../fixtures/Locators.json')
const faker = require('faker')

let userData = {
    randomName : faker.name.findName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}


describe('Improved Login', () => {
    
    beforeEach("Visit gallery app", () => {
        cy.visit('/')
        cy.url().should("contains", "https://gallery-app")
    })

    
    let correctEmail = "something423423@gmail.com"

    it('Login with valid user', () => {
        //cy.visit('/')
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('12345678')
        cy.get(Locators.Login.Submit).click()
    })

    it('logout', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('12345678')
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Header.Logout).click()
    })


    it.only('login with faker - invalid credentials', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(userData.randomEmail)
        cy.get(Locators.Login.Password).type(userData.randomPassword)
        cy.get(Locators.Login.Submit).click()
    })
})