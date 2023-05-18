const NewBlogForm = ({ addBlog, title, setTitle, author, setAuthor, url, setUrl }) => {
    return (
        <div>
            <h2>Create new blog</h2>
            <form onSubmit={addBlog}>
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