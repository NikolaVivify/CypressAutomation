class GalleryPage 
{
  createdBy()
  {
      return cy.get('div:nth-child(2) div.container:nth-child(2) div:nth-child(1) h5:nth-child(2) > a:nth-child(1)')
  }

  deleteGallery()
  {
      return cy.get('div:nth-child(2) div.container:nth-child(2) div:nth-child(1) div:nth-child(5) > button.btn.btn-custom:nth-child(1)')
  }

  editGallery()
  {
      return cy.get('div:nth-child(2) div.container:nth-child(2) div:nth-child(1) div:nth-child(5) > a.btn.btn-custom:nth-child(2)')
  }

  textField()
  {
      return cy.get('div.container:nth-child(2) div:nth-child(1) div:nth-child(7) form:nth-child(1) div.form-group > textarea:nth-child(1)')
  }

  submitButton()
  {
      return cy.get('div.container:nth-child(2) div:nth-child(1) div:nth-child(7) form:nth-child(1) > button.btn.btn-custom')
  }

//Actions

  clickCreaterdBy()
  {
      this.createdBy().click()
  }

  clickDeleteGallery()
  {
      this.deleteGallery().click()
  }

  clickEditGallery()
  {
      this.editGallery().click()
  }

  fillTextField(text)
  {
      this.textField().type(text)
  }

  clickSubmitButton()
  {
      this.submitButton().click()
  }


}
export default GalleryPage