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

    it('fails with wrong credentials', function() {
      cy.get('#username').type('max')
      cy.get('#password').type('wrong')
      cy.get('#loginButton').click()
    })
  })

  describe('When logged in', function() {
    beforeEach(function() {
      cy.get('#username').type('max')
      cy.get('#password').type('lpw')
      cy.get('#loginButton').click()
    })

    it('A blog can be created', function() {
      cy.get('#newBlogFormToggle').click()
      cy.get('#newBlogTitleInput').type('Test new blog')
      cy.get('#newBlogAuthorInput').type('Test new blog author')
      cy.get('#newBlogUrlInput').type('Test new blog url')
      cy.get('#createNewBlogSubmitButton').click()
      cy.contains('Test new blog Test new blog author')
    })

    it('The user can like a blog', function() {
      cy.get('#newBlogFormToggle').click()
      cy.get('#newBlogTitleInput').type('Test new blog')
      cy.get('#newBlogAuthorInput').type('Test new blog author')
      cy.get('#newBlogUrlInput').type('Test new blog url')
      cy.get('#createNewBlogSubmitButton').click()
      cy.get('#likeButton').click()
      cy.contains('1')
    })

    it('The user can delete a blog', function() {
      cy.get('#newBlogFormToggle').click()
      cy.get('#newBlogTitleInput').type('Test new blog')
      cy.get('#newBlogAuthorInput').type('Test new blog author')
      cy.get('#newBlogUrlInput').type('Test new blog url')
      cy.get('#createNewBlogSubmitButton').click()
      cy.get('#deleteButton').click()
      cy.should('not.contain', 'Test new blog Test new blog author')
    })

    it('Blogs are ordered by likes', function() {
      cy.createBlog({ title:'Most liked blog',author:'Popular one',url:'yes.io',likes:1000 })
      cy.createBlog({ title:'Less liked blog',author:'Nobody likes you',url:'no.io',likes:0 })
      cy.get('#blogList').first().contains('Most liked blog')
    })
  })


})