import { useState, useEffect } from 'react';
import { styled } from '..';
import RandomTriangle, { TriangleColors } from '../styles/RandomTriangle';
import { randomNumberPlease } from '../utilities/_helpers';

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

  // maximum of baseNumber
  // spawn 1 out after 5 seconds
  // spawn another in after speed

  // ? make them clickable and when clicked they dissapear?

  return triangleArray;
}

export function TriangleOverlay({
  children,
  speed = 5000,
  baseTriangles = 10,
}) {
  const [triangles, setTriangles] = useState<Array<JSX.Element>>(
    getInitialTriangles(baseTriangles)
  );

  let count = baseTriangles;

  // TODO: this works, but i need it to transition out
  // I think i need to transition triangles out in 2 steps
  // 1. set triangle[0] to be opacity 0 which will show the transition out
  // 2. push new triangle with opacity 0
  // 3. remove triangle[0] from the array
  // 4. set triangle[max] to opacity 1
  const triangleInterchange = () => {
    if (triangles) {
      count = count + 1;

      // todo: figure out how to remove 0, and add in the last
      // something is making it only add the last.
      // try not spreading in a new array?
      const newTriangles = [...triangles];
      // remove one from front
      newTriangles.shift();
      // add new to back
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
      setTriangles(newTriangles);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      triangleInterchange();
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledTriangleOverlay triangles={baseTriangles}>
      {triangles}
      {children}
    </StyledTriangleOverlay>
  );
}
