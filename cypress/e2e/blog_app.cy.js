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

  describe('When logged in', function() {
    beforeEach(function() {
      // log in user here
      cy.get('#username').type('testusername')
      cy.get('#password').type('testpassword')
      cy.get('#login-button').click()
      cy.contains('Tester logged in')
    })

    it('A blog can be created', function() {
      cy.contains('new blog').click()
      cy.get('#blog-title').type('Test blog')
      cy.get('#blog-author').type('Test blog author')
      cy.get('#blog-url').type('Test blog url')
      cy.contains('save').click()
      cy.contains('Test blog')
    })
  })
})