class GalleryPage 
{
  get createdBy()
  {
      return cy.get('a[xpath="1"]')
  }

  get deleteGallery()
  {
      return cy.get('button').first()
  }

  get editGallery()
  {
      return cy.get('a[type="button"]')
  }

  get textField()
  {
      return cy.get('textarea[required="required"]')
  }

  get submitCommentButton()
  {
      return cy.get('button[type="submit"]')
  }

  get deleteComment()
    {
        return cy.get('.fas')
    }

//Actions

  clickCreaterdBy()
  {
      this.createdBy.click()
  }

  clickDeleteGallery()
  {
      this.deleteGallery.click()
  }

  clickEditGallery()
  {
      this.editGallery.click()
  }

  fillTextField(text)
  {
      this.textField.type(text)
  }

  clickSubmitButton()
  {
      this.submitCommentButton.click()
  }

  clickDeleteComment()
    {
        this.deleteComment.click()
    }


}
export const gallery = new GalleryPage()