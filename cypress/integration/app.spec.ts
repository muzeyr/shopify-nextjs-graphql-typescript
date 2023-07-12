// cypress/integration/app.spec.js

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "products" and click it
    cy.get('a[href*="products"]').click()

    // The new url should include "/products"
    cy.url().should('include', '/products')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Product Detail')
  })
})

const asModule = {}
export default asModule
