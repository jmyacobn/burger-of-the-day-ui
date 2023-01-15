describe('Page Load Flows', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/recipes', {
      method: 'GET',
      fixture: '../fixtures/recipes.json'
    })
    cy.visit('http://localhost:3000')
  })
  it('should display logo and banner image in the navigation bar upon page load', () => {
    cy.get('.logo').should('be.visible')
      .get('[alt="Bobs Burgers Logo"]').should('be.visible')
      .get('header').should('be.visible')
  })
  it('should display title and search bar for the all recipes page upon load', () => {
    cy.get('h1').contains('Burger of the Day')
      .get('form').should('exist')
      .get('[placeholder="Search by ingredient..."]')
      .should('have.value', "")
  })
  it('should display all recipes upon page load', () => {
    cy.get('.recipe-container').within(() => {
      cy.get('.recipe-card').should('have.length', 7)
        .get('.label').contains('Burger of the Day')
        .get('.recipe-card').eq(0).find('.name').contains("'New Bacon-ings' - Comes with Bacon")
        .get('.recipe-card').eq(1).find('.name').contains("Eggers Can't Be Cheesers Burger")
        .get('.recipe-card').eq(2).find('.name').contains("Sweaty Palms Burger")
        .get('.recipe-card').eq(3).find('.name').contains("Pickle Me Funny Bone Burger")
        .get('.recipe-card').eq(4).find('.name').contains("Chile Relleno-You-Didn't Burger")
        .get('.recipe-card').eq(5).find('.name').contains("Sympathy for the Deviled Egg Burger")
        .get('.recipe-card').eq(6).find('.name').contains("Human Polenta-Pede Burger")
    })
  })
})