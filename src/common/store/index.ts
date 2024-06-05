import { atom } from 'recoil';

// 타입
export interface ITodoTypes {
  id: number;
  contents: string;
  isCompleted: boolean;
}

export const textState = atom({
  key: 'textState',
  default: '',
});

// 아톰에서 타입은 다음과 같이
export const todosState = atom<ITodoTypes[]>({
  key: 'todos',

  // default에는 임의의 데이터를 넣어줍시다.
  default: [
    {
      id: 1,
      contents: 'Todo List를',
      isCompleted: false,
    },

    {
      id: 2,
      contents: '자유롭게',
      isCompleted: false,
    },

    {
      id: 3,
      contents: '추가해보세요!',
      isCompleted: false,
    },
  ],
});
