# ui-components/ 무한스크롤 슬라이드

```jsx
'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * 7));
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border: 2px solid #ccc;
  background-color: #fff;
`;

const ImageTrack = styled.div`
  display: flex;
  width: calc(300px * 14);
  animation: ${scroll} 5s linear infinite;
`;

const StyledImage = styled(Image)`
  width: 300px;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
`;

const InfiniteScrollingImages = () => {
  const ref = useRef < HTMLDivElement > null;

  useEffect(() => {
    const track = ref.current;
    if (track) {
      const images = track.querySelectorAll('img');
      images.forEach((image) => {
        track.appendChild(image.cloneNode(true));
      });
    }
  }, []);

  return (
    <ImageContainer>
      <ImageTrack ref={ref}>
        <StyledImage src="/imageSample/1.jpg" alt="Image 1" width={100} height={100} />
        <StyledImage src="/imageSample/2.jpg" alt="Image 2" width={100} height={100} />
        <StyledImage src="/imageSample/3.jpg" alt="Image 3" width={100} height={100} />
        <StyledImage src="/imageSample/4.jpg" alt="Image 4" width={100} height={100} />
        <StyledImage src="/imageSample/5.jpg" alt="Image 5" width={100} height={100} />
        <StyledImage src="/imageSample/6.jpg" alt="Image 6" width={100} height={100} />
        <StyledImage src="/imageSample/7.jpg" alt="Image 7" width={100} height={100} />
      </ImageTrack>
    </ImageContainer>
  );
};

export default InfiniteScrollingImages;
```

# 코드 분석

이미지트랙 복제하기 코드

```jsx
const ref = useRef < HTMLDivElement > null;

useEffect(() => {
  const track = ref.current;
  if (track) {
    const images = track.querySelectorAll('img');
    images.forEach((image) => {
      track.appendChild(image.cloneNode(true));
    });
  }
}, []);
```

해당 코드는 ImageTrack의 요소를 한번 더 생성하는 코드이다

위의 코드를 통하여 ImageTrack 하위 에는 image 1~7 까지의 요소가 한번더 생성 되는 원리이다.

# 가장 힘들었던 이미지 무한으로 보이게 하기

이미지가 무한으로 계속 스크롤 되게 보이게하기 위해서는 이미지의 1 ~ 7을 보여주고 8 ~ 14 가 될때 다시 1 ~ 7의 영역으로 보이게하면 이미지가 무한으로 보이게 된다.

```jsx
const StyledImage = styled(Image)`
  width: 300px;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
`;
```

가로의 길이가 매우 중요하다. ⇒ 300px 을 기억하자

```jsx
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * 7));
  }
`;
```

`calc(-300px * 7)` 해당코드가 매우중요한데 이는 calc(가로길이 \* 이미지갯수)이다,.

```jsx
const ImageTrack = styled.div`
  display: flex;
  width: calc(300px * 14);
  animation: ${scroll} 5s linear infinite;
`;
```

이미지 트랙의 길이도 `calc(300px * 14)` 이는 `calc(가로길이 * (이미지갯수 * 2))` 의 값이다.
