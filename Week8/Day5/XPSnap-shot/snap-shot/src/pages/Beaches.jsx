import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api';
import Gallery from '../components/Gallery';

const Beaches = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const photos = await fetchImages('beaches');
      setImages(photos);
    };
    getImages();
  }, []);

  return (
    <div>
      <h1>Beach Images</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Beaches;