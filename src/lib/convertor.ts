import { createWorker } from 'tesseract.js';

const convertor = async (img: string) => {
  const worker = await createWorker(['eng', 'kor'], 1, {
    workerPath: 'https://cdn.jsdelivr.net/npm/tesseract.js@v5.0.0/dist/worker.min.js',
    langPath: 'https://tessdata.projectnaptha.com/4.0.0',
    corePath: 'https://cdn.jsdelivr.net/npm/tesseract.js-core@v5.0.0',
  });

  //   await worker.setParameters({
  //     tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789가-힣!@#$%^&*()_+-=[]{}|;:,.<>?/`~',
  //   });
  const result = await worker.recognize(img);
  const text = result.data.text;
  console.log(text);
  await worker.terminate();
  return text;
};

export default convertor;
