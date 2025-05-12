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

  it('renders correctly with all main elements', () => {
    // Check for the presence of the main title
    cy.get('[data-testid="home-page"]')
      .should('exist')
      .and('contain', 'Find Real Estate & Get Your Dream Home');

    // Check for the presence of the introductory paragraph
    cy.get('[data-testid="home-page"]')
      .should('exist')
      .and('contain', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.');

    // Check for the presence of the SearchBar component
    cy.get('[data-testid="home-page"]').within(() => {
      cy.get('form').should('exist'); // Assuming SearchBar renders a form
    });

    // Check for the presence of the boxes
    cy.get('.homePage .textContainer .boxes .box').should('have.length', 3);

    // Optionally, check for specific content in boxes
    cy.get('.homePage .textContainer .boxes .box').eq(0).should('contain', 'Years of Experience');
    cy.get('.homePage .textContainer .boxes .box').eq(1).should('contain', 'Awards Gained');
    cy.get('.homePage .textContainer .boxes .box').eq(2).should('contain', '1200+'); // Assuming there's more content for the third box
  });

  it('allows the user to input search and navigate to the list page', () => {
    cy.get('input[name="City"]').type('New York');

    cy.get('input[name="minPrice"]').type('500');

    cy.get('input[name="maxPrice"]').type('5000');

    cy.get('form').within(() => {
      cy.get('button').click();
    });

    cy.url().should('include', '/list');

  });
});