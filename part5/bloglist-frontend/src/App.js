import React, {useState, useEffect} from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')

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
            const user = await loginService.login({username, password,})
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
            <div>
                username
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({target}) => setUsername(target.value)}
                />
            </div>
            <div>
                password
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({target}) => setPassword(target.value)}
                />
            </div>
            <button type="submit">login</button>
        </form>
    )

    const handleClickOnLogout = () => {
        window.localStorage.clear()
        window.location.reload(false);
    }

    const loggedInForm = () => (
        <>
            <p>{name} logged in.</p>
            <button onClick={handleClickOnLogout}>Logout</button>
            {blogs.map(blog => <Blog key={blog.id} blog={blog}/>)}
        </>
    )

    return (
        <div>
            <h2>blogs</h2>
            {
                user === null ?
                    loginForm() :
                    loggedInForm()
            }
        </div>
    )
}

export default App