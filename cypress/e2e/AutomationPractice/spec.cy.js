/// <reference types="cypress" />

describe('Testes automatizados no Sauce Demo', () => {
  const urlBase = 'https://www.saucedemo.com/';
  const username = 'standard_user';
  const password = 'secret_sauce';
  
  beforeEach(() => {
      cy.visit(urlBase);
  });
  
  it('Deve fazer login com credenciais válidas', () => {
      cy.get('#user-name').type(username);
      cy.get('#password').type(password);
      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
  });
  
  it('Deve exibir erro ao tentar login com credenciais inválidas', () => {
      cy.get('#user-name').type('usuario_errado');
      cy.get('#password').type('senha_errada');
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('be.visible');
  });
  
  it('Deve adicionar um produto ao carrinho', () => {
      cy.loginSauceDemo('https://www.saucedemo.com/');
      cy.get('.inventory_item').first().find('button').click();
      cy.get('.shopping_cart_badge').should('contain', '1');
  });
  
  it('Deve remover um produto do carrinho', () => {
      cy.loginSauceDemo('https://www.saucedemo.com/');
      cy.get('.inventory_item').first().find('button').click(); 
      cy.get('.shopping_cart_link').click(); 
      cy.get('.cart_button').should('be.visible').click();      
      cy.get('.shopping_cart_badge').should('not.exist');
  });
  
  it('Deve finalizar uma compra', () => {
      cy.loginSauceDemo('https://www.saucedemo.com/');
      cy.get('.inventory_item').first().find('button').click();
      cy.get('.shopping_cart_link').click();
      cy.get('#checkout').click();
      cy.get('#first-name').type('Test');
      cy.get('#last-name').type('User');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();
      cy.get('#finish').click();
      cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });
});
// Comando customizado para login
Cypress.Commands.add('loginSauceDemo', (url) => {
  cy.visit(url);
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});
