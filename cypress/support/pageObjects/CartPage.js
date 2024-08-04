class CartPage {
  // Navega para a página do carrinho
  visitCart() {
    cy.visit('/v1/cart.html'); // Acessa a URL específica da página do carrinho
  }

  // Verifica se um produto está no carrinho
  verifyProductInCart(productName) {
    cy.get('.cart_list') // Seleciona a lista de itens no carrinho
      .contains(productName) // Verifica se a lista contém o nome do produto
      .should('be.visible'); // Assegura que o nome do produto esteja visível na página
  }

  // Remove um produto do carrinho
  removeProductFromCart(productName) {
    cy.get('.cart_list') // Seleciona a lista de itens no carrinho
      .contains(productName) // Encontra o produto pelo nome
      .parent() // Seleciona o elemento pai que contém o produto e o botão de remoção
      .find('button') // Encontra o botão de remoção
      .click(); // Clica no botão para remover o produto
  }

  // Procede para a página de checkout
  proceedToCheckout() {
    cy.get('.btn_action').click(); // Clica no botão de ação para continuar para o checkout
  }

  // Cancela o processo de checkout
  cancelCheckout() {
    cy.get('.cart_cancel_link').click(); // Clica no link de cancelamento para interromper o checkout
  }
}

export default CartPage;
