describe("Bank check", () => {
    beforeEach(() => {
        cy.log('open page');
        cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/index.php')
    })
    it.skip("test page of login",() =>{
        cy.datas('[name="uid"]', '1303')
        cy.datas('[type="password"]', 'Guru99')
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php');

    })
    it.skip("test login with empty pass",() =>{
        cy.datas('[name="uid"]', '1303')
        //cy.datas('[type="password"]', ' ')
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it.skip("test login with incorrect pass",() =>{
        cy.datas('[name="uid"]', '1303')
        cy.datas('[type="password"]', 'garu99 ')
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it.skip("test  incorrect login with correct pass",() =>{
        cy.datas('[name="uid"]', '1304')
        cy.datas('[type="password"]', 'guru99 ')
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it.skip("test  empty fields",() =>{
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it.skip("test  text box for using spase",() =>{
        cy.datas('[name="uid"]', '   ')
        cy.datas('[type="password"]', '   ')
        cy.wait(1000);
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it.skip("test  reset button",() =>{
        cy.datas('[name="uid"]', '1304')
        cy.datas('[type="password"]', 'guru99 ')
        cy.get('[type="reset"]')
            .should('be.visible')
            .click()
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it('check elements',() =>{
        cy.get('h2')
            .contains('Guru99 Bank')
            .should('be.visible')
            .and('have.css', 'font-size', '27px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(51, 51, 51)')
            .and('have.css', 'BACKGROUND-COLOR', 'rgb(248, 155, 81)')
            .and('have.css', 'line-height', '29.7px')
        cy.get('h4')
            .contains('Access')
            .should('be.visible')
            .and('have.css', 'font-size', '18px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(51, 51, 51)')
            .and('have.css', 'BACKGROUND-COLOR', 'rgb(248, 155, 81)')
            .and('have.css', 'line-height', '19.8px')
        cy.get('[type="submit"]')
            .should('be.visible')
            .and('have.css', 'font-size', '16px')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'BACKGROUND-COLOR', 'rgb(248, 248, 255)')

        cy.get('[type="reset"]')
            .should('be.visible')
            .and('have.css', 'font-size', '16px')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'BACKGROUND-COLOR', 'rgb(248, 248, 255)')

    })
});