import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <img src={image.src.medium} alt={image.photographer} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;