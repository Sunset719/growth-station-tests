describe('Testes de Login', () => {

    beforeEach(() => {
      // Antes de cada teste, visitar a página de login
      cy.visit('https://growth-station-client-git-junk-teste-qa-growthmachine.vercel.app'); 
    });
  
    it('Login com sucesso', () => {
      cy.get('input[name="email"]').type('alan_nichols_717@growthmachine.com.br');
      cy.get('input[name="password"]').type('senha123');
      cy.get('button[type="submit"]').click();
      
      // Verifica se o redirecionamento é bem-sucedido
      cy.url().should('include', '/dashboard');
      cy.contains('Bem-vindo').should('be.visible');
    });
  
    it('Falha de autenticação - credenciais incorretas', () => {
      cy.get('input[name="email"]').type('alan_nichols_717@growthmachine.com.br');
      cy.get('input[name="password"]').type('123456');
      cy.get('button[type="submit"]').click();
      
      // Verifica se a mensagem de erro é exibida
      cy.contains('Credenciais inválidas').should('be.visible');
    });
  
    it('Campo de email vazio', () => {
      cy.get('input[name="password"]').type('senha123');
      cy.get('button[type="submit"]').click();
      
      // Verifica se a mensagem de erro para campo obrigatório é exibida
      cy.contains('Campo obrigatório').should('be.visible');
    });
  
    it('Campo de senha vazio', () => {
      cy.get('input[name="email"]').type('alan_nichols_717@growthmachine.com.br');
      cy.get('button[type="submit"]').click();
      
      // Verifica se a mensagem de erro para campo obrigatório é exibida
      cy.contains('Campo obrigatório').should('be.visible');
    });
  
    it('Formato de e-mail inválido', () => {
      cy.get('input[name="email"]').type('alan_nichols_717@growthmachine');
      cy.get('button[type="submit"]').click();
      
      // Verifica se a mensagem de erro para e-mail inválido é exibida
      cy.contains('Formato de e-mail inválido').should('be.visible');
    });
  });
  