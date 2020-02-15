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
    opacity: 0;
  }

  ${RandomTriangle}:nth-of-type(${props => props.triangles + 1}) {
    opacity: 0;
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
      let newTriangles: JSX.Element[] = [...prevTriangles];

      if (count % 2 !== 0) {
        // first run
        console.log('adding triangle');
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
      } else {
        // second run
        console.log('removing triangle');
        newTriangles = prevTriangles.slice(1);
      }

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

  // a list of triangle ids or keys
  // triangleIds = [0, 1, 2, 3, 4]
  // transparent = null
  // every 5 seconds, pick 1 random number from the list of triangles and set to state
  // transparent = 1
  // on each triangle opacity={key === toDelete ? 0 : randomNumberPlease(65, 35) / 100}
  // this will fade out the triangle
  // 5 seconds pass
  // check to see if there is a number in transparent, if so, remove it from list of triangles
  // reset transparent
  // transparent = null

  // 5 seconds pass
  // loops through all again
  // pick 1 random number from the list of triangles and set to state
  // transparent = 4

  return (
    <StyledTriangleOverlay triangles={baseTriangles}>
      {triangles}
      {children}
    </StyledTriangleOverlay>
  );
}
