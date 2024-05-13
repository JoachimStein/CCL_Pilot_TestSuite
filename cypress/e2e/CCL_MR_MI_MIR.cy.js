const user = require('/home/stein/Pilot_TestSuite/cypress/fixtures/userCredentials.json')

class mr_mi_mir {

    login(userID) {
        cy.viewport(1600,800);  // webpage window size
        cy.visit('http://192.168.3.187:7071/web/login'); //url
        cy.wait(2000);
        cy.get('#login').type(userID.username);   // user name
        cy.wait(1500);
        cy.get('#password').type(userID.password);   // password
        cy.wait(1500);
        cy.get('.btn').click();     // login button
        cy.wait(2000)
    }
    navigateMR() {
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Inventory')]").click(); //Inventory
        cy.wait(1000);
        cy.contains('span', 'Operations').click();      // Operations
        cy.wait(1000);
        cy.contains('a', 'Material Requisition').click();  // Material Requisition
        cy.wait(1000);
    }
    navigateMI() {
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Inventory')]").click(); //Inventory
        cy.wait(1000);
        cy.contains('span', 'Operations').click();      // Operations
        cy.wait(1000);
        cy.contains('a', 'Material Issue').click();  // Material Requisition
        cy.wait(1000);
    }
    navigateMIR() {
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Inventory')]").click(); //Inventory
        cy.wait(1000);
        cy.contains('span', 'Operations').click();      // Operations
        cy.wait(1000);
        cy.contains('a', 'Material Issue Return').click();  // Material Requisition
        cy.wait(1000);
    }
    create_mr() {
        cy.get('.d-xl-inline-flex > .btn').click();
        cy.get('#department_id_0').type("DevOps").type('{Enter}');
        cy.get('.o_field_x2many_list_row_add > a').click();
        cy.get('[data-tooltip-delay="1000"][name="product_id"]').type('Confidence Cement').type('{Enter}');
        cy.get('[data-tooltip-delay="1000"][name="budget_id"]').type("Entertainment").type('{Enter}');
        cy.get('[data-tooltip-delay="1000"][name="quantity"]').type("10");
        cy.contains('Send to Approver').should('have.text','Send to Approver');
        cy.contains('Cancel').should('have.text','Cancel');
        cy.contains('Send to Approver').click();
        cy.wait(1000)
    }
    approve_mr() {
        cy.get('table tr:first-child [data-tooltip-delay="1000"][name="name"]').click();
        cy.contains('Confirm').should('have.text','Confirm');
        cy.contains('Cancel').should('have.text','Cancel');
        cy.contains('Confirm').click();
        cy.wait(1000)
    }
    create_approve_mi() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.get("#requisition_id_0").type("MR").type('{Enter}');
        cy.wait(1000);
        cy.contains("Approve").should('have.text','Approve');
        cy.contains("Cancel").should('have.text','Cancel');
        cy.contains("Approve").click();
        cy.wait(1000);
    }
    create_approve_mir() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.get("#material_issue_id_0").type("MI").type('{Enter}');
        cy.wait(1000);
        cy.contains("Send For Review").should('have.text','Send For Review');
        cy.contains("Cancel").should('have.text','Cancel');
        cy.contains("Send For Review").click();
        cy.wait(1000);
        cy.contains('Reviewed').should('have.text','Reviewed');
        cy.contains('Reviewed').click();
        cy.wait(1000);
        cy.contains('Validate').should('have.text','Validate');
        cy.contains('Validate').click();
        cy.wait(1000)
    }
}

describe("CCL MR MI MIR TestSuite", function(){
    const obj = new mr_mi_mir();
    it(`User Identity : ${user.MR_INITIATOR.role}`, function(){                 // MR INITIATOR
        obj.login(user.MR_INITIATOR);
        obj.navigateMR();
        obj.create_mr();
    })
    it(`User Identity : ${user.MR_APPROVER.role}`, function(){                  // MR APPROVER
        obj.login(user.MR_APPROVER);
        obj.navigateMR();
        obj.approve_mr();
    })
    it(`User Identity : ${user['MI Initiator'].role}`, function() {
        obj.login(user['MI Initiator']);
        obj.navigateMI();
        obj.create_approve_mi();
    })
    it(`User Identity ; ${user['MIR Initiator'].role}`, function() {
        obj.login(user['MIR Initiator']);
        obj.navigateMIR();
        obj.create_approve_mir();
    })
    Cypress.on('uncaught:exception', () => false)
})