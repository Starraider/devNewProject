describe('tests the contact form', () => {
  beforeEach(() => {
    cy.visit('/kontakt/')
  })

  it('has contact form', () => {
    cy.get('form').should('exist')
    cy.findByRole('textbox', { name: /Vor- und Nachname/i }).should('exist')
    cy.findByRole('textbox', { name: /Firma/i }).should('exist')
    cy.findByRole('textbox', { name: /E-Mail/i }).should('exist')
    cy.findByRole('textbox', { name: /Betreff/i }).should('exist')
    cy.findByRole('textbox', { name: /Nachricht/i }).should('exist')
    cy.findByRole('button', { name: /Abschicken/i }).should('exist')
  })
  it('checks mandatory fields', () => {
    cy.findByRole('button', { name: /Abschicken/i }).click()
    cy.findByRole('textbox', { name: /Vor- und Nachname/i }).should(
      'have.class',
      'error'
    )
    c
  })
})
