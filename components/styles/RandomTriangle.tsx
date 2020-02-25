import { styled } from '..';
import { useState } from 'react';
import { randomNumberPlease } from '../utilities/_helpers';
import useInterval from '../hooks/useInterval';

export enum TriangleColors {
  TEAL = 'teal',
  PURPLE = 'purple',
  FLAMINGO = 'flamingo',
  YELLO = 'yellow',
  BLACK = 'black',
}

const TriangleColorKeys: string[] = Object.keys(TriangleColors);
const TriangleColorValues: TriangleColors[] = TriangleColorKeys.map(
  k => TriangleColors[k as any]
).map(v => v as TriangleColors);

export interface ITrangleProps {
  top: number;
  right: number;
  rotation: '' | 'reverse';
  opacity: number;
  height: number;
  width: number;
  color: TriangleColors;
}

const RandomTriangleStyle = styled.div<ITrangleProps>`
  position: fixed;
  background-color: ${props => props.theme.colors[props.color]};

  top: ${props => props.top}rem;
  right: ${props => props.right}vw;

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  opacity: ${props => props.opacity};

  transition: 1s all ease;

  clip-path: polygon(50% 0, 0 100%, 100% 100%);

  -webkit-animation: spin 150s linear infinite;
  -moz-animation: spin 150s linear infinite;
  animation: spin 150s linear infinite ${props => props.rotation};

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

const RandomTriangle = ({ speed }: { speed: number }) => {
  const getRandomProps = (): ITrangleProps => {
    return {
      top: randomNumberPlease(100, 5),
      right: randomNumberPlease(90, 0),
      rotation: Math.random() < 0.5 ? '' : 'reverse',
      width: randomNumberPlease(105, 85),
      height: randomNumberPlease(75, 55),
      opacity: randomNumberPlease(65, 35) / 100,
      color: TriangleColorValues[randomNumberPlease(5, 0)],
    };
  };

  const [randomProps, setRandomProps] = useState<ITrangleProps>(
    getRandomProps()
  );

  useInterval(() => {
    const trianglePick1 = randomNumberPlease(50, 1);
    const trianglePick2 = randomNumberPlease(50, 1);

    if (trianglePick1 === trianglePick2) {
      setRandomProps(getRandomProps());
    }
  }, speed);

  return <RandomTriangleStyle {...randomProps} />;
};

export default RandomTriangle;
