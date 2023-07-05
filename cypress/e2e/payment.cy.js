describe("UIcheck", () => {
    beforeEach(()=>{
        cy.log('open page');
        cy.visit('https://demo.guru99.com/payment-gateway/index.php')
    })

    it.skip("test first page header", () => {

        cy.paymentheader('Cart', 'https://demo.guru99.com/payment-gateway/purchasetoy.php')
        cy.paymentheader('Check Credit Card Limit','https://demo.guru99.com/payment-gateway/check_credit_balance.php')
        cy.paymentheader('Generate Card Number','https://demo.guru99.com/payment-gateway/cardnumber.php')
    })
    it.skip("test first page ", () => {

        cy.get('[name="quantity"]').select('2');
        cy.get('[value="Buy Now"]')
            .should('be.visible')
            .click()
        cy.url().should('eq', 'https://demo.guru99.com/payment-gateway/process_purchasetoy.php');
    })
    it.skip(" + test payment process ", () => {

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
    it.skip("test payment successful page ", () => {

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
    it.skip("test quantity",() =>{
        cy.get('[name="quantity"]').select('1');
        cy.wait(1000);
        cy.get('[name="quantity"]').select('2');
        cy.wait(1000);
        cy.get('[name="quantity"]').select('3');
        cy.wait(1000);
        cy.get('[name="quantity"]').select('4');
        cy.wait(1000);
        cy.get('[name="quantity"]').select('5');
        cy.wait(1000);
        cy.get('[name="quantity"]').select('6');
        cy.wait(1000);
        cy.get('[name="quantity"]').select('7');
        cy.wait(1000);
        cy.get('[name="quantity"]').select('8');
        cy.wait(1000);
        cy.get('[name="quantity"]').select('9');
        cy.wait(1000);
    })
    it("test check card year and mont",() =>{
        cy.get('[value="Buy Now"]')
            .click()
        cy.get('#month').select('Month');
        cy.get('#year').select('Year');
        cy.wait(1000);
        cy.get('#year').select('2017');
        cy.get('#month').select('1');
        cy.wait(1000);
        cy.get('#year').select('2018');
        cy.get('#month').select('2');
        cy.wait(1000);
        cy.get('#year').select('2019');
        cy.get('#month').select('3');
        cy.wait(1000);
        cy.get('#year').select('2020');
        cy.get('#month').select('4');
        cy.wait(1000);
        cy.get('#year').select('2021');
        cy.get('#month').select('5');
        cy.wait(1000);
        cy.get('#year').select('2022');
        cy.get('#month').select('6');
        cy.wait(1000);
        cy.get('#year').select('2023');
        cy.get('#month').select('7');
        cy.wait(1000);
        cy.get('#year').select('2024');
        cy.get('#month').select('8');
        cy.wait(1000);
        cy.get('#year').select('2025');
        cy.get('#month').select('9');
        cy.wait(1000);
        cy.get('#year').select('2026');
        cy.get('#month').select('10');
        cy.wait(1000);
        cy.get('#year').select('2027');
        cy.get('#month').select('11');
        cy.wait(1000);
        cy.get('#year').select('2028');
        cy.get('#month').select('12');
        cy.wait(1000);

    })

});