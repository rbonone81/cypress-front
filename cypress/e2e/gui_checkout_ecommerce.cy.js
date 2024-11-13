/// <reference types="cypress" />

describe('Teste E2E em um ECommerce.', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/')
  })

  it('Validar fluxo de checkout simples.', () => {
      //Fazer login na loja
      cy.login('standard_user','secret_sauce')

      //Adicionar o primeiro produto da lista principal ao carrinho 
      cy.addProductByIndex('1')

      //Acessar o segundo produto, adicionar ao carrinho e acessar a lista de produtos adicionados ao mesmo
      cy.addProductByName('Sauce Labs Bolt T-Shirt')

      //Validar a lista com os produtos adicionados
      cy.get('.cart_list').contains('Sauce Labs Backpack')
      cy.get('.cart_list').contains('Sauce Labs Bolt T-Shirt')
      
      //Remover o primeiro item da lista e continuar compranddo
      cy.get('.btn_secondary').first().click()
      cy.get('.fa-layers-counter').should('have.text','1')

      //Fazer o chackout - Dados pessoais
      cy.contains('CHECKOUT').click()
      cy.fillPersonalInformation('Cliente', 'Teste', '97000000')
      cy.contains('CONTINUE').click()

      //Fazer o chackout - Finalizar
      cy.get('.btn_action').click()
      cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
    })
})

