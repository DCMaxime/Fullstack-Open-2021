const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () => {
    await Blog.deleteMany({})

    for (let blog of helper.initialBlogs) {
        let blogObject = new Blog(blog)
        await blogObject.save()
    }
})

test('there are two blogs', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(2)
})

test('add another blog to the list', async () => {
    const initialResponse = await api.get('/api/blogs')
    const newBlog = {
        title: "Test de blog 03",
        author: "Encore Moi-Même",
        url: "http://git.waryle.com",
        likes: 36
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialResponse.body.length + 1)
    expect(response.body.find((blog) => blog.title === newBlog.title)).toMatchObject(newBlog)
})

afterAll(() => {
    mongoose.connection.close()
})