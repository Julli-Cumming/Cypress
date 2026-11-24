describe('Carrinho', () => {

    it('Adicionar um produto ao carrinho com sucesso', () => {
       //Arrange
       cy.visit('https://www.saucedemo.com')

       cy.get('[data-test="username"]').type('standard_user')

      cy.get('[data-test="password"]').type('secret_sauce')

      cy.get('[data-test="login-button"]').click()

    //Act
     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    
     // Assert
     cy.get('.shopping_cart_badge')
     .should('be.visible')
     .and('have.text', '1')
     cy.get('[data-test="shopping-cart-link"]').click()
   

    })
})
     it.only('Adicionar mais um produto ao carrinho', () => {{
          //Arrange
       cy.visit('https://www.saucedemo.com')
       cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      
       //Act
     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
     cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()


     //Assert
           cy.get('.shopping_cart_badge')
     .should('be.visible')
     .and('have.text', '2')
     cy.get('[data-test="shopping-cart-link"]').click()
     cy.get('[data-test="checkout"]').click()
     }
})