'use client';

import { Button, Group, Progress, Stack, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useEffect, useRef, useState } from 'react';
import '@mantine/dropzone/styles.css';
import Image from 'next/image';
import Tesseract, { createWorker } from 'tesseract.js';

const Home = () => {
  const [imageData, setImageData] = useState<File | null>(null);

  const loadFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      setImageData(imageDataUri as string);
    };
    reader.readAsDataURL(file);
  };

  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState('idle');
  const [ocrResult, setOcrResult] = useState('');

  const workerRef = useRef<Tesseract.Worker | null>(null);
  // useEffect(() => {
  //   const initializeWorker = async () => {
  //     workerRef.current = await createWorker(['eng', 'kor'], 1, {
  //       logger: (m) => console.log(m),
  //     });
  //   };
  //   if (imageData) {
  //     initializeWorker();
  //   }

  //   return () => {
  //     workerRef.current?.terminate();
  //     workerRef.current = null;
  //   };
  // }, [imageData]);

  const handleExtract = async () => {
    setProgress(0);
    setProgressLabel('starting');
    workerRef.current = await createWorker(['eng', 'kor'], 1, {
      logger: (m) => console.log(m),
    });
    const worker = workerRef.current!;
    const response = await worker.recognize(imageData!);
    setOcrResult(response.data.text);
    console.log(response.data);
  };

  return (
    <>
      <Group align="initial" style={{ padding: '10px' }}>
        <Stack style={{ flex: 1 }}>
          <Dropzone onDrop={(files) => loadFile(files[0])} accept={IMAGE_MIME_TYPE} multiple={false}>
            <Text size="xl" inline>
              이미지를 드래그하여 넣어주세요
            </Text>
          </Dropzone>

          {!!imageData && <Image alt="" src={imageData} width={1000} height={300} style={{ width: '100%' }} />}
        </Stack>
        <Stack style={{ flex: 1 }}>
          <Button onClick={handleExtract}>검사</Button>
          <Text>{progressLabel.toUpperCase()}</Text>
          <Progress value={progress * 100} />

          {!!ocrResult && (
            <Stack>
              <Text size="xl">Result</Text>
              <Text style={{ background: 'black', padding: '10px' }}>{ocrResult}</Text>
            </Stack>
          )}
        </Stack>
      </Group>
    </>
  );
};

export default Home;

// logger: (message) => {
//   if ('progress' in message) {
//     setProgress(message.progress);
//     setProgressLabel(message.progress == 1 ? 'Done' : message.status);
//   }
// },
