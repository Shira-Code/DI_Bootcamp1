import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api';
import Gallery from '../components/Gallery';

const Birds = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const photos = await fetchImages('birds');
      setImages(photos);
    };
    getImages();
  }, []);

  return (
    <div>
      <h1>Bird Images</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Birds;