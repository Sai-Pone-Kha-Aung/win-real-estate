describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1280, 768);
  });

  it('displays the Navbar elements correctly', () => {
    cy.get('[data-testid="navbar-left"]').within(() => {
      cy.get('img').should('be.visible');
      cy.get('span').contains('WIN Real Estate').should('be.visible');
      cy.get('a').contains('Home').should('be.visible');
      cy.get('a').contains('About').should('be.visible');
      cy.get('a').contains('Contact').should('be.visible');
      cy.get('a').contains('Agents').should('be.visible');
    });
    cy.get('[data-testid="navbar-right"]').within(() => {
      cy.get('a').contains('Sing In').should('be.visible'); 
      cy.get('a.register').contains('Sign Up').should('be.visible');
    });
  });
});