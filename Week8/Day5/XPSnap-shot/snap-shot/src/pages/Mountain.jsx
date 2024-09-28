import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api';
import Gallery from '../components/Gallery';

const Mountain = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const photos = await fetchImages('mountain');
      setImages(photos);
    };
    getImages();
  }, []);

  return (
    <div>
      <h1>Mountain Images</h1>
      <Gallery images={images} />
    </div>
  );
};

export default Mountain;