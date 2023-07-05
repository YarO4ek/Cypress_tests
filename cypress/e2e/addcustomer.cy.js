let user;

describe("UIcheck", () => {


    it("header", () => {
        cy.log('open page');
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php')
        cy.header('Testing', 'https://www.guru99.com/software-testing.html')
        cy.header('Selenium', 'https://www.guru99.com/selenium-tutorial.html')
        cy.header('Live Project', 'https://www.guru99.com/live-projects.html')
        cy.header('Java', 'https://www.guru99.com/java-tutorial.html')
    })
     it("Dropdown", () => {
         cy.log("open page")
         cy.visit('https://demo.guru99.com/telecom/addcustomer.php');
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
        cy.log("open page")
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php');
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
        cy.log("open page")
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php');
        cy.log('navigation bar check');
         cy.Dropdawn('SEO ', 'Page-1','http://demo.guru99.com/seo/page-1.html')
         cy.Dropdawn('SEO ', 'Page-2','http://demo.guru99.com/seo/page-2.html')
         cy.Dropdawn('SEO ', 'Page-3','http://demo.guru99.com/seo/page-3.html')
         cy.Dropdawn('SEO ', 'Page-4','http://demo.guru99.com/seo/page-4.html')
         cy.Dropdawn('SEO ', 'Page-5','http://demo.guru99.com/seo/page-5.html')
         cy.Dropdawn('SEO ', 'Page-6','http://demo.guru99.com/seo/page-6.html')

     })

    it("+ Case with done",()=> {
        cy.log('open page');
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php')
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
        cy.wait(10000);
        cy.visit('https://demo.guru99.com/telecom/assigntariffplantocustomer.php')
        cy.wait(10000);
        cy.get ('[type="submit"]')
            .should('be.visible')
            .click();



    })
    it("+ Case with pending",()=>{
        cy.log('open page');
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php')

        cy.get('[for="pending"]')
            .should('be.visible')
            .click()
        cy.datas('#fname', 'Yar')
        cy.datas('#lname', 'Mas')
        cy.datas('#email', 'yar@gmail.com')
        cy.datas('[name="addr"]', 'hello')
        cy.datas('#telephoneno', '8999290290')
        cy .get('[value="Submit"]')
            .should('be.visible')
            .click()
        cy.get('[class="button"]')
            .click()
        cy.wait(10000);
        cy.visit('https://demo.guru99.com/telecom/assigntariffplantocustomer.php')
        cy.wait(10000);
        cy.get ('[type="submit"]')
            .should('be.visible')
            .click();
    })
    it("- Case for Reset button",()=> {
        cy.log('open page');
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php')
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
        cy.log('open page');
        cy.visit('https://demo.guru99.com/telecom/addcustomer.php')
        cy.datas('#fname', 'Yar')
        cy.datas('#lname', 'Mas')
        cy.datas('#email', 'yar@gmail.com')
        cy.datas('[name="addr"]', 'Hello')
        cy.datas('#telephoneno', '8999290290')
        cy.get('[name="submit"]')
            .should('be.visible')
            .click()
    })



});