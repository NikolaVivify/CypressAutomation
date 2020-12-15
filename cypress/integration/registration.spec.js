describe('Registration testovi', () => {
    it('Poseti stranicu', () => {
        cy.visit('https://gallery-app.vivifyideas.com/register')
        cy.get('#first-name').type('ime')
        cy.get('#last-name').type('prezime')
        cy.get('#email').type('something423423@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').check()
        cy.get('.btn').click()
    })
})