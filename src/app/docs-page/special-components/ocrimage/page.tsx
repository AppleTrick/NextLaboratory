'use client';

import React, { useState, ChangeEvent } from 'react';
import Tesseract from 'tesseract.js';

const ocrImage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (image) {
      Tesseract.recognize(image, 'eng', {
        logger: (m: any) => console.log(m),
      }).then(({ data: { text } }) => {
        setText(text);
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleSubmit}>Extract Text</button>
      <div>
        <h3>Extracted Text:</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ocrImage;
