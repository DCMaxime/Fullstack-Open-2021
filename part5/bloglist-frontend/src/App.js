import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')

  const blogFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogListUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
    const loggedUsernameJSON = window.localStorage.getItem('loggedBlogListUsername')
    if (loggedUsernameJSON) {
      const loggedUsername = JSON.parse(loggedUsernameJSON)
      setName(loggedUsername)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({ username, password, })
      window.localStorage.setItem('loggedBlogListUser', JSON.stringify(user))
      window.localStorage.setItem('loggedBlogListUsername', JSON.stringify(username))
      blogService.setToken(user.token)
      setUser(user)
      setName(username)
      setUsername('')
      setPassword('')
    } catch (exception) {
      // setErrorMessage('Wrong credentials')
      // setTimeout(() => {
      //     setErrorMessage(null)
      // }, 5000)
    }
  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <label htmlFor='Username'> Username : </label>
      <input
        id='username'
        type="text"
        value={username}
        name="Username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <label htmlFor='Password'> Password : </label>
      <input
        id='password'
        type="password"
        value={password}
        name="Password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit">login</button>
    </form>
  )

  const handleClickOnLogout = () => {
    window.localStorage.clear()
    window.location.reload(false)
  }

  const blogList = () => (<> {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)} </>)

  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility()
    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
      })
  }

  const blogForm = () => (
    <Togglable buttonLabel="New blog" ref={blogFormRef}>
      <BlogForm createBlog={addBlog}/>
    </Togglable>
  )

  return (
    <div>
      <h2>blogs</h2>
      {
        user === null ?
          loginForm() :
          <div>
            <p>{name} logged-in <button onClick={handleClickOnLogout}>Logout</button></p>
            {blogForm()}
            {blogList()}
          </div>
      }
    </div>
  )
}

export default App