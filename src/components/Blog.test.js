import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import Blog from './Blog'

test('renders only title and author', () => {
  const blog = {
    title: 'Blog test',
    author: 'Tester',
    likes: 0,
    url: 'http://localhost:3000/'
  }

  render(<Blog blog={blog} />)

  const element = screen.getByText('Blog test Tester')
  expect(element).toBeDefined()
})