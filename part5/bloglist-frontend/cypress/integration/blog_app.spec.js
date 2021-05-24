describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = { name: 'Maxime', username: 'max', password: 'lpw' }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function () {
    cy.get('#loginForm')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('max')
      cy.get('#password').type('lpw')
      cy.get('#loginButton').click()
    })

    it.only('fails with wrong credentials', function() {
      cy.get('#username').type('max')
      cy.get('#password').type('wrong')
      cy.get('#loginButton').click()
    })
  })
})