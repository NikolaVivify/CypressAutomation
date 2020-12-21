const Locators = require('../fixtures/Locators.json')
const faker = require('faker')

const userData = {
    randomName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()

}

describe('Improved Registration', () => {
    
    it('Register a valid user', () => {
        cy.visit('/')
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Registration.FirstName).type(userData.randomName)
        cy.get(Locators.Registration.LastName).type(userData.randomLastName)
        cy.get(Locators.Registration.Email).type(userData.randomEmail)
        cy.get(Locators.Registration.Password).type(userData.randomPassword+'1')
        cy.get(Locators.Registration.ConfirmPassword).type(userData.randomPassword+'1')
        cy.get(Locators.Registration.Checkbox).check()
        cy.get(Locators.Registration.Submit).click()
    })
})