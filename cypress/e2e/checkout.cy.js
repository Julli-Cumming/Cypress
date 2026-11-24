describe('Carrinho', () => {
  it('Adicionar um produto ao carrinho com sucesso', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '2')

    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    // Act
    cy.get('[data-test="firstName"]').type('Teste')
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="postalCode"]').type('12345') // CEP/Postal code
    cy.get('[data-test="continue"]').click()

    // Assert
    cy.get('[data-test="total-label"]')
      .should('contain.text', 'Total: $43.18')
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="generate-pdf-order"]').click()
    cy.get('[data-test="back-to-products"]').click()
  })
})
