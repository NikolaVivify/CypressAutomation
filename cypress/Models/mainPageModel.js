class MainPage 
{
    visitMainPage()
    {
        return cy.visit('/')
    }

    get allGaleriesButton()
    {
        return cy.get('a[href="/"]').and('have.text', "All Galleries")
    }

    get loginButton() 
    {
        return cy.get('a[href="/login"]')
    }

    get registerButton()
    {
        return cy.get('a[href="/register"]')
    }

    get myGalleriesButton()
    {
        return cy.get('a[href="/my-galleries"]')
    }

    get createGalleryButton()
    {
        return cy.get('a[href="/create"]')
    }

    get logoutButton()
    {
        return cy.get('a[role="button "]')
    }

    get firstGallery()
    {
        return cy.get('.box-title').eq(0)
    }

//Actions

    clickAllGalleriesButton()
    {
        this.allGaleries.click
    }

    clickLoginButton()
    {
        this.loginButton.click()
    }

    clickRegisterButton()
    {
        this.registerButton.click()
    }

    clickMyGalleriesButton()
    {
        this.myGalleriesButton.click()
    }

    clickCreateGallery()
    {
        this.createGalleryButton.click()
    }

    clickLogoutButton()
    {
        this.logoutButton.click()
    }

    clickFirstGallery()
    {
        this.firstGallery.click()
    }
}
export const main = new MainPage()