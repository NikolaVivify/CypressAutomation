class loginModel 
{
//Getters

    email()
    {
        return cy.get('#email')
    }

    password()
    {
        return cy.get('#password')
    }

    submit() 
    {
        return cy.get('div:nth-child(2) div.container:nth-child(2) div:nth-child(1) form:nth-child(2) > button.btn.btn-custom:nth-child(3)')
    }


//Actions

    loginButtonClick () 
    {
        this.loginButton().click()
    }

    fillEmail (text)
    {
        this.email().type(text)
    }

    fillPassword (text)
    {
        this.password().type(text)
    }

    clickSubmit()
    {
        this.submit().click()
    }

    loginUser(email, password)
    {
        this.fillEmail(email)
        this.fillPassword(password)
        this.clickSubmit()
    }
}

export default loginModel