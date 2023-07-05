describe("UIcheck", () => {
    it.skip("test first page header", () => {
        cy.log('open page');
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        cy.paymentheader('Cart', 'https://demo.guru99.com/payment-gateway/purchasetoy.php')
        cy.paymentheader('Check Credit Card Limit','https://demo.guru99.com/payment-gateway/check_credit_balance.php')
        cy.paymentheader('Generate Card Number','https://demo.guru99.com/payment-gateway/cardnumber.php')
    })
    it.skip("test first page ", () => {
        cy.log('open page');
        cy.log('open page');
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        cy.get('[name="quantity"]').select('2');
        cy.get('[value="Buy Now"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/payment-gateway/process_purchasetoy.php');
    })
    it.skip(" + test payment process ", () => {
        cy.log('open first page');
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        cy.get('[name="quantity"]').select('2');
        cy.get('[value="Buy Now"]')
            .should('be.visible')
            .click()
        cy.log('open payment page')
        cy.log('enter visa card data')
        cy.datas('#card_nmuber', '4548100023421844')
        cy.get('#month').select('10');
        cy.get('#year').select('2025');
        cy.datas('#cvv_code', '176')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip(" - test payment process ", () => {
        cy.log('open payment page');
        cy.visit('https://demo.guru99.com/payment-gateway/process_purchasetoy.php')
        cy.log('open payment page')
        cy.log('enter visa card data')
        cy.datas('#card_nmuber', '4548100023421844')
        cy.get('#month').select('5');
        cy.get('#year').select('2023');
        cy.datas('#cvv_code', '176')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/payment-gateway/process_purchasetoy.php');
    })
    it.skip("  test payment process to american express ", () => {
        cy.log('open payment page');
        cy.visit('https://demo.guru99.com/payment-gateway/process_purchasetoy.php')
        cy.log('open payment page')
        cy.log('enter visa card data')
        cy.datas('#card_nmuber', '123456789012342')
        cy.get('#month').select('10');
        cy.get('#year').select('2023');
        cy.datas('#cvv_code', '176')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/payment-gateway/genearte_orderid.php?uid=174160');
    })
    it.skip(" - test  CVV with 4 numbers", () => {
        cy.log('open first page');
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        cy.get('[name="quantity"]').select('2');
        cy.get('[value="Buy Now"]')
            .should('be.visible')
            .click()
        cy.log('open payment page')
        cy.log('enter visa card data')
        cy.datas('#card_nmuber', '4548100023421844')
        cy.get('#month').select('10');
        cy.get('#year').select('2025');
        cy.datas('#cvv_code', '1762')
        cy.wait(5000)
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip(" - test without CVV ", () => {
        cy.log('open first page');
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        cy.get('[name="quantity"]').select('2');
        cy.get('[value="Buy Now"]')
            .should('be.visible')
            .click()
        cy.log('open payment page')
        cy.log('enter visa card data')
        cy.datas('#card_nmuber', '4548100023421844')
        cy.get('#month').select('10');
        cy.get('#year').select('2025');
        cy.datas('#cvv_code', ' ')
        cy.wait(5000)
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/payment-gateway/genearte_orderid.php?uid=174160');
    })
    it.skip(" - test with all empty fields ", () => {
        cy.log('open first page');
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        cy.get('[name="quantity"]').select('2');
        cy.get('[value="Buy Now"]')
            .should('be.visible')
            .click()
        cy.log('open payment page')
        cy.log('enter visa card data')
        cy.datas('#card_nmuber', ' ')
        cy.get('#month').select('Month');
        cy.get('#year').select('Year');
        cy.datas('#cvv_code', ' ')

        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq' ,'https://demo.guru99.com/payment-gateway/process_purchasetoy.php');
    })
    it.skip(" - test  add fields letters ", () => {
        cy.log('open first page');
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        cy.get('[name="quantity"]').select('2');
        cy.get('[value="Buy Now"]')
            .should('be.visible')
            .click()
        cy.log('open payment page')
        cy.log('enter visa card data')
        cy.datas('#card_nmuber', 'asdfghjklqwertyq')
        cy.get('#month').select('5');
        cy.get('#year').select('2025');
        cy.datas('#cvv_code', 'qwe')

        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
        cy.url().should('eq' ,'https://demo.guru99.com/payment-gateway/process_purchasetoy.php');
    })
    it("test payment successful page ", () => {
        cy.log('open first page');
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
        cy.get('[name="quantity"]').select('2');
        cy.get('[value="Buy Now"]')
            .should('be.visible')
            .click()
        cy.log('open payment page')
        cy.log('enter visa card data')
        cy.datas('#card_nmuber', '4548100023421844')
        cy.get('#month').select('10');
        cy.get('#year').select('2025');
        cy.datas('#cvv_code', '176')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
        cy.get('[class="button special"]')
            .should('be.visible')
            .click()
        cy.url().should('eq' ,'https://demo.guru99.com/payment-gateway/purchasetoy.php');

        })

});