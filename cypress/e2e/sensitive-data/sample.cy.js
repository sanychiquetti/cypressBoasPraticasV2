describe('Sensitive data bad practice', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('fills the form leaking sensitive data', () => {
    cy.get('#email').type(Cypress.env("user_email"), { log: false })
    cy.get('#password').type(Cypress.env("user_password"), {log: false })
  })
})
