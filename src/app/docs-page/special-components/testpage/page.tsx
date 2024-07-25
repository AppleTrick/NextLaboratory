'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PSM, createWorker } from 'tesseract.js';

const testpage = () => {
  const [imageUrl, setImageUrl] = useState('https://tesseract.projectnaptha.com/img/eng_bw.png');
  const [hocr, setHocr] = useState<string>('');

  const ocrSubmit = async () => {
    const worker = await createWorker('eng', 1, {
      logger: (m) => console.log(m),
    }); // 언어 설정 할수 있는 부분

    (async () => {
      // 특정 문자 or 숫자 뽑아내기
      //   await worker.setParameters({
      //     tessedit_char_whitelist: 'cloud',
      //   });

      //  pageseg 설정
      //   await worker.setParameters({
      //     tessedit_pageseg_mode: PSM.AUTO_ONLY,
      //   });

      const { data } = await worker.recognize(imageUrl);
      console.log(data.text);
      console.log(data);
      setHocr(data.hocr || '');
      await worker.terminate();
    })();
  };

  return (
    <div>
      <Image src={imageUrl} alt="" width={1000} height={500} />
      <div>hello</div>
      <button onClick={ocrSubmit}>누름</button>
      <div dangerouslySetInnerHTML={{ __html: hocr }} />
    </div>
  );
};

export default testpage;

// enum PSM {
//     OSD_ONLY = '0',
//     AUTO_OSD = '1',
//     AUTO_ONLY = '2',
//     AUTO = '3',
//     SINGLE_COLUMN = '4',
//     SINGLE_BLOCK_VERT_TEXT = '5',
//     SINGLE_BLOCK = '6',
//     SINGLE_LINE = '7',
//     SINGLE_WORD = '8',
//     CIRCLE_WORD = '9',
//     SINGLE_CHAR = '10',
//     SPARSE_TEXT = '11',
//     SPARSE_TEXT_OSD = '12',
//     RAW_LINE = '13'
//   }

// 결과 보고
// rectangle 에 대한 부분은 왜 안되는지 이해를 못하겠음 이게 도데체 왜 있는건지 분명히 rectangle이라는 건 존재하는데 왜 작동을 안하는지 이해가 안되는 부분이 있다.
