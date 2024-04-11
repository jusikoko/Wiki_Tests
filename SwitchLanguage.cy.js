describe('anonymous user trying to edit',() => {
    it("edit", () => {
        cy.viewport(1920,1080)
        cy.visit("https://en.wikipedia.org/wiki/Main_Page")
        cy.get('.cdx-text-input__input').type("Mesopotamia")
        cy.get('.cdx-button.cdx-button--action-default.cdx-button--weight-normal.cdx-button--size-medium.cdx-button--framed.cdx-search-input__end-button').click()
        cy.get('[id="p-lang-btn-checkbox"]').click()
        cy.get('[lang="pl"]').click()
        cy.contains('Mezopotamia').should('be.visible')
        cy.contains('kraina na Bliskim Wschodzie').should('be.visible')
        
    })
})