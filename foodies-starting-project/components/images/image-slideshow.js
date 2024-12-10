import { useEffect, useState } from 'react';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';

import classes from './image-slideshow.module.css';
import Image from 'next/image';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImageIndex((imageIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [imageIndex]);

  return (
    <div className={classes.slideshow}>
      {images.map(({ image, alt }, index) => (
        <Image
          key={`image-slideshow-${index}`}
          className={imageIndex === index ? classes.active : ''}
          src={image}
          alt={alt}
        />
      ))}
    </div>
  );
}
