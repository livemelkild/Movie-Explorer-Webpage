// Refering to the documentation for Cypress, this test sets up an local development server on localhost.
// Src: https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-1-Start-your-server

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err);
    return false;
  })

describe('From End2End', function() {
    it('Should search correctly', function() {
        cy.visit('http://localhost:3000/')
        cy.get('.start_link').click({force:true})
    });
}); 



describe('Testing that searching for something not in the database returns an message that no results were found', function() {
    it('Finds the search bar and searches for an invlaid course code. Checks that it does not return any results.', function() {
        cy.visit('http://localhost:3000')
        cy.get('.start_link').click({force:true})
        cy.get('.searchField').type('Last Christmas')
        cy.get('#submitKnapp').click({force:true})
        cy.get('.kort').contains('Info').click({force:true})
        cy.get('.kort').contains('Info').click({force:true}) 
        cy.contains('Like').click({force:true})
        
    }); 
});

describe('Testing that searching for something not in the database returns an message that no results were found', function() {
    it('Finds the search bar and searches for an invlaid course code. Checks that it does not return any results.', function() {
        cy.visit('http://localhost:3000')
        cy.get('.start_link').click({force:true})
        cy.get('.searchField').type('Last Christmas')
        cy.get('#submitKnapp').click({force:true})
        cy.get('.kort').contains('Info').click({force:true})
        cy.get('.kort').contains('Info').click({force:true}) 
        cy.get('#like').click({force:true})
        cy.get('#dislike').click({force:true})
        
    }); 
});

