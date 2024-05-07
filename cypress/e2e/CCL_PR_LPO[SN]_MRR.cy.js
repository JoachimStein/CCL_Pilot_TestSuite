describe("Purchase_access_right with Special Notesheet LPO", function () {
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


    const lpo_user_ids = [
        {
            userName: "scm.user",
            role: "SCM Initiator"
        },
        {
            userName: "shod.user",
            role: "SCM-HOD"
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
            cy.wait(2000)
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



lpo_user_ids.forEach((user, index) => {
    it(`User for Local Purchase Order : ${user.role}`, () => {
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
        cy.xpath("//a[contains(.,'Local Purchase')]").click()
        cy.wait(2000)
        userIndex = index; // Assign the index value to userIndex

        if (userIndex === 0) {
            cy.xpath("(//button[contains(.,'New')])[2]").click()         //New 
            cy.wait(1000)
            cy.get("#purchase_base_0").select('Special Notesheet')    //select
            cy.wait(1000)
            cy.get("#partner_id_0").type("DreamIT Ltd")
            cy.wait(1000)
            cy.get("#partner_id_0").type('{Enter}')
            cy.wait(1000)
            cy.get("#special_ns_id_0").type("NS/2024").type('{Enter}')
            cy.wait(1000)
            cy.get("#special_ns_id_0").type('{Enter}')
            cy.wait(1000)
            cy.get("#purchase_request_id_0").type("PR/2024/").type('{Enter}')
            cy.wait(1000)
            cy.get("#purchase_request_id_0").type('{Enter}')
            cy.wait(1000)
            cy.get("table[class='o_section_and_note_list_view o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(7)").type("10")
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(500)
            cy.xpath("(//span[contains(.,'Submit')])[1]").should('have.text', 'Submit').click()
            cy.wait(1000)       
        }

        if (userIndex === 1) {
            cy.get("table[class='o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped']>tbody>tr:first-child>td:nth-child(2)").click()
            cy.wait(1000)
            cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
            cy.wait(500)
            cy.xpath("//span[contains(.,'Confirm Order')]").should('have.text', 'Confirm Order').click()
            cy.wait(500)
            cy.xpath("(//span[contains(.,'Amendment')])[1]").should('have.text','Amendment')
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
            cy.get("#mrr_type_0").select('Local')         //MRR Type Select
            cy.wait(1000)
            cy.get("#purchase_order_id_0").click()      // Direct and Local
            cy.wait(500)
            cy.get("#purchase_order_id_0").type('{Enter}')
            cy.wait(500)
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