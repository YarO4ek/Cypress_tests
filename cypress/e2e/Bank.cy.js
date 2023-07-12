describe("Bank check", () => {
    beforeEach(() => {
        cy.log('open page');
        cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/index.php')
    })
    it("test page of login",() =>{
        cy.datas('[name="uid"]', '1303')
        cy.datas('[type="password"]', 'Guru99')
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/customer/Customerhomepage.php');

    })
    it("test login with empty pass",() =>{
        cy.datas('[name="uid"]', '1303')
        //cy.datas('[type="password"]', ' ')
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it("test login with incorrect pass",() =>{
        cy.datas('[name="uid"]', '1303')
        cy.datas('[type="password"]', 'garu99 ')
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it("test  incorrect login with correct pass",() =>{
        cy.datas('[name="uid"]', '1304')
        cy.datas('[type="password"]', 'guru99 ')
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it("test  empty fields",() =>{
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it("test  text box for using spase",() =>{
        cy.datas('[name="uid"]', '   ')
        cy.datas('[type="password"]', '   ')
        cy.wait(1000);
        cy.get('[type="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/Agile_Project/Agi_V1/index.php');
    })
    it("test  reset button",() =>{
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


});