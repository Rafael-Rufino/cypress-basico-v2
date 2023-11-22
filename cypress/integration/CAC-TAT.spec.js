/// <reference types="Cypress" />

describe('Central de atendimento ao Cliente TAT', () => {
  it('Verifica o ttulo da aplicação', () => {
    cy.visit('./src/index.html')
  })
})
