describe("Purchase_access_right", function () {
    const pr_user_ids = [{
        userName: "init.user",
        role: "PR Initiator"
    }, 
    {
        userName: "hod.user",
        role: "Head Of Department"
    }, 
    // {
    //     userName: "hoit.user",
    //     role: "Head Of IT Department"
    // },
     {
        userName: "gm.user",
        role: "General Manager"
    },
    // {
    //     userName: "md.user",
    //     role: "Managing Director"
    // },
    // {
    //     userName: "cfo.user",
    //     role: "Cheif Finance Officer"
    // },
    ];

    const rfq_user_ids = [
        {
            userName: "scm.user",
            role: "SCM Initiator"
        }
        // {
        //     userName: "shod.user",
        //     role: "SCM-HOD"
        // }
    ];


    const cs_user_ids = [
        {
            username : "scm.user",
            role : "SCM Initiator"
        },
        {
            username : "shod.user",
            role : "SCM - HOD"
        },
        {
            username : "md.user",
            role : "Managing Director"
        }
    ];


    const fpo_user_ids = [
        {
            userName: "scm.user",
            role: "SCM Initiator"
        },
        {
            userName: "shod.user",
            role: "SCM-HOD"
        },
        {
            userName: "commercial.user",
            role: "Commercial"
        }
    ];


    const mrr_user_ids = [
        {
            userName: "mrr.init.user",
            role: "MRR Initiator"
        },
        {
            userName: "mrr.reviewer.user",
            role: "MRR Reviewer"
        },
        {
            userName: "mrr.approver.user",
            role: "MRR Approver"
        }
    ];

let userIndex; // Define the userIndex variable outside the forEach loop

pr_user_ids.forEach((user, index) => {
    it(`User for Purchase Requisition : ${user.role}`, () => {
        cy.viewport(1360, 760);
        cy.visit('http://192.168.3.187:7071/web/login'); //url
        cy.get('#login').type(user.userName); // user input  
        cy.wait(1000);
        cy.get('#password').type('1234'); // password input
        cy.wait(1000);
        cy.get('.btn').click(); // loggin button click
        cy.wait(1000);
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Purchase')]").click(); //Purchase
        cy.wait(1000);
        userIndex = index; // Assign the index value to userIndex

        if (userIndex === 0) {
            cy.xpath("(//button[contains(.,'New')])[2]").click()
            cy.wait(1000)
            cy.get("#requisition_type_0").select("Local Purchase") // Purchase Type
            cy.wait(1000)
            cy.get("#department_id_0").type("DevOps").type('{Enter}') // Department 
            cy.wait(1000)
            cy.get("#budget_id_0").type("E").type('{Enter}') // Budget
            cy.wait(1000)
            cy.get("#pr_type_0").select('Factory PR') // PR Type Selection
            cy.wait(1000)
            cy.xpath("//a[contains(.,'Add a line')]").click()
            cy.wait(1000)
            cy.get("table.o_list_table>tbody>tr:first-child>td:first-child").type("CCL Test product 1") // Product
            cy.wait(1000)
            cy.get("table.o_list_table>tbody>tr:first-child>td:nth-child(5)").type("5") // Quantity
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Submit')]").should('have.text', 'Submit').click()
            cy.wait(1000)
        }
        
        if (userIndex === 1) {
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
            cy.wait(1000)
            cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve')
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(1000)
            cy.xpath("(//span[contains(.,'Approve')])[1]").click()
            cy.wait(1000)
        }

        if (userIndex === 2) {
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
            cy.wait(1000)
            cy.xpath("(//span[contains(.,'Approve')])[1]").should('have.text', 'Approve')
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(1000)
            cy.xpath("(//span[contains(.,'Approve')])[1]").click()
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
            cy.wait(1000)
            if (user.userName === "md.user") {
                cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment')
                cy.wait(1000)
            }
        }

    })
})

rfq_user_ids.forEach((user, index) => {
    it(`User for Request For Quotation : ${user.role}`, () => {
        cy.viewport(1360, 760);
        cy.visit('http://192.168.3.187:7071/web/login'); //url
        cy.get('#login').type(user.userName); // user input  
        cy.wait(1000);
        cy.get('#password').type('1234'); // password input
        cy.wait(1000);
        cy.get('.btn').click(); // loggin button click
        cy.wait(1000);
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Purchase')]").click(); //Purchase
        cy.wait(1000);
        userIndex = index; // Assign the index value to userIndex

        if (userIndex === 0) {
            cy.xpath("//span[contains(.,'Orders')]").click()
            cy.wait(1000)
            cy.xpath("//a[contains(.,'Request For Quotation')]").click()
            cy.wait(1000)
            cy.xpath("(//button[contains(.,'New')])[2]").click()
            cy.wait(1000)
            cy.get("#purchase_request_ids_0").type("PR").type('{Enter}')
            cy.wait(1000)
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(7)").type('1').type('{Enter}')
            cy.wait(1000)
            // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:nth-child(2)>td:nth-child(7)").type('60')
            // cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(500)
            cy.xpath("(//span[contains(.,'Confirm')])[1]").should('have.text', 'Confirm')
            cy.wait(500)
            cy.xpath("(//span[contains(.,'Confirm')])[1]").click()
            cy.wait(1000)
            cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment')
            cy.wait(1000)
            if (user.userName === 'shod.user') {
                cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
                cy.wait(1000)
            }
            cy.xpath("(//span[contains(.,'Quotation')])[1]").click()          //Qoutation button
            cy.wait(1000)
            cy.get("#partner_ids_0").type('DreamIT').type('{Enter}')         //Vendor select
            cy.wait(1000)
            cy.get("#partner_ids_0").type('Local Vendor 1').type('{Enter}')         //Vendor select
            cy.wait(1000)
            cy.xpath("(//span[contains(.,'Create Quotation')])[1]").should('have.text', 'Create Quotation')   //assertion
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(500)
            cy.xpath("(//span[contains(.,'Create Quotation')])[1]").click()    //save qoatation
            cy.wait(1000)
            // cy.xpath("(//span[contains(.,'Quotation')])[2]").click()          //Qoutation button
            // cy.wait(1000)
            // cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
            // cy.wait(1000)
        }
    })
})

cs_user_ids.forEach((user, index) => {
    it(`Comparative Statement : <User Info> ${user.role}`, function(){
        cy.viewport(1400,780)
        cy.visit("http://192.168.3.187:7071/web/login") 
        cy.get("#login").type(user.username)
        cy.wait(1000)
        cy.get("#password").type("1234")
        cy.wait(500)
        cy.get(".btn").click()
        cy.xpath("//i[@class='oi oi-apps']").click()
        cy.xpath("//a[contains(.,'Purchase')]").click()
        cy.wait(1000)
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Comparative Statement')]").click()
        cy.wait(1000)
        userIndex = index

        if(userIndex === 0) {
            cy.xpath("(//button[contains(.,'New')])[2]").click()
            cy.wait(1000)
            cy.get("#request_for_quotation_id_0").clear()
            cy.wait(500)
            cy.get("#request_for_quotation_id_0").type("RFQ")
            cy.wait(500)
            cy.get("#request_for_quotation_id_0").type('{Enter}')
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Compare')]").should("have.text",'Compare')
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Compare')]").click()
            cy.wait(1000)
            cy.xpath("(//button[contains(.,'Edit')])[2]").click()
            cy.wait(1000)
            cy.xpath("(//input[@type='text'])[1]").clear().type('1').type('{Enter}')
            cy.wait(1000)
            cy.xpath("(//input[@type='text'])[2]").clear().type('1').type('{Enter}')
            cy.wait(1000)      
            cy.xpath("(//button[contains(.,'Save')])[2]").click()
            cy.wait(1000)
            cy.xpath("(//button[contains(.,'Go Back')])[1]").click()
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Send For Approval')]").should('have.text', 'Send For Approval')    //Assertion
            cy.xpath("//span[contains(.,'Send For Approval')]").click()          //send for approval
            cy.wait(1000)
        }

        if (userIndex === 1) {
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Approve')]").should('have.text', 'Approve')    //Assertion
            cy.xpath("//span[contains(.,'Approve')]").click()          //approved by SCM HOD
            cy.wait(2000)        
        }

        if (userIndex === 2) {
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
            cy.wait(1000)
            cy.xpath("(//span[contains(.,'Approve')])[1]").click()          //approved by MD
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Amendment')]").should('have.text', 'Amendment')   //assertion
            cy.wait(2000)  
            cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')   //assertion
            cy.wait(2000)              
        }
    })
})

fpo_user_ids.forEach((user, index) => {
    it(`User for Foreign Purchase Order : ${user.role}`, () => {
        cy.viewport(1360, 760);
        cy.visit('http://192.168.3.187:7071/web/login'); //url
        cy.get('#login').type(user.userName); // user input  
        cy.wait(1000);
        cy.get('#password').type('1234'); // password input
        cy.wait(1000);
        cy.get('.btn').click(); // loggin button click
        cy.wait(1000);
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Purchase')]").click(); //Purchase
        cy.wait(1000);
        cy.xpath("//span[contains(.,'Orders')]").click()
        cy.wait(1000)

        userIndex = index; // Assign the index value to userIndex

        if (userIndex === 0) {
            cy.xpath("//a[contains(.,'Foreign Purchase')]").click()
            cy.wait(2000)
            cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
            cy.wait(1000)
            cy.get("#purchase_base_0").select('Comparative Statement')    //select
            cy.wait(1000)
            cy.get("#port_of_arrival_0").type("Chittagong")
            cy.wait(1000)
            cy.get("#partner_id_1").type("DreamIT Ltd").type('{Enter}') // CS
            cy.wait(1000)
            cy.get("#rfq_id_0").type("RFQ/2024").type('{Enter}')
            cy.wait(1000)
            cy.get("#cs_ids_0").type("CS-2024").type('{Enter}')
            cy.wait(1000)
            cy.xpath('/html/body/div[1]/div/div/div[2]/div/div[1]/div[2]/div[4]/div[2]/div/div[1]/div/div[2]/table/tbody/tr[1]/td[7]').type("10")
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(500)
            cy.xpath("(//span[contains(.,'Submit')])[1]").should('have.text', 'Submit').click()
            cy.wait(1000)
        }

        if (userIndex === 1) {
            cy.xpath("//a[contains(.,'Foreign Purchase')]").click()
            cy.wait(2000)
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Confirm Order')]").should('have.text', 'Confirm Order').click()
            cy.wait(500)
            cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment')
            cy.wait(500)
            cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
            cy.wait(500)
        }

        if (userIndex === 2) {

            // Proforma Invoice

            cy.xpath("//a[contains(.,'Proforma Invoice')]").click()
            cy.wait(2000)
            cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
            cy.wait(1000)

            var RandomNumber = Math.floor(Math.random() * 100000)             // Random Number variable 
            const formattedNumber = `CCL/PI/${RandomNumber}`; // Customize the format

            cy.get("#name_0").clear()
            cy.get("#name_0").type(formattedNumber)     // Rename 
            cy.wait(1000)
            cy.get("#partner_id_0").type('DreamIT Ltd').type('{Enter}')         //Vendor select 
            cy.wait(2000)
            cy.get("#purchase_order_id_0").click()
            cy.wait(2000)
            cy.get("#purchase_order_id_0").type('{Enter}')   //FPO select
            cy.wait(2000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.xpath("//span[contains(.,'Confirm')]").click()
            cy.wait(1000)

            // LC

            cy.xpath("//span[contains(.,'Orders')]").click()
            cy.wait(1000)
            cy.xpath("//a[contains(.,'LC/TT/LCAF')]").click()
            cy.wait(2000)
            cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
            cy.wait(1000)

            var RandomNumber = Math.floor(Math.random() * 100000)
            const formattedNumber_lc = `CCL/LC/${RandomNumber}`


            cy.get("#name_0").clear()
            cy.get("#name_0").type(formattedNumber_lc)     // Rename 
            cy.wait(1000)
            cy.get("#partner_id_0").type('DreamIT Ltd').type('{Enter}')         //Vendor select 
            cy.wait(1000)
            cy.get("#proforma_invoice_id_0").click()   //PI select
            cy.wait(1000)
            cy.get("#proforma_invoice_id_0").type('{Enter}')
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.xpath("//span[contains(.,'Confirm')]").click()
            cy.wait(2000)

            // Commercial Invoice

            cy.xpath("//span[contains(.,'Orders')]").click()
            cy.wait(1000)
            cy.xpath("//a[contains(.,'Commercial Invoice')]").click()
            cy.wait(2000)
            cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
            cy.wait(1000)

            var RandomNumber = Math.floor(Math.random() * 100000)
            const formattedNumber_ci = `CCL/CI/${RandomNumber}`


            cy.get("#name_0").clear()
            cy.get("#name_0").type(formattedNumber_ci)     // Rename 
            cy.wait(1000)
            cy.get("#lc_details_id_0").click()  //LC select
            cy.wait(1000)
            cy.get("#lc_details_id_0").type('{Enter}')
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(500)
            cy.xpath("//span[contains(.,'Confirm')]").click()
            cy.wait(1000)
            cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text', 'Amendment')
            cy.wait(500)
            cy.xpath("//span[contains(.,'Close')]").should('have.text', 'Close')
            cy.wait(500)
        }
    })
})

mrr_user_ids.forEach((user, index) => {
    it(`Inventory MRR Users : ${user.role}`, function () {
        cy.viewport(1360, 760);
        cy.visit('http://192.168.3.187:7071/web/login'); //url
        cy.get('#login').type(user.userName); // user input  
        cy.wait(1000);
        cy.get('#password').type('1234'); // password input
        cy.wait(1000);
        cy.get('.btn').click(); // loggin button click
        cy.wait(1000);
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Inventory')]").click(); //Purchase
        cy.wait(1000);
        userIndex = index; // Assign the index value to userIndex

        if (userIndex === 0) {
            cy.xpath("//span[contains(.,'Operations')]").click()    // dropdown
            cy.wait(1000)
            cy.xpath("(//a[contains(.,'MRR')])[1]").click()    // MRR select 
            cy.wait(2000)
            cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
            cy.wait(1000)
            cy.get("#mrr_type_0").select('Foreign')         //MRR Type Select
            cy.wait(1000)
            cy.get("#ci_id_0").click()
            cy.wait(1000)
            cy.get("#ci_id_0").type('{Enter}')
            cy.wait(1000)
            // cy.get("#purchase_order_id_0").click()      // Direct and Local
            // cy.wait(500)
            // cy.get("#purchase_order_id_0").type('{Enter}')
            // cy.wait(500)
            // cy.get("#ci_id_0").click()  // Foreign
            // cy.wait(500)
            // cy.get("#ci_id_0").type('{Enter}')
            // cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(500)
            cy.xpath("(//span[contains(.,'Send For Review')])[1]").should('have.text', 'Send For Review').click()
            cy.wait(1000)
            cy.xpath("(//button[contains(.,'Ok')])[1]").click()
            cy.wait(1000)
        }

        if (userIndex === 1) {
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Reviewed')]").should('have.text', 'Reviewed')
            cy.xpath("//span[contains(.,'Reviewed')]").click()
            cy.wait(1000)
        }

        if (userIndex === 2) {
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(3)").click()
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Validate')]").should('have.text', 'Validate').click()
            cy.wait(1000)
        }
    })
})
    Cypress.on('uncaught: exception', ()=> false)

})