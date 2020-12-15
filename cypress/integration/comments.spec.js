describe('comment tests', () => {

    it('Login', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('a[href="/login"]').click()
        cy.get('#email').type('something423423@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('button').click()
    })


    it('post comment', () => {
        cy.get('.box-title').eq(0).click()
        cy.get('textarea').should('be.visible')
        cy.get('textarea').type('Cy comment')
        cy.get('button[type="submit"]').click()
    })

    it('Delete comment', () => {
        cy.get('.fas').click()
    })
})