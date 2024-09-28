import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api';
import Gallery from '../components/Gallery';

const Food = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const photos = await fetchImages('food');
      setImages(photos);
    };
    getImages();
  }, []);

  return (
    <div>
      <h1>Food Images</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Food;