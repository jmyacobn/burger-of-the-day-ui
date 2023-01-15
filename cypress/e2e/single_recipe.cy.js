describe('Single Recipe Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/recipes', {
      method: 'GET',
      fixture: '../fixtures/recipes.json'
    })
    cy.visit('http://localhost:3000')
    cy.get('#2').click()
  })

  it('should display nav bar, go back button, and single recipe details on single recipe view', () => {
    cy.get('.logo').should('be.visible')
      .get('[alt="Bobs Burgers Logo"]').should('be.visible')
      .get('header').should('be.visible')
      .get('#go-back').contains('Go Back')
      .get('.single-recipe').should('exist')
      .get('.single-recipe > :nth-child(1)').contains("Eggers Can't Be Cheesers Burger")
      .get('.single-recipe > :nth-child(2)').contains("An all-beef patty topped with American cheese and a fried egg sunny-side up. Served with hot sauce and a piece of lettuce on a plain bun. It’s eggsactly as eggstraordinary as it sounds. Eggs.")
      .get('.single-recipe > :nth-child(3)').contains("Serving Size: Makes 4 burgers.")
      .get('.ingredients').should('exist')
      .get('ul > :nth-child(1)').contains('1 lb ground beef')
      .get('.instructions').should('exist')
      .get('ol > :nth-child(1)').contains('Make 4 patties, season both sides with salt and pepper, and cook the burgers. When they/’re just about done, top with the cheese (2 slices per burger).')
  })
})