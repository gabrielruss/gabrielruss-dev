import { styled } from '..';
import { useState, useCallback } from 'react';
import { randomNumberPlease } from '../util/_helpers';
import useInterval from '../hooks/useInterval';

export enum TriangleColors {
  TEAL = 'teal',
  PURPLE = 'purple',
  FLAMINGO = 'flamingo',
  YELLOW = 'yellow',
  BLACK = 'black',
  BLUE = 'blue',
}

const TriangleColorValues: TriangleColors[] = Object.values(TriangleColors).map(
  (t: TriangleColors) => t
);

export interface StyledRandomTriangleProps {
  top: number;
  right: number;
  rotation: '' | 'reverse';
  opacity: number;
  height: number;
  width: number;
  color: TriangleColors;
}

const RandomTriangleStyle = styled.div<StyledRandomTriangleProps>`
  position: fixed;
  background-color: ${(props) => props.theme.colors[props.color]};

  top: ${(props) => props.top}rem;
  right: ${(props) => props.right}vw;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  opacity: ${(props) => props.opacity};

  transition: 2s all ease;

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

  :hover {
    cursor: pointer;
  }
`;

interface RandomTriangleModel {
  speed: number;
}

function RandomTriangle({ speed }: RandomTriangleModel) {
  const getRandomProps = useCallback((): StyledRandomTriangleProps => {
    return {
      top: randomNumberPlease(100, 10),
      right: randomNumberPlease(90, 0),
      rotation: Math.random() < 0.5 ? '' : 'reverse',
      width: randomNumberPlease(115, 75),
      height: randomNumberPlease(85, 45),
      opacity: randomNumberPlease(65, 35) / 100,
      color: TriangleColorValues[randomNumberPlease(6, 0)],
    };
  }, []);

  const [randomProps, setRandomProps] = useState<StyledRandomTriangleProps>(
    getRandomProps()
  );

  useInterval(() => {
    const trianglePick1 = randomNumberPlease(15, 1);
    const trianglePick2 = randomNumberPlease(15, 1);

    if (trianglePick1 === trianglePick2) {
      setRandomProps(getRandomProps());
    }
  }, speed);

  return (
    <RandomTriangleStyle
      {...randomProps}
      onClick={() => setRandomProps(getRandomProps())}
    />
  );
}

export default RandomTriangle;
