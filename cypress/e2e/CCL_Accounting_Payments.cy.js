class accountingPayments {
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
    navigate_to_payments() {
        cy.xpath("//i[@class='oi oi-apps']").click(); //menu bar
        cy.wait(1000);
        cy.xpath("//a[contains(.,'Accounting')]").click(); //Accounting
        cy.wait(1000);
        cy.contains('span', "Vouchers").click();
        cy.wait(1000);
        cy.contains('a', 'Payments').click();
        cy.wait(1000);
    }
    auto_approval_layer() {
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
    create_manual_vendor_type_payments() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.wait(1000);
        cy.get("#radio_field_0_manual").click();
        cy.wait(1000);
        cy.get("#radio_field_1_vendor").click();
        cy.wait(1000);
        cy.get("#partner_id_1").type("A & Brothers").type('{Enter}');
        cy.wait(1000);
        cy.get("#approval_for_payment_bill_ids_0").type("APB/2024/").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Payments:\nPurpose : Automation Testing\nApproval Type : Manual\nPayments Type : Purchase\n")
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="account_id"]').type("333222111 Test Account Expense").type('{Enter}');
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="debit"]').type("100").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="account_id"]').type("333222141 Test CASH").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="credit"]').type("100")
        cy.wait(1000);
        this.manual_approval_layer();
        cy.wait(1000);
    }
    create_manual_others_type_payments() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.wait(1000);
        cy.get("#radio_field_0_manual").click();
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
        cy.get("#narrations_0").type("Creating Payments:\nPurpose : Automation Testing\nApproval Type : Manual\nPayment Type : Others\n")
        cy.wait(1000);
        this.manual_approval_layer();
    }
    create_auto_vendor_type_payments() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.wait(1000);
        cy.get("#radio_field_0_auto").click();
        cy.wait(1000);
        cy.get("#radio_field_1_vendor").click();
        cy.wait(1000);
        cy.get("#partner_id_1").type("A & Brothers").type('{Enter}');
        cy.wait(1000);
        cy.get("#approval_for_payment_bill_ids_0").type("APB/2024/").type('{Enter}');
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Payments:\nPurpose : Automation Testing\nApproval Type : Auto\nPayment Type : Vendor\n")
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="account_id"]').type("333222111 Test Account Expense").type('{Enter}');
        cy.wait(1000);
        cy.get('[data-tooltip-delay="1000"][name="debit"]').type("100").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="account_id"]').type("333222141 Test CASH").type('{Enter}');
        cy.wait(1000);
        cy.get('table tr:nth-child(2) [data-tooltip-delay="1000"][name="credit"]').type("100")
        cy.wait(1000);
        this.auto_approval_layer();
        cy.wait(1000);
    }
    create_auto_others_type_payments() {
        cy.get('.d-xl-inline-flex > [data-hotkey="c"]').click();
        cy.wait(1000);
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
        cy.get("#narrations_0").type("Creating Payments:\nPurpose : Automation Testing\nApproval Type : Auto\nPayment Type : Others\n")
        cy.wait(1000);
        this.auto_approval_layer();
    }
    reset_to_draft() {
        cy.get('.breadcrumb-item > .fw-bold').click();
        cy.wait(1000);
        cy.get('table tr:nth-child(1) [data-tooltip-delay="1000"][name="name"]').click();
        cy.wait(1000);
        cy.contains("Reset to Draft").should('have.text','Reset to Draft');
        cy.contains("Reset to Draft").click();
        cy.wait(1000)
        cy.get("#radio_field_2_manual").click();
        cy.wait(1000);
        cy.get("#radio_field_3_others").click();
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
        cy.get("#radio_field_6_auto").click();
        cy.wait(1000);
        cy.get("#radio_field_7_others").click();
        cy.wait(1000);
        cy.get("#narrations_0").type("Creating Payments:\nPurpose : Automation Testing\nApproval Type : Manual\nPayment Type : Others\n")
        cy.wait(1000);
        cy.contains("Submit").should('have.text', 'Submit');
        cy.wait(1000);
        cy.contains("Cancel Entry").should('have.text','Cancel Entry');
        cy.wait(1000);
        cy.contains("Submit").click();
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

describe("Accounting Payments Full TestSuite", function () {
    const controller = new accountingPayments();
    function login_navigate_merge() {
        controller.login();
        controller.navigate_to_payments();
        controller.create_manual_vendor_type_payments();
        controller.create_manual_others_type_payments();
        controller.create_auto_vendor_type_payments();
        controller.create_auto_others_type_payments();
        controller.reset_to_draft();
        controller.reverse_entry();
    }

    it("TestSuite", function(){
        login_navigate_merge();
    })

    Cypress.on('uncaught : exception', () => false);
})