describe('Failed Server User Flow', () => {
  it('should display navigation bar and message to user if server fails on page load', () => {
    cy.intercept('https://burger-of-the-day-api.vercel.app/api/v1/recipes', {
      method: 'GET',
      statusCode: 404,
      ok: false
    })
    cy.visit('http://localhost:3000')
    cy.get('.error').contains('Oops, something went wrong. Please try again later.')
      .get('.logo').should('be.visible')
      .get('[alt="Bobs Burgers Logo"]').should('be.visible')
      .get('header').should('be.visible')
      .get('.error-img').should('exist')
      .get('.recipe-container').should('not.exist')
  })
})

describe('Bad URL User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/socks')
  })

  it('should display navigation bar upon page load', () => {
    cy.get('.logo').should('be.visible')
      .get('[alt="Bobs Burgers Logo"]').should('be.visible')
      .get('header').should('be.visible')
  })

  it('should display error message, redirect button, and image for user when they type the wrong URL', () => {
    cy.get('.error').contains('Oops, URL not found. Please try again.')
      .get('.redirect-button').contains('Redirect Home')
      .get('.error-img').should('exist')
      .get('.recipe-container').should('not.exist')
  })

  it('should redirect user to Bob\'s Burgers homepage when they click Redirect Home button', () => {
    cy.get('.redirect-button').click()
    cy.intercept('https://burger-of-the-day-api.vercel.app/api/v1/recipes', {
            method: 'GET',
            fixture: '../fixtures/recipes.json'
        })
        cy.visit('http://localhost:3000')
    })

  it('should also redirect user to Bob\'s Burgers homepage when they click Bob\'s Burgers logo', () => {
    cy.get('.logo').click()
    cy.intercept('https://burger-of-the-day-api.vercel.app/api/v1/recipes', {
            method: 'GET',
            fixture: '../fixtures/recipes.json'
        })
        cy.visit('http://localhost:3000')
        .get('.recipe-container').should('exist')
    })
})



