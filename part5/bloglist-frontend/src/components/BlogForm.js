import React, {useState} from "react"
import PropTypes from 'prop-types'

const BlogForm = ({createBlog}) => {
    const [newBlogTitle, setNewBlogTitle] = useState('')
    const [newBlogAuthor, setNewBlogAuthor] = useState('')
    const [newBlogUrl, setNewBlogUrl] = useState('')

    const handleNewBlogTitleChange = (event) => setNewBlogTitle(event.target.value)
    const handleNewBlogAuthorChange = (event) => setNewBlogAuthor(event.target.value)
    const handleNewBlogUrlChange = (event) => setNewBlogUrl(event.target.value)

    const addBlog = (event) => {
        event.preventDefault()
        createBlog ({
            title: newBlogTitle,
            author: newBlogAuthor,
            url: newBlogUrl,
            likes: 0
        })
        setNewBlogTitle('')
        setNewBlogAuthor('')
        setNewBlogUrl('')
    }

    return (
        <div>
            <h2>Create new blog </h2>
            <form onSubmit={addBlog}>
                <label> Title : </label>
                <input
                    value={newBlogTitle}
                    onChange={handleNewBlogTitleChange}
                />
                <label> Author : </label>
                <input
                    value={newBlogAuthor}
                    onChange={handleNewBlogAuthorChange}
                />
                <label> Url : </label>
                <input
                    value={newBlogUrl}
                    onChange={handleNewBlogUrlChange}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired,
}

export default BlogForm