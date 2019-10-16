describe('Sapper template app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Great success!')
  })

  it('navigates to /about', () => {
    cy.get('header a[href="/about"]').click()
    cy.url().should('include', '/about')
  })

  it('navigates to /learn', () => {
    cy.get('header a[href="/learn"]').click()
    cy.url().should('include', '/learn')
  })

  it('navigates to /reviews', () => {
    cy.get('header a[href="/reviews"]').click()
    cy.url().should('include', '/reviews')
  })
})
