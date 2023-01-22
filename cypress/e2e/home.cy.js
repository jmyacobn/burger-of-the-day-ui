describe('Page Load Flows', () => {
  beforeEach(() => {
    cy.intercept('https://burger-of-the-day-api.vercel.app/api/v1/recipes', {
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
        .get('.price').contains('$5.95')
    })
  })
})

describe('Filter by Ingredient Flows', () => {
  beforeEach(() => {
    cy.intercept('https://burger-of-the-day-api.vercel.app/api/v1/recipes', {
      method: 'GET',
      fixture: '../fixtures/recipes.json'
    })
    cy.visit('http://localhost:3000')
  })

  it('should modify search bar input as user types', () => {
    cy.get('[placeholder="Search by ingredient..."]')
      .type('eg')
      .should('have.value', "eg")
      .type('g')
      .should('have.value', "egg")
      .type('s')
      .should('have.value', "eggs")
  })

  it('should filter the recipes that are displayed as user types in search bar', () => {
    cy.get('[placeholder="Search by ingredient..."]')
      .type('egg')
      .should('have.value', "egg")
    cy.get('.recipe-container').within(() => {
      cy.get('.recipe-card').should('have.length', 5)
        .get('.recipe-card').eq(0).find('.name').contains("'New Bacon-ings' - Comes with Bacon")
        .get('.recipe-card').eq(1).find('.name').contains("Eggers Can't Be Cheesers Burger")
        .get('.recipe-card').eq(2).find('.name').contains("Pickle Me Funny Bone Burger")
        .get('.recipe-card').eq(3).find('.name').contains("Chile Relleno-You-Didn't Burger")
        .get('.recipe-card').eq(4).find('.name').contains("Sympathy for the Deviled Egg Burger")
    })
    cy.get('[placeholder="Search by ingredient..."]')
      .type('s')
      .should('have.value', "eggs")
    cy.get('.recipe-container').within(() => {
      cy.get('.recipe-card').should('have.length', 3)
        .get('.recipe-card').eq(0).find('.name').contains("Eggers Can't Be Cheesers Burger")
        .get('.recipe-card').eq(1).find('.name').contains("Chile Relleno-You-Didn't Burger")
        .get('.recipe-card').eq(2).find('.name').contains("Sympathy for the Deviled Egg Burger")
    })
    cy.get('[placeholder="Search by ingredient..."]')
      .type('{selectall}{backspace}artichoke')
      .should('have.value', "artichoke")
    cy.get('.recipe-container').within(() => {
      cy.get('.recipe-card').should('have.length', 2)
        .get('.recipe-card').eq(0).find('.name').contains("Sweaty Palms Burger")
        .get('.recipe-card').eq(1).find('.name').contains("Human Polenta-Pede Burger")
    })
  })

  it('should display all movies again when search bar is cleared', () => {
    cy.get('[placeholder="Search by ingredient..."]')
      .type('{selectall}{backspace}')
      .should('have.value', "")
    cy.get('.recipe-container').within(() => {
      cy.get('.recipe-card').should('have.length', 7)
        .get('.recipe-card').eq(0).find('.name').contains("'New Bacon-ings' - Comes with Bacon")
        .get('.recipe-card').eq(1).find('.name').contains("Eggers Can't Be Cheesers Burger")
        .get('.recipe-card').eq(2).find('.name').contains("Sweaty Palms Burger")
        .get('.recipe-card').eq(3).find('.name').contains("Pickle Me Funny Bone Burger")
        .get('.recipe-card').eq(4).find('.name').contains("Chile Relleno-You-Didn't Burger")
        .get('.recipe-card').eq(5).find('.name').contains("Sympathy for the Deviled Egg Burger")
        .get('.recipe-card').eq(6).find('.name').contains("Human Polenta-Pede Burger")
    })
  })

  it('should display message to user if no recipes match their search and should not display any recipe cards', () => {
    cy.get('[placeholder="Search by ingredient..."]')
      .type('{selectall}{backspace}socks')
      .should('have.value', "socks")
    cy.get('.empty-error').contains('There are currently no recipes available with this ingredient. Please try another ingredient.')
    cy.get('.recipe-container').within(() => {
      cy.get('.recipe-card').should('not.exist')
    })
  })
})

describe('Navigate to single recipe view', () => {
  beforeEach(() => {
    cy.intercept('https://burger-of-the-day-api.vercel.app/api/v1/recipes', {
      method: 'GET',
      fixture: '../fixtures/recipes.json'
    })
    cy.visit('http://localhost:3000')
  })
  
  it('should navigate to single recipe page when user clicks recipe on home page', () => {
    cy.get('#2').click()
  })
})