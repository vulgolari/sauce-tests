class ProductPage {
  // Navega para a página de produtos
  visit() {
    cy.visit('/v1/inventory.html'); // URL da página de inventário de produtos
  }

  // Retorna a lista de produtos exibidos na página
  productList() {
    return cy.get('.inventory_list'); // Seleciona o elemento que contém a lista de produtos
  }

  // Conta o número de produtos exibidos na página
  countProducts() {
    return this.productList().its('length'); // Retorna o número de produtos na lista
  }

  // Adiciona um produto ao carrinho de compras
  addProductToCart(productName) {
    // Encontra o produto pelo nome e clica no botão para adicioná-lo ao carrinho
    this.productList() // Seleciona a lista de produtos
      .contains(productName) // Encontra o produto pelo nome
      .parent() // Seleciona o elemento pai que contém o nome do produto
      .parent() // Seleciona o elemento pai que contém toda a descrição do produto, incluindo o botão de adicionar ao carrinho
      .find('button') // Encontra o botão de adicionar ao carrinho
      .click(); // Clica no botão para adicionar o produto ao carrinho
  }
}

export default ProductPage;
