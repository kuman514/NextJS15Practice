'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef(null);

  const [pickedImage, setPickedImage] = useState(null);

  function handleOnClick() {
    imageInputRef.current?.click();
  }

  function handleOnChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          ref={imageInputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleOnChange}
        />
        {/**
         * Set button's type to "button" to prevent submitting form.
         */}
        <button
          className={classes.button}
          type="button"
          onClick={handleOnClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
