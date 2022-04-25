describe('Homepage', () => {
  const apiKey = Cypress.env('apiKey')
  const url = Cypress.env('url')
  const query = 'Hermione%20Granger%20harry%20potter'

  beforeEach(() => {
    cy.visit(url)

    cy.intercept('GET', 'https://cfhsik8pad.execute-api.us-east-1.amazonaws.com/dev/characters', {
      fixture: 'characters.json'
    }).as('getCharacters')

    cy.intercept('GET', `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&rating=pg`, {
      fixture: 'gifs2.json'
    }).as('getGifs')
  })

  it('should display  a header and character details', () => {
    cy.get('button')
      .contains('Ancestry')
      .click()

    cy.get('select')
      .select(3)

    cy.get('a')
      .click()

    cy.url()
      .should('eq', Cypress.env('url') + 'character/hermione-granger')

    cy.get('header')
      .contains('Wizarding World')

    cy.get('h2')
      .contains('Hermione Granger')

    cy.get('img')
      .should('be.visible')
      .should('have.attr', 'alt')

    cy.get('.details-container')
      .children('p')
        .should('have.length', 8)
        .contains('Gryffindor')
  })
  
  it('should have a Back button to return to the home page', () => {
    cy.get('button')
      .contains('Ancestry')
      .click()

    cy.get('select')
      .select(3)

    cy.get('a')
      .click()

    cy.url()
      .should('eq', Cypress.env('url') + 'character/hermione-granger')
    
    cy.get('a')
      .should('have.attr', 'href')
      .and('contain', '/')
    
    cy.url(url)
  })
})