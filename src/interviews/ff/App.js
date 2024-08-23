import React, { useState } from 'react';

const App = () => {
    const [posts, setPosts] = useState([])
    const [text, setText] = useState('')

    const handleSubmit = () => {
        setPosts(prev => [...prev, { id: new Date.now(), body: text }])
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleDismiss = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    const allPosts = posts.map(post => {
        return(<div key={post.id}>
            {post.body} <button onClick={() => handleDismiss(post.id)}>X</button>
        </div>)
    })

    return (
        <div>
            <h1>Posts</h1>
            <div>
                <input type="text" value={text} onChange={handleChange} />
                <button onSubmit={handleSubmit}>Submit</button>
            </div>
            <div className="container">
                {allPosts}
            </div>
        </div>
    )
}