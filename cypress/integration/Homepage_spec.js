import { type } from "@testing-library/user-event/dist/type"

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

  it('should display a list of characters that match my selection from a dropdown menu', () => {
    cy.get('button')
      .contains('Ancestry')
      .click()

    cy.get('select')
      .select(2)

    cy.get('.character-list-section')
      .children('.list-container')
      .children('a')
      .should('have.length', 2)
      .should('have.attr', 'href')
      .and('contain', '/character/ron-weasley')
      
    cy.get('.list-container').within(list => {
      cy.contains('Draco Malfoy')
      cy.contains('Ron Weasley')
    })

    cy.get('a')
      .last()
      .should('have.attr', 'href')
      .and('contain', '/character/draco-malfoy')
  })

  it.only('should display a list of characters that match my selection from the search bar', () => {
    cy.get('button')
      .contains('Name')
      .click()

    cy.get('input')
      .type('herm')
      .get('button')
      .contains('Find')
      .click()
      .get('a')
      .should('have.attr', 'href')
      .and('contains', '/character/hermione-granger')
  })


  it.only('should be able to click on a character and navigate to a details page', () => {
    cy.get('button')
      .contains('Ancestry')
      .click()

    cy.get('select')
      .select(3)
    
    cy.get('a')
      .click()

    cy.url()
      .should('eq', Cypress.env('url') + 'character/hermione-granger')
  }) 
})
