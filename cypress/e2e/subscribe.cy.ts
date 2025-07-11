describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("tom@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").should("contain.text", "Success: tom@aol.com has been successfully subscribed")
        
    })
  
  it("returns an error when the email is already registered", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
      cy.getByData("server-error-message")
          .should("exist")
          .should("contain.text", "Error: john@example.com already exists. Please use a different email address.")
})

    it("shows an error message when the email is invalid", () => {
      cy.getByData("email-input").type("invalid-email")
      cy.getByData("submit-button").click()
      cy.getByData("server-error-message")
        .should("not.exist")
    })

    it.only("shows an error message when the email is missing", () => {
        cy.getByData("email-input")
        cy.getByData("submit-button").click()
        cy.getByData("error-message")
            .should("exist")
            .should("contain.text", "Email is required")
            .should("have.css", "color", "rgb(198, 43, 52)")    
      })
  
})
