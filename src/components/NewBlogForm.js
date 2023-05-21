import { useState } from 'react'

const NewBlogForm = ({ addBlog }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const createBlog = (event) => {
        event.preventDefault()
        const blog = {
            title: title,
            author: author,
            url: url
        }

        addBlog(blog)

        // refresh states
        setTitle('')
        setAuthor('')
        setUrl('')
    }


    return (
        <div>
            <h2>Create new blog</h2>
            <form onSubmit={createBlog}>
                <div>Title
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div>Author
                    <input
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>

                <div>
                    url
                    <input
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                </div>

                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default NewBlogForm