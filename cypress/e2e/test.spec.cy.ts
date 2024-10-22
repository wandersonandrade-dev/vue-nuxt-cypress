describe('teste do Nuxt usando Cypress', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('check if `cypress e2e test` is in the content of the About page', () => {
    cy.get('a[href*="about"]').click()
    cy.contains('cypress').contains('test').contains('e2e')
  })
})