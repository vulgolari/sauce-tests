import ProductPage from '../support/pageObjects/ProductPage';
import CartPage from '../support/pageObjects/CartPage';
import CheckoutPage from '../support/pageObjects/CheckoutPage';
import LoginPage from '../support/pageObjects/LoginPage';

describe('Checkout Process', () => {
    // Instancia as classes das páginas de produto, carrinho, checkout e login
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const loginPage = new LoginPage();

    beforeEach(() => {
        // Realiza o login antes de cada teste usando a função de login do LoginPage
        cy.fixture('credentials').then((credentials) => {
            loginPage.login(credentials.validUser.username, credentials.validUser.password);
        });
    });

    it('Completes a purchase', () => {
        // Adicionar produtos ao carrinho
        productPage.visit();  // Navega para a página de produtos
        productPage.addProductToCart('Sauce Labs Backpack');  // Adiciona um produto ao carrinho
        cartPage.visitCart();  // Navega para a página do carrinho

        // Continuar com o checkout
        cartPage.proceedToCheckout();  // Inicia o processo de checkout
        checkoutPage.visitCheckout();  // Navega para a página de checkout
        checkoutPage.fillCheckoutInformation('Larissa', 'Dias', '9090100');  // Preenche as informações de checkout
        checkoutPage.finishCheckout();  // Finaliza o processo de checkout
        checkoutPage.verifyOrderSuccess();  // Verifica se o pedido foi realizado com sucesso
    });

    it('Cancels a purchase during checkout', () => {
        // Adicionar produtos ao carrinho
        productPage.visit();  // Navega para a página de produtos
        productPage.addProductToCart('Sauce Labs Backpack');  // Adiciona um produto ao carrinho
        cartPage.visitCart();  // Navega para a página do carrinho

        // Continuar com o checkout
        cartPage.proceedToCheckout();  // Inicia o processo de checkout
        checkoutPage.visitCheckout();  // Navega para a página de checkout
        checkoutPage.fillCheckoutInformation('John', 'Doe', '90210');  // Preenche as informações de checkout

        // Cancelar o processo de checkout
        checkoutPage.cancelCheckout();  // Cancela o checkout

        // Verificar se o usuário é redirecionado para a página correta
        cy.url().should('include', '/v1/inventory.html');  // Verifica se a URL inclui '/v1/inventory.html'
    });
});
