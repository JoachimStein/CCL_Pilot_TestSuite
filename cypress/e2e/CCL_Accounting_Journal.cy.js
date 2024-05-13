class accountingJournal {
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
    navigate_to_journal() {
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Accounting')]").click(); //Accounting
        cy.wait(1000);
        cy.contains('span', "Vouchers").click();
        cy.wait(1000);
        cy.contains('a', 'Journal').click();
        cy.wait(1000);
    }
    create_manual_purchase_type_journal() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.wait(1000);
        cy.get("#radio_field_1_purchase").click();
        cy.wait(1000);
        cy.get("#selected_bill_ids_0").type("BILL/2024/").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Journal:\nPurpose : Automation Testing\nApproval Type : Manual\nJournal Type : Purchase\n")
        cy.wait(1000);
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
    create_manual_sales_type_journal() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.wait(1000);
        cy.get("#radio_field_1_sales").click();
        cy.wait(1000);
        cy.contains('a', "Add a line").click();
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="account_id"]').type("333222111 Test Account Expense");
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="debit"]').type("100").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="account_id"]').type("333222141 Test CASH").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Journal:\nPurpose : Automation Testing\nApproval Type : Manual\nJournal Type : Sales\n")
        cy.wait(1000);
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
    create_manual_others_type_journal() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.wait(1000);
        cy.get("#radio_field_1_others").click();
        cy.wait(1000);
        cy.contains('a', "Add a line").click();
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="account_id"]').type("333222111 Test Account Expense");
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="debit"]').type("100").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="account_id"]').type("333222141 Test CASH").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Journal:\nPurpose : Automation Testing\nApproval Type : Manual\nJournal Type : Others\n")
        cy.wait(1000);
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
    create_auto_purchase_type_journal() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.get("#radio_field_0_auto").click();
        cy.wait(1000);
        cy.get("#radio_field_1_purchase").click();
        cy.wait(1000);
        cy.get("#selected_bill_ids_0").type("BILL/2024/").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Journal:\nPurpose : Automation Testing\nApproval Type : Auto\nJournal Type : Purchase\n")
        cy.wait(1000);
        cy.contains("Submit").should('have.text', 'Submit');
        cy.contains("Checked").should('have.text', 'Checked');
        cy.wait(1020);
        cy.contains("Checked").click();
        cy.wait(1000);
        cy.contains("Cancel Entry").should('have.text','Cancel Entry');
        cy.wait(1000);
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
        cy.contains("Reverse Entry").should('have.text','Reverse Entry');
        cy.wait(1000);
    }
    create_auto_sales_type_journal() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.get("#radio_field_0_auto").click();
        cy.wait(1000);
        cy.get("#radio_field_1_sales").click();
        cy.wait(1000);
        cy.contains('a', "Add a line").click();
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="account_id"]').type("333222111 Test Account Expense");
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="debit"]').type("100").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="account_id"]').type("333222141 Test CASH").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Journal:\nPurpose : Automation Testing\nApproval Type : Auto\nJournal Type : Sales\n")
        cy.wait(1000);
        cy.contains("Submit").should('have.text', 'Submit');
        cy.contains("Checked").should('have.text', 'Checked');
        cy.wait(1020);
        cy.contains("Checked").click();
        cy.wait(1000);
        cy.contains("Cancel Entry").should('have.text','Cancel Entry');
        cy.wait(1000);
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
        cy.contains("Reverse Entry").should('have.text','Reverse Entry');
        cy.wait(1000);
    }
    create_auto_others_type_journal() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.get("#radio_field_0_auto").click();
        cy.wait(1000);
        cy.get("#radio_field_1_others").click();
        cy.wait(1000);
        cy.contains('a', "Add a line").click();
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="account_id"]').type("333222111 Test Account Expense");
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="debit"]').type("100").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="account_id"]').type("333222141 Test CASH").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Journal:\nPurpose : Automation Testing\nApproval Type : Auto\nJournal Type : Others\n")
        cy.wait(1000);
        cy.contains("Submit").should('have.text', 'Submit');
        cy.contains("Checked").should('have.text', 'Checked');
        cy.wait(1020);
        cy.contains("Checked").click();
        cy.wait(1000);
        cy.contains("Cancel Entry").should('have.text','Cancel Entry');
        cy.wait(1000);
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
        cy.contains("Reverse Entry").should('have.text','Reverse Entry');
        cy.wait(1000);
    }
    reset_to_draft() {
        cy.get('table tr:nth-child(32) [data-tooltip-delay="1000"][name="name"]').click();
        cy.wait(1000);
        cy.contains("Reset to Draft").should('have.text','Reset to Draft');
        cy.contains("Reset to Draft").click();
        cy.wait(1000)
        cy.get("#radio_field_0_auto").click();
        cy.wait(1000);
        cy.get("#radio_field_1_others").click();
        cy.wait(1000);
        cy.contains('a', "Add a line").click();
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="account_id"]').type("333222111 Test Account Expense");
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="debit"]').type("100").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="account_id"]').type("333222141 Test CASH").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Journal:\nPurpose : Automation Testing\nApproval Type : Auto\nJournal Type : Others\nPurpose : Reset to Draft")
        cy.wait(1000);
        cy.contains("Submit").should('have.text', 'Submit');
        cy.contains("Checked").should('have.text', 'Checked');
        cy.wait(1020);
        cy.contains("Checked").click();
        cy.wait(1000);
        cy.contains("Cancel Entry").should('have.text','Cancel Entry');
        cy.wait(1000);
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
        cy.contains("Reverse Entry").should('have.text','Reverse Entry');
        cy.wait(1000);
    }
    reverse_entry() {
        cy.get('table tr:nth-child(32) [data-tooltip-delay="1000"][name="name"]').click();
        cy.wait(1000);
        cy.contains("Reverse Entry").should('have.text','Reverse Entry');
        cy.contains("Reverse Entry").click();
        cy.wait(1000)
        cy.get('[data-hotkey="q"][name="refund_moves"]').click();
        cy.wait(1000);
        cy.get("#radio_field_2_auto").click();
        cy.wait(1000);
        cy.get("#radio_field_3_sales").click();
        cy.wait(1000);
        cy.contains('a', "Add a line").click();
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="account_id"]').type("333222111 Test Account Expense");
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="debit"]').type("100").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="account_id"]').type("333222141 Test CASH").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("\nCreating Journal:\nPurpose : Automation Testing\nApproval Type : Auto\nJournal Type : Sales\nPurpose : Reverse Entry");
        cy.wait(1000);
        cy.contains("Submit").should('have.text', 'Submit');
        cy.wait(1020);
        cy.contains("Cancel Entry").should('have.text','Cancel Entry');
        cy.wait(1000);
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
}

