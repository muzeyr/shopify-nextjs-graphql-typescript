/// <reference types="cypress" />

context('Cypress.Commands', () => {
  describe('ProductList', () => {
  
    it('should display products in the default order', () => {
      // İlk render edildiğinde ürünlerin varsayılan sırayla görüntülendiğini kontrol edin
  
      // Ürün kartlarının sayısını kontrol edin
      cy.get('.product-card').should('have.length', 4); // Örnek: product-card sınıfı ürün kartı bileşenini temsil eder, 4 ürün olduğunu varsayıyoruz
  
      // Ürün kartlarının sıralamasını kontrol edin
      cy.get('.product-card').eq(0).contains('Product 1'); // Örnek: İlk ürünün adını kontrol ediyoruz
      cy.get('.product-card').eq(1).contains('Product 2'); // Örnek: İkinci ürünün adını kontrol ediyoruz
      // Diğer ürünleri kontrol etmek için aynı şekilde devam edebilirsiniz
    });
  
    it('should display products in alphabetical order (A-Z)', () => {
      // Ürünleri alfabetik sırayla (A-Z) görüntülemeyi kontrol edin
  
      // Sıralama seçeneklerini değiştirin
      cy.get('select').select('alphabeticalAsc');
  
      // Ürün kartlarının sıralamasını kontrol edin
      cy.get('.product-card').eq(0).contains('Product A'); // Örnek: İlk ürünün adını kontrol ediyoruz
      cy.get('.product-card').eq(1).contains('Product B'); // Örnek
  
})
})
})