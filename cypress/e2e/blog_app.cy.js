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

      // create a blog
      cy.contains('new blog').click()
      cy.get('#blog-title').type('First blog')
      cy.get('#blog-author').type('First blog author')
      cy.get('#blog-url').type('First blog url')
      cy.contains('save').click()
    })

    it('A blog can be created', function() {
      cy.contains('new blog').click()
      cy.get('#blog-title').type('Test blog')
      cy.get('#blog-author').type('Test blog author')
      cy.get('#blog-url').type('Test blog url')
      cy.contains('save').click()
      cy.contains('Test blog')
    })

    it('User can like a blog', function() {
      cy.contains('First blog').parent().find('button').click()
      cy.contains('like').click()
      cy.contains('Likes: 1')
    })

    it('Creator of a blog can delete it', function() {
      // create a blog
      cy.contains('new blog').click()
      cy.get('#blog-title').type('Test Blog 2')
      cy.get('#blog-author').type('Test author 2')
      cy.get('#blog-url').type('Test blog url 2')
      cy.contains('save').click()
      // view blog
      cy.contains('Test Blog 2').parent().find('button').click()
      // delete blog
      cy.contains('delete').click()
      cy.contains('Test Blog 2').should('not.exist')
    })
  })
})