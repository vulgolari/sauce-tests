class CheckoutPage {
  // Navega para a primeira etapa do checkout
  visitCheckout() {
      cy.visit('/v1/checkout-step-one.html'); // Primeira etapa do checkout
  }

  // Preenche as informações de checkout
  fillCheckoutInformation(firstName, lastName, postalCode) {
      cy.get('[data-test="firstName"]').type(firstName); // Campo para o primeiro nome
      cy.get('[data-test="lastName"]').type(lastName); // Campo para o sobrenome
      cy.get('[data-test="postalCode"]').type(postalCode); // Campo para o código postal
      cy.get('.btn_primary').click(); // Botão para continuar para a revisão final
  }

  // Finaliza a compra
  finishCheckout() {
      cy.get('.btn_action').click(); // Botão para finalizar a compra
  }

  // Verifica se a mensagem de sucesso da compra é exibida
  verifyOrderSuccess() {
      cy.get('.complete-header') // Seleciona o elemento que contém a mensagem de sucesso
        .should('contain', 'THANK YOU FOR YOUR ORDER'); // Verifica se a mensagem de sucesso é exibida
  }

  // Cancela o processo de checkout
  cancelCheckout() {
    cy.get('.cart_cancel_link').click(); // Clica no link para cancelar o checkout
  }
}

export default CheckoutPage;
