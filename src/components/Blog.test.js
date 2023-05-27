import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

test('clicking the button calls event handler', async () => {
  const blog = {
    title: 'Blog click test',
    author: 'Tester',
    likes: 0,
    url: 'http://localhost:3000/'
  }

  const { container } = render(
    <Blog blog={blog} />
  )

  const user = userEvent.setup()
  const button = screen.getByText('open')
  await user.click(button)

  const urlElement = container.querySelector('.url')
  expect(urlElement).toHaveTextContent('Url: http://localhost:3000/')

  const likeElement = container.querySelector('.like')
  expect(likeElement).toHaveTextContent('Likes: 0')
})