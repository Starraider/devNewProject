describe('tests the cookie banner', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad: contentWindow => {
        contentWindow.document.cookie =
          'klaro=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      },
    })
    cy.clearCookies()
  })

  it('still looks the same', () => {
    cy.get('.cm-klaro').toMatchImageSnapshot({
      name: 'cookiebanner',
    })
  })

  it('sets cookies', () => {
    cy.getCookies().should('be.empty')
    cy.get('.cm-btn-accept-all').click()
    cy.getCookie('klaro').should(
      'have.property',
      'value',
      '%7B%22youtube%22%3Atrue%2C%22googleanalytics%22%3Atrue%2C%22mylanguage%22%3Atrue%2C%22cookieconsent%22%3Atrue%7D'
    )
  })

  it('shows the cookie banner', () => {
    cy.get('.cm-btn-accept-all').should('have.text', 'Alle akzeptieren')
    cy.get('.cm-btn-accept').should('have.text', 'Ausgewählte akzeptieren')
    cy.get('.cm-btn-decline').should('have.text', 'Ich lehne ab')
    cy.contains('Externe Medien')
    cy.contains('Besucher-Statistiken')
    cy.contains('YouTube Videos').should('not.be.visible')
  })

  it('tests the service links', () => {
    // Externe Medien
    cy.contains('YouTube Videos').should('not.be.visible')
    cy.get(':nth-child(1) > .cm-services > .cm-caret > a').click()
    cy.contains('YouTube Videos').should('be.visible')
    cy.get(':nth-child(1) > .cm-services > .cm-caret > a').click()
    cy.contains('YouTube Videos').should('not.be.visible')
    // Statistiken
    cy.contains('Google-Analytics').should('not.be.visible')
    cy.get(':nth-child(2) > .cm-services > .cm-caret > a').click()
    cy.contains('Google-Analytics').should('be.visible')
    cy.get(':nth-child(2) > .cm-services > .cm-caret > a').click()
    cy.contains('Google-Analytics').should('not.be.visible')
    // Funktionale Cookies
    cy.contains('Sprach-Cookie').should('not.be.visible')
    cy.contains('Cookie-Zustimmung').should('not.be.visible')
    cy.get(':nth-child(3) > .cm-services > .cm-caret > a').click()
    cy.contains('Sprach-Cookie').should('be.visible')
    cy.contains('Cookie-Zustimmung').should('be.visible')
    cy.get(':nth-child(3) > .cm-services > .cm-caret > a').click()
    cy.contains('Sprach-Cookie').should('not.be.visible')
    cy.contains('Cookie-Zustimmung').should('not.be.visible')
  })
})
