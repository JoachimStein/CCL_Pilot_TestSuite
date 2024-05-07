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
                cy.get("#requisition_type_0").select("Foreign Purchase") // Purchase Type
                cy.wait(1000)
                cy.get("#department_id_0").type("DevOps").type('{Enter}') // Department 
                cy.wait(1000)
                cy.get("#budget_id_0").type("E").type('{Enter}') // Budget
                cy.wait(1000)
                cy.get("#pr_type_0").select('Factory PR') // PR Type Selection
                cy.wait(1000)
                cy.xpath("//a[contains(.,'Add a line')]").click()
                cy.wait(1000)
                cy.get("table.o_list_table>tbody>tr:first-child>td:first-child").type("SW Cement 97% Pure") // Product
                cy.wait(1000)
                cy.get("table.o_list_table>tbody>tr:first-child>td:nth-child(5)").type("10") // Quantity
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
                cy.get("#purchase_base_0").select('Agreement')    //select
                cy.wait(1000)
                // cy.get("#notesheet_id_0").click()
                // cy.get("#notesheet_id_0").type('NS2024/00').type('{Enter}')  // Notesheet
                // cy.wait(1000)
                // cy.get("#partner_id_1").type("DreamIT Ltd").type('{Enter}') // CS
                // cy.wait(1000)
                // cy.get("#rfq_id_0").type("RFQ/2024").type('{Enter}')
                // cy.wait(1000)
                // cy.get("#cs_ids_0").type("CS-2024").type('{Enter}')
                // cy.wait(1000)
                cy.get("#port_of_arrival_0").type("Chittagong")
                cy.wait(1000)
                cy.get("#purchase_request_id_0").type("PR/2024").type("{Enter}")  // Agreement
                cy.wait(1000)
                cy.get("#partner_id_0").type("Vendor 2").type('{Enter}')
                cy.wait(1000)
                cy.get("#agreement_id_0").type("VA").type('{Enter}')
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
                cy.xpath("//span[contains(.,'Cancel')]").should('have.text', 'Cancel')
                cy.wait(500)
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
                cy.get("#partner_id_0").type('Vendor 2').type('{Enter}')         //Vendor select 
                cy.wait(1000)
                cy.get("#purchase_order_id_0").click()
                cy.wait(1000)
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
                cy.get("#partner_id_0").type('Vendor 2').type('{Enter}')         //Vendor select 
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
    Cypress.on('uncaught: exception', () => false)

})