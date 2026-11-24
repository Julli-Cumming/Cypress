describe('Login', () => {
    it('Realizar login com sucesso', () => {
       //Arrange
       cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
       cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

       //ACT
       cy.get('[data-test="open-menu"]').click()
       
    })
    
    })