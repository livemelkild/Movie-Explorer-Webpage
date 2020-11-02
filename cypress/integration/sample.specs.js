// Refering to the documentation for Cypress, this test sets up an local development server on localhost.
// Src: https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-1-Start-your-server

describe('From End2End', function() {
    it('Should search correctly', function() {
        cy.visit('http://localhost:4000')
        cy.contains('Title')
    });
}); 

describe('Testing that searching for something not in the database returns an message that no results were found', function() {
    it('Finds the search bar and searches for an invlaid course code. Checks that it does not return any results.', function() {
        cy.visit('http://localhost:4000')
        cy.get('.searchField').type('Mean girls')
        cy.get('.buttonSubmit').contains('Submit').click()
        cy.get('h4').contains("no movie with this name")
    }); 
});