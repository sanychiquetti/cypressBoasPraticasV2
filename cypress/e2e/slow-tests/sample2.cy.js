describe('Slow tests bad practice - click a link to visit a page', () => {
  it('does not enable signup button when passwords do not match', () => {
    cy.visit('https://notes-serverless-app.com/signup')

    cy.get('#email').type(Cypress.env('user_email'))
    cy.get('#password').type(Cypress.env('user_password'), { log: false })
    cy.get('#confirmPassword').type('foobahbaz')

    cy.contains('button', 'Signup')
      .should('be.disabled')
  })
})