describe("Accounting Journal Full TestSuite", function () {
    const controller = new accountingJournal();

    it("Approval Type : Manual , Journal Type : Purchase", () => {
        controller.login();
        controller.navigate_to_journal();
        controller.create_manual_purchase_type_journal();
    })
    it("Approval Type : Manual, Journal Type : Sales", function(){
        controller.login();
        controller.navigate_to_journal();
        controller.create_manual_sales_type_journal();
    })
    it("Approval Type : Manual, Journal Type : Others", function(){
        controller.login();
        controller.navigate_to_journal();
        controller.create_manual_others_type_journal();
    })
    it("Approval Type : Auto, Journal Type : Purchase", function(){
        controller.login();
        controller.navigate_to_journal();
        controller.create_auto_purchase_type_journal();
    })
    it("Approval Type : Auto, Journal Type : Sales", function(){
        controller.login();
        controller.navigate_to_journal();
        controller.create_auto_sales_type_journal();
    })
    it("Approval Type : Auto, Journal Type : Others", function(){
        controller.login();
        controller.navigate_to_journal();
        controller.create_auto_others_type_journal();
    })
    it("Reset to Draft", function(){
        controller.login();
        controller.navigate_to_journal();
        controller.reset_to_draft();
    })
    it("Reverse Entry", function(){
        controller.login();
        controller.navigate_to_journal();
        controller.reverse_entry();
    })
    Cypress.on('uncaught : exception', () => false);
})