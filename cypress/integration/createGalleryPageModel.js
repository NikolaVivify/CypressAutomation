class createGallery
{
    title()
    {
        return cy.get('#title')
    }

    description()
    {
        return cy.get('#description')
    }

    imageUrl()
    {
        return cy.get('div.container:nth-child(2) form:nth-child(2) div:nth-child(3) div.form-group:nth-child(2) div.input-group.mb-3 > input.form-control')
    }

    submitButton()
    {
        return cy.get('div.container:nth-child(2) div:nth-child(1) div:nth-child(1) form:nth-child(2) > button.btn.btn-custom:nth-child(4)')
    }

    //Actions


    fillTitle(text)
    {
        this.title().type(text)
    }

    fillDescription(text)
    {
        this.description().type(text)
    }

    fillImageUrl(text)
    {
        this.imageUrl().type(text)
    }

    clickSubmitButton()
    {
        this.submitButton().click()
    }


    createGallery(title,description,imgurl)
    {
        this.fillTitle(title)
        this.fillDescription(description)
        this.fillImageUrl(imgurl)
        this.clickSubmitButton()
    }

    
}
export default createGallery