describe('template spec', () => {
  it('Deve carregar a página com o título correto', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('eq', 'Cypress.io: Kitchen Sink')
  })

  it('Deve navegar para a página de comandos de documentação', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })

  it('Deve preencher e submeter um formulário', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    cy.get('.action-email')
      .type('exemplo@teste.com')
      .should('have.value', 'exemplo@teste.com')

    cy.get('.action-form').submit()

    cy.wait(1000) 

    cy.get('.action-form').should('exist')
  })
})
