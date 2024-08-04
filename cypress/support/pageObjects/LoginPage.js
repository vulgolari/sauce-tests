class LoginPage {
  // Navega para a página de login
  visit() {
    cy.visit('/v1/'); // URL da página de login
  }

  // Preenche o campo de nome de usuário
  fillUsername(username) {
    cy.get('[data-test="username"]').type(username); // Seleciona o campo de nome de usuário e insere o valor
  }

  // Preenche o campo de senha
  fillPassword(password) {
    cy.get('[data-test="password"]').type(password); // Seleciona o campo de senha e insere o valor
  }

  // Submete o formulário de login
  submit() {
    cy.get('#login-button').click(); // Clica no botão de login
  }   
  
  // Realiza o login utilizando as funções acima
  login(username, password) {
    this.visit(); // Navega para a página de login
    this.fillUsername(username); // Preenche o nome de usuário
    this.fillPassword(password); // Preenche a senha
    this.submit(); // Submete o formulário de login
  }
}

export default LoginPage;
