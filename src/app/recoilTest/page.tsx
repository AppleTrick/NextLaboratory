'use client';

import { textState } from '@/common/store';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

const RecoilTest = () => {
  const [text, setText] = useRecoilState(textState);
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={onChangeText} />
      <div>{text}</div>
    </>
  );
};

export default RecoilTest;
