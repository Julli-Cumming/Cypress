
    describe('Login', () => {
    
    it.only('Realizar login informando credencias inválidas', () => {
         //Arrange
       cy.visit('https://www.saucedemo.com/')

       //Act
       cy.get('[data-test="username"]').type('user.invalid')

       cy.get('[data-test="password"]').type('senha')

      cy.get('[data-test="login-button"]').click()

      //Assert
      cy.get('[data-test="error"]')
      .should(
        'contain.text',
        'Username and password do not match any user in this service'
    )
     cy.url().should('eq', 'https://www.saucedemo.com/')
        
 })
    
})