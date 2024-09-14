// Import the required modules
const express = require('express');

// Initialize an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Simulated database of blog posts
let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' }
];

// Route to GET all posts
app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

// Route to GET a specific post by ID
app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Route to POST (create) a new blog post
app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1, // Simple ID generation
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Route to PUT (update) an existing post by ID
app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Route to DELETE a post by ID
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(200).json({ message: 'Post deleted' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server and listen on a specified port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
