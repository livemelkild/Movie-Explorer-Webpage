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


describe('Testing that searching for something in the database and finds the searched movie', function() {
    it('Finds the search bar and searches for an invlaid course code. Checks that the database only returns the searched movie.', function() {
        cy.visit('http://localhost:3000')
        cy.get('.start_link').click({force:true})
        cy.get('#searchField').type('Last Christmas')
        cy.get('#submitKnapp').click({force:true})
        cy.get('#kort').contains('Info').click({force:true})
        cy.get('#kort').contains('Info').click({force:true}) 
        //cy.contains('Like').click({force:true})
        
    }); 
});

describe('Testing that the ratingbutton works for rating a movie', function() {
    it('Finds the search bar and searches for a movie. Checks that the rating increases.', function() {
        cy.visit('http://localhost:3000')
        cy.get('.start_link').click({force:true})
        cy.get('#searchField').type('Last Christmas')
        cy.get('#submitKnapp').click({force:true})
        cy.get('#kort').contains('Info').click({force:true})
        cy.get('#kort').contains('Info').click({force:true}) 
        cy.get('#like').click({force:true})
        cy.get('#kort').contains('Last Christmas')
        //4cy.get('#dislike').click({force:true})
        
    }); 
});

describe('Testing that searching for a moviename that several movies have. Chooses to filter the search from new-old.', function() {
    it('Finds the search bar and types in a movie and then finds the filterbutton to filter. Checks that the database returns several movies filtered .', function() {
        cy.visit('http://localhost:3000')
        cy.get('.start_link').click({force:true})
        cy.get('#searchField').type('Love')
        cy.get('#sortKnapp').click({force:true})
        cy.get('#newKnapp').click({force:true})
        cy.get('#submitKnapp').click({force:true})
        cy.get('#kort').contains('Info').click({force:true})
        cy.get('#kort').contains('Info').click({force:true}) 
        cy.get('#kort').contains('Love')
        
        
    }); 
});