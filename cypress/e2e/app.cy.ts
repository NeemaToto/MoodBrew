describe('Visit MoodBrew and check for required elements', () => {

    beforeEach(() => {
      console.log('Starting Test');
      cy.visit('http://localhost:3000');
    });
  
    it('should check for at least one image', () => {
      cy.get('img').should('exist');
    });
  
    it('should check for at least two links', () => {
      cy.get('a').should('have.length.gte', 2);
    });
  
    it('should check if a link goes to home', () => {
      cy.get('a').should('exist').and('have.attr', 'href', '/')
    })
  
    it('should check to see if there is an h1 tag on the page', () => {
      cy.get('h1').should('exist')
    })
  
    it('should check to see if there is a header on the page', () => {
      cy.get('header').should('exist')
    })
  
    it('should check to see if there is a footer on the page', () => {
      cy.get('footer').should('exist')
    })
  
    it('should check to see if title tag exists, then check to see that it says "MoodBrew"', () => {
      cy.title().should('exist').and('include', 'MoodBrew')
    })
  
    it('should check document to have a head tag in it, then checks to see if it has meta tags in the head', () => {
      cy.document().should('have.property', 'head').and('have.descendants', 'meta')
    })

    it('should check to see if the navbar burger is not visisble, then change the viewport to Iphone XR and confirm it is now visisble', () => {
      cy.get('[data-testid="burger"]').should('not.be.visible')

      cy.viewport(414, 896)
      cy.get('[data-testid="burger"]').should('be.visible')
    });

    it('should get header, click on a tag called "teas", search in search bar "early grey" and click on the card. Then check if pathname and query matches selected tea', () => {
      cy.get('header').contains('a','Teas').click()
      cy.get('input[type="search"]').type('earl grey')
      cy.get('[data-testid="card-button"]').click()
      cy.location('pathname').should('eq', '/tea')
      cy.location('search').should('include', 'teaName=Earl+grey')
    })
  
  });