class createGallery
{
    get title()
    {
        return cy.get('#title')
    }

    get description()
    {
        return cy.get('#description')
    }

    get imageUrl()
    {
        return cy.get('input[type="url"]')
    }

    get submitButton()
    {
        return cy.get('button[type="submit"]').first()
    }

    

    //Actions


    fillTitle(text)
    {
        this.title.type(text)
    }

    fillDescription(text)
    {
        this.description.type(text)
    }

    fillImageUrl(text)
    {
        this.imageUrl.type(text)
    }

    clickSubmitButton()
    {
        this.submitButton.click()
    }

    


    createGallery(title,description,imgurl)
    {
        this.fillTitle(title)
        this.fillDescription(description)
        this.fillImageUrl(imgurl)
        this.clickSubmitButton()
    }

    
}
export const create = new createGallery()