describe('Dependent tests bad practice', () => {
  beforeEach(() => {
    cy.visit('http://notes-serverless-app.com/login')

    cy.get('#email').type(Cypress.env('user_email'))
    cy.get('#password').type(Cypress.env('user_password'), { log: false })
    cy.get('button[type="submit"]').click()
    
    cy.contains('h1', 'Your Notes').should('be.visible')
  })

  it('CRUDs a note', () => {
    cy.contains('Create a new note').click()
    cy.get('#content').type('My note')
    cy.contains('Create').click()

    cy.get('.list-group')
      .should('contain', 'My note')
      .click()

    cy.get('#content').type(' updated')
    cy.contains('Save').click()

    cy.get('.list-group').should('contain', 'My note updated')
    cy.get('.list-group:contains(My note updated)')
      .should('be.visible')
      .click()

    cy.contains('Delete').click()

    cy.get('.list-group:contains(My note updated)').should('not.exist')
  })
})
