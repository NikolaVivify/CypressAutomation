class registrationModel 
{
//Getters

    visitRegistrationPage()
    {
        return cy.visit('/register')
    }

    firstName()
    {
        return cy.get('#first-name')
    }

    lastName()
    {
        return cy.get('#last-name')
    }

    email()
    {
        return cy.get('#email')
    }

    password()
    {
        return cy.get('#password')
    }

    confirmPassword()
    {
        return cy.get('#password-confirmation')
    }

    checkbox()
    {
        return cy.get('div.container:nth-child(2) div:nth-child(1) form:nth-child(2) div.form-group:nth-child(6) > input.form-check-input')
    }

    submitButton()
    {
        return cy.get('div:nth-child(2) div.container:nth-child(2) div:nth-child(1) form:nth-child(2) > button.btn.btn-custom:nth-child(7)')
    }

//Actions

    fillFirstName(text)
    {
        this.firstName().type(text)
    }

    fillLastName(text)
    {
        this.lastName().type(text)
    }

    fillEmail(text)
    {
        this.email().type(text)
    }

    fillPassword(text)
    {
        this.password().type(text)
    }

    fillConfirmPassword(text)
    {
        this.confirmPassword().type(text)
    }

    checkboxConfirm()
    {
        this.checkbox().check()
    }

    clickSubmitButton()
    {
        this.submitButton().click()
    }


    registerUser(ime,prezime,email,pass,confirm)
    {
        this.fillFirstName(ime)
        this.fillLastName(prezime)
        this.fillEmail(email)
        this.fillPassword(pass)
        this.fillConfirmPassword(confirm)
        this.checkboxConfirm()
        this.clickSubmitButton()
    }
}

export default registrationModel