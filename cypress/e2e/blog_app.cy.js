// npm run cypress:open
describe('Blog app e2e test', () => {
  beforeEach(function() {
    // Reset DB states
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    // Create a new user
    const user = {
      name: 'Tester',
      username: 'testusername',
      password: 'testpassword'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.visit('http://localhost:3000')
    cy.contains('username')
    cy.contains('password')
    cy.contains('login')
  })

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('testusername')
      cy.get('#password').type('testpassword')
      cy.get('#login-button').click()
      cy.contains('Tester logged in')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').type('testusername')
      cy.get('#password').type('testpass')
      cy.get('#login-button').click()
      cy.contains('Wrong credentials')
    })
  })
})