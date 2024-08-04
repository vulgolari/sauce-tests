import ProductPage from '../support/pageObjects/ProductPage';
import LoginPage from '../support/pageObjects/LoginPage';

describe('Product View', () => {
  // Instancia as classes das páginas de produto e login
  const productPage = new ProductPage(); // Instância da página de produtos
  const loginPage = new LoginPage(); // Instância da página de login

  beforeEach(() => {
    // Realiza o login antes de cada teste
    // A função login é chamada do objeto loginPage e usa credenciais válidas
    loginPage.login('validUser.username', 'validUser.password'); // Realiza o login com credenciais válidas
    // Navega para a página de produtos após o login
    productPage.visit(); // Visita a página de produtos
  });

  it('Displays products correctly', () => {
    // Verifica se a lista de produtos é exibida corretamente
    // Neste caso, esperamos que a lista tenha 1 produto, ajuste conforme necessário
    productPage.productList().should('have.length', 1); // Verifica se há um produto na lista
  });
});
