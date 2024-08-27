import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 55%;
  height: 90%;
  left:50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const myMove = keyframes`
  0%, 100% {
    transform: rotateX(70deg) translateZ(50px) translateY(0px);
    filter: hue-rotate(0deg);
  }

  50% {
    transform: rotateX(70deg) translateZ(50px) translateY(-50vmin);
    filter: hue-rotate(180deg);
  }
`;

const Item = styled.div`
  position: absolute;
  background-color: transparent;
  width: calc(${props => props.i} * 2.5vmin);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 0.9vmin solid rgb(0, 200, 255);
  transform-style: preserve-3d;
  transform: rotateX(70deg) translateZ(50px);
  animation: ${myMove} 3s ease-in-out calc(${props => props.i} * 0.08s) infinite;
  box-shadow: 0px 0px 15px rgb(124, 124, 124),
    inset 0px 0px 15px rgb(124, 124, 124);
`;

const animation = () => {
  return (
    <Container>
      {[...Array(21)].map((_, i) => (
        <Item key={i} i={i} />
      ))}
    </Container>
  );
};

export default animation;