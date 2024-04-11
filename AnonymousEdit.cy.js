describe('anonymous user trying to edit',() => {
    it("edit", () => {
        cy.viewport(1920,1080)
        cy.visit("https://en.wikipedia.org/wiki/Main_Page")
        cy.get('.cdx-text-input__input').type("Karpacz")
        cy.get('.cdx-button.cdx-button--action-default.cdx-button--weight-normal.cdx-button--size-medium.cdx-button--framed.cdx-search-input__end-button').click()
        cy.get('[id="ca-edit"]').click()
        cy.contains('log in').should('be.visible')
        cy.contains('create an account').should('be.visible')
    })
})