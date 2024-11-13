Cypress.Commands.add('login', (user, password) => { 
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(password)
    cy.get('#login-button').click()
 })

Cypress.Commands.add('addProductByIndex', (index) => { 
    cy.get(':nth-child('+index+') > .pricebar > .btn_primary').click()
    cy.get('.btn_secondary').should('contain','REMOVE')
    cy.get('.fa-layers-counter').should('have.text','1')
 })

 Cypress.Commands.add('addProductByName', (name) => { 
    cy.contains(name).click()
    cy.get('.btn_primary').click()
    cy.get('.btn_secondary').should('contain','REMOVE')
    cy.get('.fa-layers-counter').should('have.text','2').click()
 })

 Cypress.Commands.add('fillPersonalInformation', (firstName, lastName, zip) => { 
    cy.get('[data-test="firstName"]').type(firstName)
    cy.get('[data-test="lastName"]').type(lastName)
    cy.get('[data-test="postalCode"]').type(zip)
 })

Cypress.on('uncaught:exception', (err, runnable) => {return false})