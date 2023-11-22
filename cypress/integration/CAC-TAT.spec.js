/// <reference types="Cypress" />

describe('Central de atendimento ao Cliente TAT', () => {
  it('Verifica o titulo da aplicação', () => {
    cy.visit('./src/index.html')
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
})
