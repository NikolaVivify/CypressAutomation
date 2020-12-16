class MainPage 
{
    visitMainPage()
    {
        return cy.visit('/')
    }

    allGaleriesButton()
    {
        return cy.get('nav.navbar.navbar-expand.navbar.navbar-light.navbar-styling div.collapse.navbar-collapse.container ul.navbar-nav.mr-auto.mt-2.mt-lg-0:nth-child(2) li.nav-item:nth-child(1) > a.nav-link.nav-buttons.router-link-exact-active.router-link-active')
    }

    loginButton() 
    {
        return cy.get('nav.navbar.navbar-expand.navbar.navbar-light.navbar-styling div.collapse.navbar-collapse.container ul.navbar-nav.ml-auto.mt-2.mt-lg-0:nth-child(3) li.nav-item:nth-child(1) > a.nav-link.nav-buttons')
    }

    registerButton()
    {
        return cy.get('nav.navbar.navbar-expand.navbar.navbar-light.navbar-styling div.collapse.navbar-collapse.container ul.navbar-nav.ml-auto.mt-2.mt-lg-0:nth-child(3) li.nav-item:nth-child(2) > a.nav-link.nav-buttons')
    }

    myGalleriesButton()
    {
        return cy.get('nav.navbar.navbar-expand.navbar.navbar-light.navbar-styling div.collapse.navbar-collapse.container ul.navbar-nav.mr-auto.mt-2.mt-lg-0:nth-child(2) li.nav-item:nth-child(2) > a.nav-link.nav-buttons')
    }

    createGalleryButton()
    {
        return cy.get('nav.navbar.navbar-expand.navbar.navbar-light.navbar-styling div.collapse.navbar-collapse.container ul.navbar-nav.mr-auto.mt-2.mt-lg-0:nth-child(2) li.nav-item:nth-child(3) > a.nav-link.nav-buttons')
    }

    logoutButton()
    {
        return cy.get('nav.navbar.navbar-expand.navbar.navbar-light.navbar-styling div.collapse.navbar-collapse.container ul.navbar-nav.ml-auto.mt-2.mt-lg-0:nth-child(3) li.nav-item:nth-child(3) > a.nav-link.nav-buttons')
    }

    firstGallery()
    {
        return cy.get('div.container:nth-child(2) div.container:nth-child(1) div.grid div.cell:nth-child(1) h2:nth-child(1) > a.box-title')
    }

//Actions

    clickAllGalleriesButton()
    {
        this.allGaleries().click
    }

    clickLoginButton()
    {
        this.loginButton().click()
    }

    clickRegisterButton()
    {
        this.registerButton().click()
    }

    clickMyGalleriesButton()
    {
        this.myGalleriesButton().click()
    }

    clickCreateGallery()
    {
        this.createGalleryButton().click()
    }

    clickLogoutButton()
    {
        this.logoutButton().click()
    }

    clickFirstGallery()
    {
        this.firstGallery().click()
    }
}
export default MainPage