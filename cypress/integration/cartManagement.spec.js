import ProductPage from '../support/pageObjects/ProductPage';
import CartPage from '../support/pageObjects/CartPage';
import LoginPage from '../support/pageObjects/LoginPage';

describe('Cart Management', () => {
    // Instancia as classes das páginas de produto, carrinho e login
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const loginPage = new LoginPage();

    beforeEach(() => {
        // Realiza o login antes de cada teste usando a função de login do LoginPage
        cy.fixture('credentials').then((credentials) => {
            loginPage.login(credentials.validUser.username, credentials.validUser.password);
        });
        // Navega para a página de produtos após o login
        productPage.visit();
    });

    it('Successfully adds a single product to the cart', () => {
        const productName = 'Sauce Labs Backpack';  // Nome do produto a ser adicionado ao carrinho
        productPage.addProductToCart(productName);  // Adiciona o produto ao carrinho
        cartPage.visitCart();  // Navega para a página do carrinho
        cartPage.verifyProductInCart(productName);  // Verifica se o produto foi adicionado ao carrinho
    });

    it('Successfully removes a single product from the cart', () => {
        const productName = 'Sauce Labs Backpack';  // Nome do produto a ser removido do carrinho
        productPage.addProductToCart(productName);  // Adiciona o produto ao carrinho
        cartPage.visitCart();  // Navega para a página do carrinho
        cartPage.verifyProductInCart(productName);  // Verifica se o produto foi adicionado ao carrinho
        cartPage.removeProductFromCart(productName);  // Remove o produto do carrinho
        cy.get('.cart_list').should('not.contain', productName);  // Verifica se o produto foi removido do carrinho
    });

    it('Successfully adds and then removes multiple products from the cart', () => {
        const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];  // Lista de produtos a serem adicionados e removidos do carrinho
        products.forEach(product => {
            productPage.addProductToCart(product);  // Adiciona cada produto ao carrinho
        });
        cartPage.visitCart();  // Navega para a página do carrinho
        products.forEach(product => {
            cartPage.verifyProductInCart(product);  // Verifica se cada produto foi adicionado ao carrinho
            cartPage.removeProductFromCart(product);  // Remove cada produto do carrinho
            cy.get('.cart_list').should('not.contain', product);  // Verifica se cada produto foi removido do carrinho
        });
    });
});
