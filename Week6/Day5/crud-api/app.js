const express = require('express');

const app = express();

const { fetchPosts } = require('./data/dataService');

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.status(200).json(posts);
    console.log('Data has been successfully retrieved and sent as a response.');
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
