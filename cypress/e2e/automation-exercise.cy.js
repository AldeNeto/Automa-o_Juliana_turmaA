import { faker } from '@faker-js/faker';
 
 describe('Automation Exercise', () => {
    it('TC01: Cadastro do Usuario', () => {
        const nome = faker.person.firstName();
        const sobrenome = faker.person.lastName();
        const email = faker.internet.email();

        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.get('input[data-qa="signup-name"]').type(nome);
        cy.get('input[data-qa="signup-email"]').type(email);
        cy.get('button[data-qa="signup-button"]').click();  
        
        cy.get('input[id="id_gender2"]').check();
        cy.get('input[data-qa="password"]').type('123456');
        cy.get('select[data-qa="days"]').select('10');
        cy.get('select[data-qa="months"]').select('May');
        cy.get('select[data-qa="years"]').select('1990');
        cy.get('input[id="newsletter"]').check();
        cy.get('input[data-qa="first_name"]').type(nome);
        cy.get('input[data-qa="last_name"]').type(sobrenome);
        cy.get('input[data-qa="address"]').type('Rua das Flores, 123');
        cy.get('select[data-qa="country"]').select('Canada');
        cy.get('input[data-qa="state"]').type('PE');
        cy.get('input[data-qa="city"]').type('Caruaru');
        cy.get('input[data-qa="zipcode"]').type('55555');
        cy.get('input[data-qa="mobile_number"]').type('99999-9999');
        cy.get('button[data-qa="create-account"]').click();

        // Assertion to verify account creation
        cy.url().should('include', '/account_created');
        cy.get('h2[data-qa="account-created"]').should('contain.text', 'Account Created!');

     });     

 
  it('TC02: Login Correto', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('a[href="/login"]').click();

    cy.get('input[data-qa="login-email"]').type('teste@teste.com');
    cy.get('input[data-qa="login-password"]').type('123456');
    cy.get('button[data-qa="login-button"]').click();

    
  });

  
  it('TC03: Login Incorreto', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('a[href="/login"]').click();

    cy.get('input[data-qa="login-email"]').type('emailerrado@email.com');
    cy.get('input[data-qa="login-password"]').type('senhaerrada');
    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Your email or password is incorrect!');
  });

  
  it('TC04: Logout', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('a[href="/login"]').click();

    cy.get('input[data-qa="login-email"]').type('teste@teste.com');
    cy.get('input[data-qa="login-password"]').type('123456');
    cy.get('button[data-qa="login-button"]').click();

   
    cy.url().should('include', '/login');
  });


  it('TC05: Visualizar Usuário Logado', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('a[href="/login"]').click();

    cy.get('input[data-qa="login-email"]').type('teste@teste.com');
    cy.get('input[data-qa="login-password"]').type('123456');
    cy.get('button[data-qa="login-button"]').click();

   
  });

  
  it('TC06: Deletar Conta', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('a[href="/login"]').click();

    cy.get('input[data-qa="login-email"]').type('teste@teste.com');
    cy.get('input[data-qa="login-password"]').type('123456');
    cy.get('button[data-qa="login-button"]').click();

    
  });

  
  it('TC08: Visualizar Produtos', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('a[href="/products"]').click();

    cy.url().should('include', '/products');
    cy.get('.product-image-wrapper').should('have.length.at.least', 1);
  });

  
  it('TC09: Buscar Produto', () => {
    cy.visit('https://automationexercise.com/products');

    cy.get('input#search_product').type('dress');
    cy.get('button#submit_search').click();

    cy.contains('Searched Products');
  });

  
  it('TC10: Adicionar Produto ao Carrinho', () => {
    cy.visit('https://automationexercise.com/products');

    cy.get('.product-image-wrapper').first().trigger('mouseover');
    cy.contains('Add to cart').first().click();

    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');
  });

 
  it('TC15: Registrar Antes do Checkout', () => {
    const nome = faker.person.firstName();
    const email = faker.internet.email();

    cy.visit('https://automationexercise.com/products');
    cy.get('.product-image-wrapper').eq(2).trigger('mouseover');
   
   cy.contains('Signup / Login').click()

cy.get('[data-qa="signup-name"]').type('Fulano')
cy.get('[data-qa="signup-email"]').type('teste123@gmail.com')

cy.get('[data-qa="signup-button"]').click()
    
  });

});    
  
