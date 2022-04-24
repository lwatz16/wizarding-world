describe('Homepage', () => {
  const apiKey = Cypress.env('apiKey')

  beforeEach(() => {
    cy.visit(Cypress.env('url'))

    cy.intercept('GET', 'https://cfhsik8pad.execute-api.us-east-1.amazonaws.com/dev/characters', {
    fixture: 'characters.json'
    }).as('getCharacters')

  })

  it('should display the base url when the application first loads', () => {
    cy.url()
      .should('eq', Cypress.env('url'))
  })

  it('should display a header, background image and four buttons', () => {
    cy.get('.header')
      .should('exist')
      .contains('Wizarding World')

    cy.get('.filter-btn-container')
      .children('button')
      .should('have.length', 4)
  })

  it('should have three buttons that display a dropdown menu', () => {
    cy.get('button')
      .first()
      .contains('House')
      .click()

    cy.get('.filter-dropdown-menu')
      .should('be.visible')
      .contains('Choose a house')

    cy.get('.filter-dropdown-menu')
      .children('select').within(select => {
        cy.get('option')
          cy.contains('Hufflepuff')
          cy.contains('Ravenclaw')
          cy.contains('Gryffindor')
          cy.contains('Slytherin')
      })
          
    cy.get('button')
      .contains('Ancestry')
      .click()

    cy.get('.filter-dropdown-menu')
      .should('be.visible')
      .contains('Choose ancestry')

    cy.get('.filter-dropdown-menu')
      .children('select').within(select => {
        cy.get('option')
        cy.contains('Half-Blood')
        cy.contains('Pure-Blood')
        cy.contains('Muggleborn')
        cy.contains('Muggle')
        cy.contains('Squib')
      })

    cy.get('button')
      .contains('Student or Staff')
      .click()

    cy.get('.filter-dropdown-menu')
      .should('be.visible')
      .contains('Choose staff or student')

    cy.get('.filter-dropdown-menu')
      .children('select').within(select => {
        cy.get('option')
        cy.contains('Student')
        cy.contains('Staff')      
      })
  })

  it('should be able to click a button called Name then type in search bar to look for a character by their name', () => {
    cy.get('button')
      .contains('Name')
      .click()

    cy.get('form')
      .should('be.visible')
      .children('label')
      .contains('Name:')
      .siblings('input')
      .should('have.attr', 'placeholder')
      .and('contain', 'e.g. Hermoine')
    
  })

  
    
})
