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

});
Cypress.Commands.add('customerchik', (data) => {
    cy.get('#fname').type(data.firstname)
    cy.log('First Name entered')
    cy.get('#lname').type(data.lastname)
    cy.log('Last Name entered')
    cy.get('#email').type(data.email)
    cy.log('Email entered')
    cy.get('textarea[name=addr]').type(data.address)
    cy.log('Address entered')
    cy.get('#telephoneno').type(data.mobile)
    cy.log('Phone entered')
    cy.get('[name="submit"]')
        .should('be.visible')
        .click()
})
Cypress.Commands.add('checkcactiveustomer',() => {
    let customerId;
    cy.location('search').then(path => {
        customerId = path.split('=')[1];
        cy.log(customerId)
        cy.visit('https://demo.guru99.com/telecom/assigntariffplantocustomer.php')
        cy.get('#customer_id').type(customerId)
        cy.get('.fit').click()
        cy.get('p').should('have.text', 'ACTIVE')
        cy.visit('https://demo.guru99.com/telecom/billing.php')
        cy.get('#customer_id').type(customerId)
        cy.get('.fit').click()

    })
})
Cypress.Commands.add('checkcinactiveustomer',() => {
    let customerId;
    cy.location('search').then(path => {
        customerId = path.split('=')[1];
        cy.log(customerId)
        cy.visit('https://demo.guru99.com/telecom/assigntariffplantocustomer.php')
        cy.get('#customer_id').type(customerId)
        cy.get('.fit').click()
        cy.get('p').should('have.text', 'INACTIVE')
        cy.visit('https://demo.guru99.com/telecom/billing.php')
        cy.get('#customer_id').type(customerId)
        cy.get('.fit').click()

    })
})
Cypress.Commands.add('bigmax', (data) => {
    cy.get('#fname').type(data.maxname)
    cy.log('First Name entered')
    cy.get('#lname').type(data.maxaddress)
    cy.log('Last Name entered')
    cy.get('#email').type(data.maxemail)
    cy.log('Email entered')
    cy.get('#telephoneno').type(data.maxtel)
    cy.log('Phone entered')
    cy.get('[name="submit"]')
        .should('be.visible')
        .click()
})
