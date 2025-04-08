import { memo } from 'react';

import { styled } from '../styles';

export enum TriangleColors {
  TEAL = 'teal',
  PURPLE = 'purple',
  FLAMINGO = 'flamingo',
  YELLOW = 'yellow',
  BLACK = 'black',
  BLUE = 'blue',
}

export interface RandomTriangleProps {
  top: number;
  right: number;
  rotation: '' | 'reverse';
  opacity: number;
  height: number;
  width: number;
  color: TriangleColors;
}

const RandomTriangleStyle = styled.div<RandomTriangleProps>`
  position: fixed;
  background-color: ${(props) => props.theme.colors[props.color]};

  top: ${(props) => props.top}rem;
  right: ${(props) => props.right}vw;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  opacity: ${(props) => props.opacity};

  -webkit-transition: top 2s ease-in-out, right 2s ease-in-out,
    width 2s ease-in-out, height 2s ease-in-out, opacity 2s ease-in-out,
    background-color 2s ease-in-out;
  -moz-transition: top 2s ease-in-out, right 2s ease-in-out,
    width 2s ease-in-out, height 2s ease-in-out, opacity 2s ease-in-out,
    background-color 2s ease-in-out;
  transition: top 2s ease-in-out, right 2s ease-in-out, width 2s ease-in-out,
    height 2s ease-in-out, opacity 2s ease-in-out,
    background-color 2s ease-in-out;

  will-change: top, right, width, height, opacity;

  clip-path: polygon(50% 0, 0 100%, 100% 100%);

  -webkit-animation: spin 150s linear infinite;
  -moz-animation: spin 150s linear infinite;
  animation: spin 150s linear infinite ${(props) => props.rotation};

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

interface RandomTriangleModel {
  randomProps: RandomTriangleProps;
}

function RandomTriangle({ randomProps }: RandomTriangleModel) {
  return <RandomTriangleStyle {...randomProps} />;
}

export default memo(RandomTriangle);
