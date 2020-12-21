class loginModel 
{
//Getters

    get email()
    {
        return cy.get('#email')
    }

    get password()
    {
        return cy.get('#password')
    }

    get submit() 
    {
        return cy.get('button[type="submit"]')
    }


//Actions


    fillEmail (text)
    {
        this.email.type(text)
    }

    fillPassword (text)
    {
        this.password.type(text)
    }

    clickSubmit()
    {
        this.submit.click()
    }

    loginUser(email, password)
    {
        this.fillEmail(email)
        this.fillPassword(password)
        this.clickSubmit()
    }
}

export const login = new loginModel()