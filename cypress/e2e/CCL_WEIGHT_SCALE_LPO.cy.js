describe("Weight_Scale", function () {
    const pr_user_ids = [{
        userName: "init.user",
        role: "PR Initiator",
        password: "1234"
    }, 
    {
        userName: "hod.user",
        role: "Head Of Department",
        password: "1234"
    }, 
    // {
    //     userName: "hoit.user",
    //     role: "Head Of IT Department"
    // },
     {
        userName: "gm.user",
        role: "General Manager",
        password: "1234"
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

let userIndex; // Define the userIndex variable outside the forEach loop

for (let i = 0; i < 2; i++) {
    pr_user_ids.forEach((user, index) => {
        it(`User for Purchase Requisition : ${user.role}`, () => {
            cy.viewport(1360, 760);
            cy.visit('http://192.168.3.187:7071/web/login'); //url
            cy.get('#login').type(user.userName); // user input  
            cy.wait(1000);
            cy.get('#password').type(user.password); // password input
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
                cy.get("table.o_list_table>tbody>tr:first-child>td:first-child").type("Chair Executive") // Product
                cy.wait(1000)
                cy.get("table.o_list_table>tbody>tr:first-child>td:nth-child(5)").type("20") // Quantity
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
                cy.get("#purchase_request_id_0").type("PR/2024").type("{Enter}")  // Agreement
                cy.wait(1000)
                cy.get("#partner_id_0").type("Vendor 2").type('{Enter}')
                cy.wait(1000)
                cy.get("#agreement_id_0").type("VA").type('{Enter}')
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
}

    Cypress.on('uncaught: exception', ()=> false)

})