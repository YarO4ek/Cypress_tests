// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getNavi', (elementName, pageLink)=>{
    cy.get('#navbar-brand-centered').then(jqElemen =>{
        cy.contains('a', elementName)
            .should('be.visible').and('have.attr', 'href', pageLink)
            .click();
            //cy.url().should('eq', pageLink );
            cy.go('back');
        })
    })

Cypress.Commands.add('Dropdawn', (elemnentName, pageName, ref, pageLink)=>{
    cy.contains('a', elemnentName).click();
    cy.get('[class="dropdown-menu"]').children().contains('a', pageName)
        .should('be.visible').and('have.attr', 'href', ref)
        //.wait(1000)
        .click();
    cy.url().should('eq', pageLink);
    cy.go('back');
})

Cypress.Commands.add('header',(elementName, pageLink)=>{
    cy.get('[class="top-banner col-md-8"]').then(qElement =>{
        cy.contains('a', elementName).click();
        cy.url().should('eq', pageLink);
        cy.go('back');
    })
})
Cypress.Commands.add('resetbutton',(pageLink)=>{
    cy.get('[value="Reset"]')
        .should("be.visible")
        .click();
    cy.get('[name="submit"]')
        .should('be.visible')
        .click();
    cy.url().should('eq', pageLink);
})

Cypress.Commands.add('datas', (fieldID,val) => {
    cy.get(fieldID).type(val);

})
Cypress.Commands.add('paymentheader',(elementName, pageLink)=>{
    cy.get('[class="inner"]').then(qElement =>{
        cy.contains('a', elementName).click();
        // cy.url().should('eq', pageLink);
        cy.go('back');
    })
})
