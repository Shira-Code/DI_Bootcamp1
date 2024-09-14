
const axios = require('axios');

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from JSONPlaceholder');
  }
};

module.exports = { fetchPosts };
