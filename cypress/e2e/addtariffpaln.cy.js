

describe("add tariff plan check", () =>{
    beforeEach(() =>{
        cy.log('open page');
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php')
    })

    it.skip('Check logo button', () =>{
        cy.get('[class="left"]')
            .should('be.visible')
            .click()
        cy.url()
            .should('contain', 'https://demo.guru99.com/telecom/index.html')
    })
    it.skip("+ check add tariff plane", () =>{
        cy.log('open page');
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php')
        cy.datas('#rental1', '10')
        cy.datas('#local_minutes', '10')
        cy.datas('#inter_minutes', '10')
        cy.datas('#sms_pack', '10')
        cy.datas('#minutes_charges', '10')
        cy.datas('#inter_charges', '10')
        cy.datas('#sms_charges', '10')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
        cy.get('[class="button"]')
            .should('be.visible')
            .click()


    })
    it.skip("- check add tariff plane", () =>{

        cy.datas('#rental1', 'as')
        cy.get('#message2')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#local_minutes', 'ta')
        cy.get('#message3')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#inter_minutes', 'la')
        cy.get('#message4')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#sms_pack', 'vi')
        cy.get('#message5')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#minutes_charges', 'sta')
        cy.get('#message6')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#inter_charges', 'ba')
        cy.get('#message7')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#sms_charges', 'be')
        cy.get('#message8')
            .should('have.text', 'Characters are not allowed');
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip("- check button reset", () =>{

        cy.datas('#rental1', '10')
        cy.datas('#local_minutes', '10')
        cy.datas('#inter_minutes', '10')
        cy.datas('#sms_pack', '10')
        cy.datas('#minutes_charges', '10')
        cy.datas('#inter_charges', '10')
        cy.datas('#sms_charges', '10')
        cy.resetbutton('https://demo.guru99.com/telecom/addtariffplans.php')
    })
    it.skip("- check textbox with space", () =>{

        cy.datas('#rental1', ' ')
        cy.get('#message2')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#local_minutes', ' ')
        cy.get('#message3')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#inter_minutes', ' ')
        cy.get('#message4')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#sms_pack', ' ')
        cy.get('#message5')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#minutes_charges', ' ')
        cy.get('#message6')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#inter_charges', ' ')
        cy.get('#message7')
            .should('have.text', 'Characters are not allowed');
        cy.datas('#sms_charges', ' ')
        cy.get('#message8')
            .should('have.text', 'Characters are not allowed');
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip('- check textbox with empty fields',() =>{

        cy.datas('#rental1', ' ')
        cy.datas('#local_minutes', ' ' )
        cy.datas('#inter_minutes',' ' )
        cy.datas('#sms_pack',' ' )
        cy.datas('#minutes_charges',' ' )
        cy.datas('#inter_charges', ' ')
        cy.datas('#sms_charges', ' ')
        cy.get('#message2')
            .should('have.text', 'Number must not be blank');
        cy.get('#message3')
            .should('have.text', 'Number must not be blank');
        cy.get('#message4')
            .should('have.text', 'Number must not be blank');
        cy.get('#message5')
            .should('have.text', 'Number must not be blank');
        cy.get('#message6')
            .should('have.text', 'Number must not be blank');
        cy.get('#message7')
            .should('have.text', 'Number must not be blank');
        cy.get('#message8')
            .should('have.text', 'Number must not be blank');
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip("- check textbox with boundary values", () =>{

        cy.datas('#rental1', '999999')
        cy.datas('#local_minutes', '999999')
        cy.datas('#inter_minutes', '999999')
        cy.datas('#sms_pack', '999999')
        cy.datas('#minutes_charges', '999999')
        cy.datas('#inter_charges', '999999')
        cy.datas('#sms_charges', '999999')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip("- check textbox with special characters", () =>{

        cy.datas('#rental1', '--a')
        cy.get('#message2')
            .should('have.text', 'Special characters are not allowed');
        cy.datas('#local_minutes', '--a')
        cy.get('#message3')
            .should('have.text', 'Special characters are not allowed');
        cy.datas('#inter_minutes', ',,a')
        cy.get('#message4')
            .should('have.text', 'Special characters are not allowed');
        cy.datas('#sms_pack', ',,a')
        cy.get('#message5')
            .should('have.text', 'Special characters are not allowed');
        cy.datas('#minutes_charges', ',,a')
        cy.get('#message6')
            .should('have.text', 'Special characters are not allowed');
        cy.datas('#inter_charges', '++a')
        cy.get('#message7')
            .should('have.text', 'Special characters are not allowed');
        cy.datas('#sms_charges', '++a')
        cy.get('#message8')
            .should('have.text', 'Special characters are not allowed');
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip("- check textbox with letters and numbers", () =>{

        cy.datas('#rental1', 'a9bc')
        cy.datas('#local_minutes', 'ab9c')
        cy.datas('#inter_minutes', 'dfq9')
        cy.datas('#sms_pack', 'que7')
        cy.datas('#minutes_charges', 'd3ve')
        cy.datas('#inter_charges', 'st1o')
        cy.datas('#sms_charges', 'kt4o')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip('- Blank fields and alert', () => {

        cy.get('input[type="submit"]')
            .should('be.visible')
            .click()
        cy.on('window:alert', (txt) => {
            expect(txt).to.equal('please fill all fields Correct Value');
        })
    })
    it.skip('check text fields  and  correct placeholder', () => {
        cy.get('#rental1')
            .should('have.attr', 'placeholder', 'Monthly Rental')
            .should('be.visible');
        cy.get('#local_minutes')
            .should('have.attr', 'placeholder', 'Free Local Minutes')
            .should('be.visible');
        cy.get('#inter_minutes')
            .should('have.attr', 'placeholder', 'Free International Minutes')
            .should('be.visible');
        cy.get('#sms_pack')
            .should('have.attr', 'placeholder', 'Free SMS Pack')
            .should('be.visible');
        cy.get('#minutes_charges')
            .should('have.attr', 'placeholder', 'Local Per Minutes Charges')
            .should('be.visible');
        cy.get('#inter_charges')
            .should('have.attr', 'placeholder', 'Inter. Per Minutes Charges')
            .should('be.visible');
        cy.get('#sms_charges')
            .should('have.attr', 'placeholder', 'SMS Per Charges')
            .should('be.visible');
    })
    it.skip('color on the page', () =>{


        cy.log("header color")
        cy.get('[id="navbar-brand-centered"]')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#767d85');
        cy.log("header words color")
        cy.get('[class="dropdown-toggle"]')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#fff');
        cy.get('[class="dropdown"]').contains('Insurance Project')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#fff');
        cy.get('[class="dropdown"]').contains('Agile Project')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#fff');
        cy.get('[class="dropdown"]').contains('Bank Project')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#fff');
        cy.get('[class="dropdown"]').contains('Security Project')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#fff');
        cy.get('[class="dropdown"]').contains('Telecom Project')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#fff');
        cy.get('[class="dropdown"]').contains('Payment Gateway Project')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#fff');
        cy.get('[class="dropdown"]').contains('New Tours')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#fff');
        cy.get('[class="align-center"]').contains('Add Tariff Plans')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#25a2c3');
        cy.get('[class="3u 12u$(small)"]').contains('Monthly Rental')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#25a2c3');
        cy.get('[class="3u 12u$(small)"]').contains('Free Local Minutes')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#25a2c3');
        cy.get('[class="3u 12u$(small)"]').contains('Free International Minutes')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#25a2c3');
        cy.get('[class="3u 12u$(small)"]').contains('Free SMS Pack')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#25a2c3');
        cy.get('[class="3u 12u$(small)"]').contains('Local Per Minutes Charges')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#25a2c3');
        cy.get('[class="3u 12u$(small)"]').contains('International Per Minutes Charges')
            .should('be.visible')
            .should('have.css', 'color').
        and('be.colored', '#25a2c3');
        cy.get('[class="3u 12u$(small)"]').contains('SMS Per Charges')
            .should('be.visible')
            .should('have.css', 'color')
            .and('be.colored', '#25a2c3');
        cy.get('[name="submit"]')
            .should('be.visible')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'background-color', 'rgb(246, 117, 94)')
        cy.get('[type="reset"]')
            .should('be.visible')
            .and('have.css', 'font-size', '14px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(114, 122, 130)')
    })
});