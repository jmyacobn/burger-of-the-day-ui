describe('Single Recipe Page User Flow', () => {
  beforeEach(() => {
    cy.intercept('https://burger-of-the-day-api.vercel.app/api/v1/recipes', {
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
  })

  it('should display the same recipe that you clicked on the home', () => {
    cy.get('.single-recipe > :nth-child(1)').contains("Eggers Can't Be Cheesers Burger")
      .get('.single-recipe > :nth-child(2)').contains("An all-beef patty topped with American cheese and a fried egg sunny-side up. Served with hot sauce and a piece of lettuce on a plain bun. It’s eggsactly as eggstraordinary as it sounds. Eggs.")
      .get('.single-recipe > :nth-child(3)').contains("Serving Size: Makes 4 burgers.")
      .get('.ingredients').should('exist')
      .get('ul > :nth-child(1)').contains('1 lb ground beef')
      .get('.instructions').should('exist')
      .get('ol > :nth-child(1)').contains('Make 4 patties, season both sides with salt and pepper, and cook the burgers. When they/’re just about done, top with the cheese (2 slices per burger).')
  })

  it('should navigate home when you click the go back button and display all recipes again', () => {
    cy.intercept('https://burger-of-the-day-api.vercel.app/api/v1/recipes', {
      method: 'GET',
      fixture: '../fixtures/recipes.json'
    })
    cy.get('#go-back').click()
    cy.visit('http://localhost:3000')
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
        .get('.price').contains('$5.95')
    })
  })

  it('should also navigate home when you click the Bob\'s burgers logo and display all recipes again', () => {
    cy.intercept('https://burger-of-the-day-api.vercel.app/api/v1/recipes', {
      method: 'GET',
      fixture: '../fixtures/recipes.json'
    })
    cy.get('.logo').click()
    cy.visit('http://localhost:3000')
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
        .get('.price').contains('$5.95')
    })
  })
})