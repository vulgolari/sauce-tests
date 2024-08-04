import LoginPage from '../support/pageObjects/LoginPage';

describe('Login Tests', () => {
  let userData;

  before(() => {
    // Carrega os dados do usuário antes de rodar os testes
    // Utiliza o fixture 'credentials' para obter as credenciais armazenadas em um arquivo JSON
    cy.fixture('credentials').then((data) => {
      userData = data; // Armazena os dados de credenciais na variável userData
    });
  });

  it('Successfully logs in with valid credentials', () => {
    const loginPage = new LoginPage(); // Cria uma nova instância da página de login
    loginPage.visit(); // Visita a página de login
    loginPage.fillUsername(userData.validUser.username); // Preenche o campo de nome de usuário com uma credencial válida
    loginPage.fillPassword(userData.validUser.password); // Preenche o campo de senha com uma credencial válida
    loginPage.submit(); // Submete o formulário de login
    cy.url().should('include', '/inventory.html'); // Verifica se a URL inclui '/inventory.html', indicando sucesso no login
  });

  it('Fails to log in with invalid credentials', () => {
    const loginPage = new LoginPage(); // Cria uma nova instância da página de login
    loginPage.visit(); // Visita a página de login
    loginPage.fillUsername(userData.invalidUser.username); // Preenche o campo de nome de usuário com uma credencial inválida
    loginPage.fillPassword(userData.invalidUser.password); // Preenche o campo de senha com uma credencial inválida
    loginPage.submit(); // Submete o formulário de login
    cy.get('[data-test="error"]').should('be.visible'); // Verifica se a mensagem de erro está visível, indicando falha no login
  });
});
