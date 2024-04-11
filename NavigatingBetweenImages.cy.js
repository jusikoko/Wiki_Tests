describe('navigating between images',() => {
    it("navigating", () => {
        cy.viewport(1920,1080)
        cy.visit("https://en.wikipedia.org/wiki/Main_Page")
        cy.get('.cdx-text-input__input').type("European Union")
        cy.get('.cdx-button.cdx-button--action-default.cdx-button--weight-normal.cdx-button--size-medium.cdx-button--framed.cdx-search-input__end-button').click()
        cy.get('[alt="Circle of 12 gold stars on a blue background"]').click()
        cy.get('.mw-mmv-next-image').click()
        cy.contains('Map showing the European Union').should('be.visible')
    })
})