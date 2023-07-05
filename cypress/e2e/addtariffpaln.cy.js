describe("", () =>{
    beforeEach(() =>{
        cy.log('open page');
        cy.visit('https://demo.guru99.com/telecom/addtariffplans.php')
    })

    it.skip('Check logo button', () =>{
        cy.get('[class="left"]')
            .should('be.visible')
            .click()
        cy.go('back')
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
        cy.datas('#local_minutes', 'ta')
        cy.datas('#inter_minutes', 'la')
        cy.datas('#sms_pack', 'vi')
        cy.datas('#minutes_charges', 'sta')
        cy.datas('#inter_charges', 'ba')
        cy.datas('#sms_charges', 'be')
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
    it.skip("- check textbox with empty fields", () =>{

        cy.datas('#rental1', ' ')
        cy.datas('#local_minutes', ' ')
        cy.datas('#inter_minutes', ' ')
        cy.datas('#sms_pack', ' ')
        cy.datas('#minutes_charges', ' ')
        cy.datas('#inter_charges', ' ')
        cy.datas('#sms_charges', ' ')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip("check textbox with boundary values", () =>{

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

    it.skip("check textbox with special characters", () =>{

        cy.datas('#rental1', '-999')
        cy.datas('#local_minutes', ',399')
        cy.datas('#inter_minutes', ',999')
        cy.datas('#sms_pack', ',99')
        cy.datas('#minutes_charges', ',0')
        cy.datas('#inter_charges', '+1')
        cy.datas('#sms_charges', '+2')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it.skip("check textbox with letters and numbers", () =>{

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



});