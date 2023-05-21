import Togglable from './Togglable'

import { useState } from 'react'

const Blog = ({ blog }) => {
  const [visible, setVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const blogDetails = () => (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, ...blogStyle }}>
      <div>Title: {blog.title}</div>
      <div>Url: {blog.url}</div>
      <div>Likes: {blog.likes}</div>
      <div>Author: {blog.author}</div>
    </div>
  )

  const blogTitle = () => (
    <div style={blogStyle}>
      {blog.title} {blog.author}
    </div>
  )

  return (
    <>
      <Togglable buttonLabel='view' closeButtonLabel='hide' visible={visible} setVisible={setVisible}>
        {visible ? blogDetails() : blogTitle()}
      </Togglable>
    </>


  )
}

export default Blog