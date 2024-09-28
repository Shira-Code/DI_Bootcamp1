import axios from 'axios';

const API_KEY = '79NpwIGCaCBqzEy2sBjTi0c28cu1jGcQzv1EMrz2TBIg18oB9hvoxGZR';

export const fetchImages = async (query) => {
  const response = await axios.get(`https://api.pexels.com/v1/search`, {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      query: query,
      per_page: 30,
    },
  });
  return response.data.photos;
};