class registrationModel 
{
//Getters

    get visitRegistrationPage()
    {
        return cy.visit('/register')
    }

    get firstName()
    {
        return cy.get('#first-name')
    }

    get lastName()
    {
        return cy.get('#last-name')
    }

    get email()
    {
        return cy.get('#email')
    }

    get password()
    {
        return cy.get('#password')
    }

    get confirmPassword()
    {
        return cy.get('#password-confirmation')
    }

    get checkbox()
    {
        return cy.get('input[type="checkbox"]')
    }

    get submitButton()
    {
        return cy.get('button[type="submit"]')
    }

//Actions

    fillFirstName(text)
    {
        this.firstName.type(text)
    }

    fillLastName(text)
    {
        this.lastName.type(text)
    }

    fillEmail(text)
    {
        this.email.type(text)
    }

    fillPassword(text)
    {
        this.password.type(text)
    }

    fillConfirmPassword(text)
    {
        this.confirmPassword.type(text)
    }

    checkboxConfirm()
    {
        this.checkbox.check()
    }

    clickSubmitButton()
    {
        this.submitButton.click()
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

export const registration = new registrationModel()