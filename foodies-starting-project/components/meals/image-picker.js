'use client';

import { useRef } from 'react';

import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef(null);

  function handleOnClick() {
    imageInputRef.current?.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          ref={imageInputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
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
