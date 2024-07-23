'use client';

import React, { useState, useEffect, useRef } from 'react';
import Tesseract from 'tesseract.js';

const OcrImagePaste: React.FC = () => {
  const [text, setText] = useState<string>('');
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const items = event.clipboardData?.items;
      if (items) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
            const blob = items[i].getAsFile();
            if (blob) {
              const url = URL.createObjectURL(blob);
              const img = new Image();
              img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (ctx) {
                  canvas.width = img.width;
                  canvas.height = img.height;
                  ctx.drawImage(img, 0, 0);
                  Tesseract.recognize(canvas, 'eng')
                    .then(({ data: { text } }) => {
                      setText(text);
                    })
                    .catch((err) => console.error(err));
                }
              };
              img.src = url;
              if (imageRef.current) {
                imageRef.current.src = url;
              }
            }
          }
        }
      }
    };

    const handlePasteWrapper = (event: Event) => {
      handlePaste(event as ClipboardEvent);
    };

    window.addEventListener('paste', handlePasteWrapper);
    return () => {
      window.removeEventListener('paste', handlePasteWrapper);
    };
  }, []);

  return (
    <div>
      <h1>OCR 기능 사용하기</h1>
      <img ref={imageRef} alt="Pasted" style={{ maxWidth: '100%', maxHeight: '400px' }} />
      <textarea value={text} readOnly style={{ width: '100%', height: '200px' }} />
    </div>
  );
};

export default OcrImagePaste;
