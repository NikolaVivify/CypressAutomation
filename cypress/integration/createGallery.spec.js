

describe('Kreiranje galerije test', () =>{


   it('Login', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('a[href="/login"]').click()
        cy.get('#email').type('something423423@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('button').click()
    })

    it('Kreiranje galerije', () => {
        cy.get('a[href="/create"]').click()
        cy.get('#title').type('Cy gallery')
        cy.get('#description').type('Cy test')
        cy.get('.form-control').eq(2).type('https://www.hollandamerica.com/content/dam/hal/marketing-assets/home-page/special-offers/greece-santorini-blue-domes-C031.jpg.image.1008.754.low.jpg')
        cy.get('.btn').eq(0).click()
        cy.get('.title-style').should('be.visible').and('have.text', "All Galleries")
    })

    
    it('Brisanje galerije', () => {
        cy.get('.box-title').eq(0).click()
        cy.get('.btn').should('have.length', 3)
        cy.get('.btn').eq(0).click()
        
    })
})