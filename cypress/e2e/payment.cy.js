describe("payment check", () => {
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
        cy.on('window:alert', (text) => {
            expect(text).to.eq('please fill all fields Correct Value');});
        cy.on('window:confirm', () => true);
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
        cy.get('#message1').should('have.text', 'Characters are not allowed')
        cy.get('#month').select('5');
        cy.get('#year').select('2025');
        cy.datas('#cvv_code', 'qwe')
        cy.get('#message2')
            .should('have.text', 'Characters are not allowed')

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
    it.skip("test check card year and mont",() =>{
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
    it.skip('test nav ', () =>{
        cy.get('.inner > .logo')
            .should('be.visible')
            .and('have.css',  'color','rgb(255, 255, 255)')
            .and('have.attr', 'href', 'purchasetoy.php')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'margin', '0px')
            .and('have.css', 'padding', '0px')
            .and('have.css', 'top', '0px')
            .and('have.css', 'font-size', '16px')
            .contains('Guru99 Payment Gateway')
        cy.get('#nav').contains('Cart')
            .should('be.visible')
            .and('have.attr', 'href', 'purchasetoy.php')
            .and('have.css', 'padding', '0px 12px')
            .and('have.css', 'font-size', '16px')
        cy.get('#nav').contains('Generate Card Number')
            .should('be.visible')
            .and('have.attr', 'href', 'cardnumber.php')
            .and('have.css', 'padding', '0px 12px')
            .and('have.css', 'font-size', '16px')
        cy.get('#nav').contains('Check Credit Card Limit')
            .should('be.visible')
            .and('have.attr', 'href', 'check_credit_balance.php')
            .and('have.css', 'padding', '0px 0px 0px 12px')
            .and('have.css', 'font-size', '16px')

    })
    it.skip('test header',() =>{
        cy.get('h2')
            .should('be.visible')
            .and('have.css', 'font-weight', '300')
            .and('have.css', 'line-height', '66px')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('have.css', 'font-size', '44px')
            .and('have.css', 'margin', '0px 0px 22px')
            .contains('Mother Elephant With Babies Soft Toy');
    })
    it.skip('check img',() =>{
        cy.get('p > img')
            .should('be.visible')
            .and('have.attr', 'src', 'images/Toy.jpg')
            .and('have.css', 'vertical-align', 'middle')
            .and('have.css', 'border', '0px none rgb(154, 154, 154)')
            .and('have.css', 'margin', '0px')
            .and('have.css', 'padding', '0px');

    })
    it.skip('check text', () =>{
        cy.get('[class="6u 12u$(small)"] > p' )
            .should('be.visible')
            .and('have.css', 'margin', '0px 0px 10px')
            .contains('Delight your little ones this year by presenting them with an adorable soft toy Mother Elephant With Babies Soft Toy - 38 cm. This soft toy into their bedroom will give them endless hours of fun-filled playtime. Crafted with perfection using the finest materials, Non-toxic and soft fabric Soft and Cuddly filling Home Washable Huggable and loveable for someone special ')


    })
    it.skip('check info about elephant',() =>{
        cy.get(':nth-child(2) > ul > :nth-child(1)')
            .contains('Brand : ToysMart')
            .should('be.visible')
            .and('have.css', 'padding-left', '8px');

        cy.get(':nth-child(2) > ul > :nth-child(2)')
            .contains('Age group : 2 Years to 4 Years')
            .should('be.visible')
            .and('have.css', 'padding-left', '8px');

        cy.get(':nth-child(2) > ul > :nth-child(3)')
            .contains('Color : Grey')
            .should('be.visible')
            .and('have.css', 'padding-left', '8px');

        cy.get(':nth-child(2) > ul > :nth-child(4)')
            .contains('Washable : Yes')
            .should('be.visible')
            .and('have.css', 'padding-left', '8px');

        cy.get(':nth-child(2) > ul > :nth-child(5)')
            .contains('Key Feature 1 : Soft and Cuddly Filling')
            .should('be.visible')
            .and('have.css', 'padding-left', '8px');

        cy.get(':nth-child(2) > ul > :nth-child(6)')
            .contains('SUPC: SDL318766798')
            .should('be.visible')
            .and('have.css', 'padding-left', '8px')
        cy.get('h3').contains('Price: $20')
            .should('be.visible')
            .and('have.css', 'font-size', '28px')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('have.css', 'line-height', '42px')
            .and('have.css', 'margin-top', '20px')
            .and('have.css', 'margin-bottom', '10px');

    })
    it('check elements', () =>{
        cy.get('h4')
            .should('be.visible')
            .contains('Quantity:')
            .and('have.css', 'font-size', '24px')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'color', 'rgb(85, 85, 85)')
            .and('have.css', 'line-height', '36px')
            .and('have.css', 'margin-top', '10px')
            .and('have.css', 'margin-bottom', '10px');

        cy.get('select')
            .should('have.length.above', 0)
            .and('have.css', 'font-size', '19.2px')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'height', '52.796875px')
            .and('have.css', 'background', 'rgb(108, 192, 145) none repeat scroll 0% 0% / auto padding-box border-box')
            .and('have.css', 'border-radius', '10px')
            .and('have.css', 'border', '2px solid rgb(141, 204, 169)')
            .and('have.css', 'padding', '0px 19.2px');

        cy.get('.button')
            .should('be.visible')
            .and('have.attr', 'value', 'Buy Now')
            .and('have.css', 'font-size', '19.2px')
            .and('have.css', 'background-color', 'rgb(108, 192, 145)')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'border-radius', '30px')

    })



});