import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from './Blog'

test('renders only blog title and author', () => {
  const blog = {
    title: 'Test blog title',
    author: 'Test blog author',
    url: 'Test blog url',
    likes: 0
  }

  const component = render(
    <Blog blog={blog} />
  )
  const element = component.getByText(
    `${blog.title} ${blog.author}`
  )
  expect(element).toBeDefined()
})