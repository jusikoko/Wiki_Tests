describe('navigation to the article',() => {
    it("navigation", () => {
        cy.viewport(1920,1080)
        cy.visit("https://en.wikipedia.org/wiki/Main_Page")
        cy.get('.cdx-text-input__input').type("Pyramid")
        cy.get('.cdx-button.cdx-button--action-default.cdx-button--weight-normal.cdx-button--size-medium.cdx-button--framed.cdx-search-input__end-button').click()
        cy.contains('polygon').click()
        cy.contains('simple polygon').should('be.visible')
    })
})