// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import postsData from '../posts.json'; // Adjust the path if needed

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postsData); // Set the posts from the imported JSON
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Hi This is a Title</h1>
            {posts.map((post, index) => (
                <div key={index} style={{ margin: '20px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
