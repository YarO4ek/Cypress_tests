let maxName = 'oamPJUEhdZQwkldZSBkwtuNdLEqfZvGMgAUHLEPfMWGUBORQXT';
let maxAddress = 'echCqdombkpeqEKNvSOgngKqhUzfMxMWfwwMrUsdldkmhJuIPfPuoOysCYVxBuXldKaIrAGzhPDWTShMhRhKuNJcjKhagVCWvQct';
let maxEmail = 'EnPfVYOHOMOSWXJOKTdtivLmYGqVbNpHciSkXQJEzFbBsaBgZMnCNIthMChaURwUxqXJmJicjNSAJmOSOQIYEybvfkqWfkctTlEVkoXcrwSxBDKffKAVlwcwVoRwQwtoLCTMHfnaBIVcIBYMnOYpZwOehBksSRiKtCHWmUBednMuHHeqKMigtwHONtsiVaZtKDprAARBDTlkHkTvsvYyHxWYoJyEmYyoVhwPtOlFqqvZZoUkIjlrFbFKeMehhVtcRdZUTKBacdTiVtKhzjkohVFKgiBuymTOEXASJBNWnLpAwMSmEIEBhINz@gmail.com';
let maxTel = '123456789112';

describe("check add customer", () => {
    beforeEach(() =>{
        cy.log("open page")
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php');

    })

    it("header", () => {

        cy.header('Testing', 'https://www.guru99.com/software-testing.html')
        cy.header('Selenium', 'https://www.guru99.com/selenium-tutorial.html')
        cy.header('Live Project', 'https://www.guru99.com/live-projects.html')
        cy.header('Java', 'https://www.guru99.com/java-tutorial.html')
    })
     it("Dropdown", () => {

         cy.log('navigation bar check');
         cy.Dropdawn('Selenium ', 'Flash Movie Demo', '../../test/flash-testing.html', 'https://demo.guru99.com/test/flash-testing.html')
         cy.Dropdawn('Selenium ', 'Radio & Checkbox Demo', '../../test/radio.html', 'https://demo.guru99.com/test/radio.html')
         cy.Dropdawn('Selenium ', 'Table Demo', '../../test/table.html', 'https://demo.guru99.com/test/table.html')
         cy.Dropdawn('Selenium ', 'Accessing Link', '../../test/link.html', 'https://demo.guru99.com/test/link.html')
         cy.Dropdawn('Selenium ', 'Ajax Demo', '../../test/ajax.html', 'https://demo.guru99.com/test/ajax.html')
         cy.Dropdawn('Selenium ', 'Inside & Outside Block Level Tag', '../../test/block.html', 'https://demo.guru99.com/test/block.html')
         cy.Dropdawn('Selenium ', 'Delete Customer Form', '../../test/delete_customer.php', 'https://demo.guru99.com/test/delete_customer.php')
         cy.Dropdawn('Selenium ', 'Yahoo', '../../test/yahoo.html', 'https://demo.guru99.com/test/yahoo.html')
         cy.Dropdawn('Selenium ', 'Tooltip', '../../test/tooltip.html', 'https://demo.guru99.com/test/tooltip.html')
         cy.Dropdawn('Selenium ', 'File Upload', '../../test/upload/', 'https://demo.guru99.com/test/upload/')
         cy.Dropdawn('Selenium ', 'Login', '../../test/login.html', 'https://demo.guru99.com/test/login.html')
         cy.Dropdawn('Selenium ', 'Social Icon', '../../test/social-icon.html', 'https://demo.guru99.com/test/social-icon.html')
         cy.Dropdawn('Selenium ', 'Selenium Auto IT', '../../test/autoit.html', 'https://demo.guru99.com/test/autoit.html')
         cy.Dropdawn('Selenium ', 'Selenium IDE Test', '../../test/facebook.html', 'https://demo.guru99.com/test/facebook.html')
         cy.Dropdawn('Selenium ', 'Guru99 Demo Page', '../../test/guru99home/', 'https://demo.guru99.com/test/guru99home/')
         cy.Dropdawn('Selenium ', 'Scrollbar Demo', '../../test/guru99home/scrolling.html', 'https://demo.guru99.com/test/guru99home/scrolling.html')
         cy.Dropdawn('Selenium ', 'File Upload using Sikuli Demo', '../../test/image_upload/', 'https://demo.guru99.com/test/image_upload/')
         cy.Dropdawn('Selenium ', 'Cookie Handling Demo', '../../test/cookie/selenium_aut.php', 'https://demo.guru99.com/test/cookie/selenium_aut.php')
         cy.Dropdawn('Selenium ', 'Drag and Drop Action', '../../test/drag_drop.html', 'https://demo.guru99.com/test/drag_drop.html')
         cy.Dropdawn('Selenium ', 'Selenium DatePicker Demo', '../../test/', 'https://demo.guru99.com/test/')
     })
    it("navigation bar", () => {

        cy.log('navigation bar check');
        cy.getNavi('Insurance Project', 'http://demo.guru99.com/insurance/v1/index.php');
        cy.getNavi('Agile Project', 'http://demo.guru99.com/Agile_Project/Agi_V1/')
        cy.getNavi('Bank Project', 'http://demo.guru99.com/V1/index.php')
        cy.getNavi('Security Project', 'http://demo.guru99.com/Security/SEC_V1/index.php')
        cy.getNavi('Telecom Project', 'http://demo.guru99.com/telecom/index.html')
        cy.getNavi('Payment Gateway Project', 'http://demo.guru99.com/payment-gateway/index.php')
        cy.getNavi('New Tours', 'http://demo.guru99.com/test/newtours/')
    })
    it("Dropdown SEO", () => {

        cy.log('navigation bar check');
         cy.Dropdawn('SEO ', 'Page-1','http://demo.guru99.com/seo/page-1.html')
         cy.Dropdawn('SEO ', 'Page-2','http://demo.guru99.com/seo/page-2.html')
         cy.Dropdawn('SEO ', 'Page-3','http://demo.guru99.com/seo/page-3.html')
         cy.Dropdawn('SEO ', 'Page-4','http://demo.guru99.com/seo/page-4.html')
         cy.Dropdawn('SEO ', 'Page-5','http://demo.guru99.com/seo/page-5.html')
         cy.Dropdawn('SEO ', 'Page-6','http://demo.guru99.com/seo/page-6.html')

     })

    it("+ Case with done",()=> {

        cy.get('[class="left"]')
            .should('be.visible')
            .click()
        cy.go('back')
        cy.get('[for="done"]')
            .should('be.visible')
            .click()
        cy.datas('#fname', 'Yar')
        cy.datas('#lname', 'Mas')
        cy.datas('#email', 'yar@gmail.com')
        cy.datas('[name="addr"]', 'Hello')
        cy.datas('#telephoneno', '8999290290')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
        let customerId;
        cy.location('search').then(path => {
            customerId = path.split('=')[1];
            cy.log(customerId)
            cy.visit('https://demo.guru99.com/telecom/assigntariffplantocustomer.php')
            cy.get('#customer_id').type(customerId)
            cy.get('.fit').click()
            cy.get('p').should('have.text', 'ACTIVE')
        })
    })
    it("+ Case with pending",()=> {

        cy.get('[for="pending"]')
            .should('be.visible')
            .click()
        cy.datas('#fname', 'Yar')
        cy.datas('#lname', 'Mas')
        cy.datas('#email', 'yar@gmail.com')
        cy.datas('[name="addr"]', 'hello')
        cy.datas('#telephoneno', '8999290290')
        cy.get('[value="Submit"]')
            .should('be.visible')
            .click()
        let customerId;
        cy.location('search').then(path => {
            customerId = path.split('=')[1];
            cy.log(customerId)
            cy.visit('https://demo.guru99.com/telecom/assigntariffplantocustomer.php')
            cy.get('#customer_id').type(customerId)
            cy.get('.fit').click()
            cy.get('p').should('have.text', 'INACTIVE')
        })
    })
    it("- Case for Reset button",()=> {

        cy.get('[for="done"]')
            .should('be.visible')
            .click()
        cy.datas('#fname', 'Yar')
        cy.datas('#lname', 'Mas')
        cy.datas('#email', 'yar@gmail.com')
        cy.datas('[name="addr"]', 'Hello')
        cy.datas('#telephoneno', '8999290290')
        cy.resetbutton('https://demo.guru99.com/telecom/addcustomer.php')
    })
    it("- Case for radiobutton",()=> {
        cy.get('[for="done"]')
            .should('be.visible')
            .click()
        cy.datas('#fname', 'Yar')
        cy.datas('#lname', 'Mas')
        cy.datas('#email', 'yar@gmail.com')
        cy.datas('[name="addr"]', 'Hello')
        cy.datas('#telephoneno', '8999290290')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })
    it('Valid Customer max value', () => {

        cy.datas('#fname', maxName)
        cy.log('First Name filled');
        cy.datas('#lname', maxName)
        cy.log('Last Name filled');
        cy.datas('#email', maxEmail)
        cy.log('Email entered');
        cy.datas('textarea[name=addr]', maxAddress)
        cy.log('Address filled');
        cy.datas('#telephoneno', maxTel)
        cy.log('Tel number filled');
        cy.get('input[type="submit"]').
        click()
        cy.url()
            .should('contain', 'access.php?uid')
    })
    it('check colors on the page', () => {
        cy.get('h1')
            .should('be.visible')
            .contains('Add Customer')
            .and('have.css', 'font-size', '29px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'line-height', '38px')
            .and('have.css', 'margin-top', '20px');
        cy.get('h3')
            .should('be.visible')
            .contains('Background Check')
            .and('have.css', 'font-size', '18px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'line-height', '27px')
        cy.get('h3')
            .should('be.visible')
            .contains('Billing address')
            .and('have.css', 'font-size', '18px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'color', 'rgb(37, 162, 195)')
            .and('have.css', 'line-height', '27px')


        cy.get('[name="submit"]')
            .should('be.visible')
            .and('have.css', 'font-size', '15px')
            .and('have.css', 'font-weight', '300')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'background-color', 'rgb(246, 117, 94)')


        cy.get('[type="reset"]')
            .should('be.visible')
            .and('have.css', 'font-size', '15px')
            .and('have.css', 'font-weight', '300')
            .and('have.css', 'color', 'rgb(114, 122, 130)')

    })

});