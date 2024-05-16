class accountingReceived {
    login() {
        cy.viewport(1600, 800);  // webpage window size
        cy.visit('http://192.168.3.187:7071/web/login'); //url
        cy.wait(2000);
        cy.get('#login').type("qa_user");   // user name
        cy.wait(1500);
        cy.get('#password').type("1234");   // password
        cy.wait(1500);
        cy.get('.btn').click();     // login button
        cy.wait(2000)
    }
    navigate_to_received() {
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Accounting')]").click(); //Accounting
        cy.wait(1000);
        cy.contains('span', "Vouchers").click();
        cy.wait(1000);
        cy.contains('a', 'Received').click();
        cy.wait(1000);
    }
    create_received() {
        let approval_type_string;
        for(let i=0; i<2; i++) {
            cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
            cy.wait(1000);
            if(i == 0) {
                cy.get("#radio_field_0_manual").click();
                cy.wait(1000);
                approval_type_string = "Manual";
            }
            if(i == 1) {
                cy.get("#radio_field_0_auto").click();
                cy.wait(1000);
                approval_type_string = "Auto";
            }
            cy.get("#narrations_0").type(`Creating Received:\nPurpose : Automation Testing\nApproval Type : ${approval_type_string}\n`)
            cy.wait(1000);
            cy.contains('a', "Add a line").click();
            cy.wait(1000);
            cy.get('[data-tooltip-delay="1000"][name="account_id"]').type("333222111 Test Account Expense").type('{Enter}');
            cy.wait(1000);
            cy.get('[data-tooltip-delay="1000"][name="debit"]').type("100").type('{Enter}');
            cy.wait(1000);
            cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="account_id"]').type("333222141 Test CASH").type('{Enter}');
            cy.wait(1000);
            if(i == 0) {
                this.manual_approval_layer();
            }
            if(i == 1) {
                this.auto_approval_layer();
                cy.contains("Checked").click();
                cy.wait(1000);
                cy.contains("Reverse Entry").should('have.text','Reverse Entry');
                cy.wait(1000);
            }
        }
    }
    auto_approval_layer() {
        cy.contains("Submit").should('have.text', 'Submit');
        cy.contains("Checked").should('have.text', 'Checked');
        cy.wait(1020);
        cy.contains('Submit').click();
        cy.wait(1000);
        cy.contains("Approve").should('have.text','Approve');
        cy.contains("Reject").should('have.text','Reject');
        cy.contains("Approve").click();
        cy.wait(1000);
        cy.contains("Approve").should('have.text','Approve');
        cy.contains("Reject").should('have.text','Reject');
        cy.contains("Approve").click();
        cy.wait(1000);
        cy.contains('Post').should('have.text','Post');
        cy.contains('Post').click();
        cy.wait(1000);
        cy.contains('Reset to Draft').should('have.text','Reset to Draft');
        cy.wait(1000);
    }
    manual_approval_layer() {
        cy.contains("Submit").should('have.text', 'Submit');
        cy.contains("Checked").should('have.text', 'Checked');
        cy.wait(1020);
        cy.contains("Checked").click();
        cy.wait(1000);
        cy.contains("Cancel Entry").should('have.text','Cancel Entry');
        cy.wait(1000);
        cy.contains("Submit").click();
        cy.wait(1000);
        cy.contains("Post").should('have.text','Post');
        cy.wait(1000);
        cy.contains("Post").click();
        cy.wait(1000);
        cy.contains('Reset to Draft').should('have.text','Reset to Draft');
        cy.wait(1000);
        cy.contains("Reverse Entry").should('have.text','Reverse Entry');
        cy.wait(1000);
    }
    reset_to_draft() {
        cy.get('.breadcrumb-item > .fw-bold').click();
        cy.wait(1000);
        cy.get('table tr:nth-child(1) [data-tooltip-delay="1000"][name="name"]').click();
        cy.wait(1000);
        cy.contains("Reset to Draft").should('have.text','Reset to Draft');
        cy.contains("Reset to Draft").click();
        cy.wait(1000)
        cy.get("#radio_field_1_manual").click();
        cy.wait(1000);
        this.manual_approval_layer();
    }
    reverse_entry() {
        cy.get('.breadcrumb-item > .fw-bold').click();
        cy.wait(1000);
        cy.get('table tr:nth-child(1) [data-tooltip-delay="1000"][name="name"]').click();
        cy.wait(1000);
        cy.contains("Reverse Entry").should('have.text','Reverse Entry');
        cy.contains("Reverse Entry").click();
        cy.wait(1000)
        cy.get('[data-hotkey="q"][name="refund_moves"]').click();
        cy.wait(1000);
        cy.get("#radio_field_3_auto").click();
        cy.wait(1000);
        this.auto_approval_layer();
        cy.wait(1000);
    }
}
describe("Accounting Payments Full TestSuite", function () {
    const controller = new accountingReceived();
    function receivedFlow() {
        controller.login();
        controller.navigate_to_received();
        controller.create_received();
        controller.reset_to_draft();
        controller.reverse_entry();
    }
    it("TestSuite", function(){
        receivedFlow();
    })
    Cypress.on('uncaught : exception', () => false);
})