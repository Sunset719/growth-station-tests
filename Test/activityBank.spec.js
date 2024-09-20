describe('Testes do Banco de Atividades', () => {

    beforeEach(() => {
      // Loga o usuário antes de acessar o banco de atividades
      cy.visit('https://growth-station-client-git-junk-teste-qa-growthmachine.vercel.app');
      cy.get('input[name="email"]').type('alan_nichols_717@growthmachine.com.br');
      cy.get('input[name="password"]').type('senha123');
      cy.get('button[type="submit"]').click();
      
      // Certifica que o usuário está logado
      cy.url().should('include', '/dashboard');
      
      // Visita a página do Banco de Atividades
      cy.visit('/activity-bank');
    });
  
    it('Acessar o banco de atividades', () => {
      cy.url().should('include', '/activity-bank');
      cy.contains('Banco de Atividades').should('be.visible');
    });
  
    it('Visualizar detalhes de uma atividade', () => {
      cy.get('.activity-item').first().click();
      
      // Verifica se os detalhes da atividade são exibidos
      cy.contains('Detalhes da Atividade').should('be.visible');
      cy.contains('Título:').should('be.visible');
      cy.contains('Descrição:').should('be.visible');
    });
  
    it('Editar uma atividade', () => {
      cy.get('.activity-item').first().click();
      cy.get('button.edit').click();
      
      // Edita os campos da atividade
      cy.get('input[name="title"]').clear().type('Novo Título');
      cy.get('textarea[name="description"]').clear().type('Nova descrição da atividade');
      cy.get('button[type="submit"]').click();
      
      // Verifica se as alterações foram salvas
      cy.contains('Atividade atualizada com sucesso').should('be.visible');
      cy.contains('Novo Título').should('be.visible');
    });
  
    it('Filtrar atividades', () => {
      cy.get('input[name="filter"]').type('Atividade 1');
      cy.get('button.filter').click();
      
      // Verifica se o filtro funcionou corretamente
      cy.contains('Atividade 1').should('be.visible');
      cy.contains('Atividade 2').should('not.exist');
    });
  });
  