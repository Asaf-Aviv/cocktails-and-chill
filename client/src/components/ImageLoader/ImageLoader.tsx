import React, { useState, useEffect } from 'react';
import Loader from '../Loader';

interface ImageLoader {
  src: string;
  alt: string;
}

const ImageLoader: React.FC<ImageLoader> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsLoaded(true);
    image.src = src;
  }, [src]);


  return isLoaded
    ? (
      <img
        className="cocktail-card__img"
        src={src}
        alt={alt}
      />
    )
    : <Loader />;
};

export default ImageLoader;
