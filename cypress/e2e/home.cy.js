describe('Page Load Flows', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/recipes', {
      method: 'GET',
      fixture: '../fixtures/recipes.json'
    })
    cy.visit('http://localhost:3000')
  })

})