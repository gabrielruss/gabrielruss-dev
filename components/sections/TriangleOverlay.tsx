import { useState } from 'react';
import { styled } from '..';
import RandomTriangle, { TriangleColors } from '../styles/RandomTriangle';
import { randomNumberPlease } from '../utilities/_helpers';
import useInterval from '../hooks/useInterval';

interface IStyledTriangleOverlay {
  triangles: number;
}

const StyledTriangleOverlay = styled.div<IStyledTriangleOverlay>`
  z-index: 1000;

  ${RandomTriangle} {
    transition: 1s all ease;
  }

  ${RandomTriangle}:first-of-type {
    visibility: hidden;
  }

  ${RandomTriangle}:nth-of-type(${props => props.triangles + 1}) {
    visibility: hidden;
  }
`;

const TriangleColorArray: TriangleColors[] = [
  'purple',
  'flamingo',
  'teal',
  'yellow',
  'black',
];

export function TriangleOverlay({
  children,
  speed = 5000,
  baseTriangles = 10,
}) {
  const [count, setCount] = useState(baseTriangles + 1);

  const [triangles, setTriangles] = useState(() =>
    getInitialTriangles(baseTriangles)
  );

  useInterval(() => {
    setCount(count + 1);

    setTriangles(prevTriangles => {
      const newTriangles = prevTriangles.slice(1);

      newTriangles.push(
        <RandomTriangle
          top={randomNumberPlease(100, 5)}
          right={randomNumberPlease(90, 0)}
          rotation={Math.random() < 0.5 ? '' : 'reverse'}
          width={randomNumberPlease(105, 85)}
          height={randomNumberPlease(75, 55)}
          opacity={randomNumberPlease(65, 35) / 100}
          color={TriangleColorArray[randomNumberPlease(5, 0)]}
          key={count}
        />
      );
      return newTriangles;
    });
  }, speed);

  /**
   *
   * @param baseNumber max of 50
   */
  function getInitialTriangles(baseNumber: number) {
    if (baseNumber > 50) {
      baseNumber = 50;
    }

    const triangleArray: Array<JSX.Element> = [];

    for (let i = 0; i <= baseNumber; i++) {
      triangleArray.push(
        <RandomTriangle
          top={randomNumberPlease(100, 5)}
          right={randomNumberPlease(90, 0)}
          rotation={Math.random() < 0.5 ? '' : 'reverse'}
          width={randomNumberPlease(105, 85)}
          height={randomNumberPlease(75, 55)}
          opacity={randomNumberPlease(65, 35) / 100}
          color={TriangleColorArray[randomNumberPlease(5, 0)]}
          key={i}
        />
      );
    }

    return triangleArray;
  }

  return (
    <StyledTriangleOverlay triangles={baseTriangles}>
      <>{count}</>
      {triangles}
      {children}
    </StyledTriangleOverlay>
  );
}
