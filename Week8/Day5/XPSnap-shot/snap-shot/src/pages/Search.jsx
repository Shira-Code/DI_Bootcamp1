import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImages } from '../api';
import Gallery from '../components/Gallery';

const Search = () => {
  const { query } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const photos = await fetchImages(query);
      setImages(photos);
    };
    getImages();
  }, [query]);

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Search;
