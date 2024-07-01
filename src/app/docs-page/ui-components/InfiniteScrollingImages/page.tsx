'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
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
  animation: ${scroll} 5s linear infinite;
`;

const StyledImage = styled(Image)`
  width: 300px;
  height: 300px;
  object-fit: contain;
  flex-shrink: 0;
`;

const InfiniteScrollingImages = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = ref.current;
    if (track) {
      const images = track.querySelectorAll('img');
      track.appendChild(images[0].cloneNode(true));
      track.appendChild(images[1].cloneNode(true));
      track.appendChild(images[2].cloneNode(true));
      track.appendChild(images[3].cloneNode(true));
      track.appendChild(images[4].cloneNode(true));
    }
  }, []);

  return (
    <ImageContainer>
      <ImageTrack ref={ref}>
        <StyledImage src="/imageSample/1.jpg" alt="Image 1" fill />
        <StyledImage src="/imageSample/2.jpg" alt="Image 2" fill />
        <StyledImage src="/imageSample/3.jpg" alt="Image 3" fill />
        <StyledImage src="/imageSample/4.jpg" alt="Image 4" fill />
        <StyledImage src="/imageSample/5.jpg" alt="Image 5" fill />
        <StyledImage src="/imageSample/6.jpg" alt="Image 6" fill />
        <StyledImage src="/imageSample/7.jpg" alt="Image 7" fill />
      </ImageTrack>
    </ImageContainer>
  );
};

export default InfiniteScrollingImages;
