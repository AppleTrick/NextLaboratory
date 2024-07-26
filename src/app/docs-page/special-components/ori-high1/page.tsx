'use client';

import convertor from '@/lib/convertor';
import { ChangeEvent, useRef, useState } from 'react';

const Home = () => {
  const imgInputRef: any = useRef(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [texts, setTexts] = useState<Array<string>>([]);
  const openBrowse = () => {
    imgInputRef.current?.click();
  };

  const convert = async (url: string) => {
    if (url) {
      setProcessing(true);
      await convertor(url).then((txt) => {
        if (txt) {
          setTexts((prevTexts) => [...prevTexts, txt]);
        }
      });
      setProcessing(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={imgInputRef}
        hidden
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) {
            const url: string = URL.createObjectURL(e.target.files[0]);
            console.log(url);
            convert(url);
          }
        }}
      />
      <div onClick={openBrowse}>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'magenta' }}></div>
      </div>
      {processing ? 'Processing Image' : 'Click Image'}
      <div>
        <textarea defaultValue={texts}></textarea>
      </div>
    </div>
  );
};

export default Home;
