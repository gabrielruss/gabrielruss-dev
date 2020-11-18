import { styled } from '../styles';
import { RandomTriangle } from '../common';
import { randomNumberPlease } from '../util/_helpers';
import {
  StyledRandomTriangleProps,
  TriangleColors,
} from '../common/RandomTriangle';
import { useInterval } from '../hooks';
import { memo, useEffect, useState } from 'react';

const StyledTriangleOverlay = styled.span`
  z-index: -1;
`;

const NUM_TRIANGLES = 15;

// interface TriangleOverlayProps {
//   speed?: number;
//   baseTriangles?: number;
// }

const TriangleColorValues: TriangleColors[] = Object.values(TriangleColors).map(
  (t: TriangleColors) => t
);

const getRandomProps = (): StyledRandomTriangleProps => {
  return {
    top: randomNumberPlease(100, 10),
    right: randomNumberPlease(90, 0),
    rotation: Math.random() < 0.5 ? '' : 'reverse',
    width: randomNumberPlease(115, 75),
    height: randomNumberPlease(85, 45),
    opacity: randomNumberPlease(65, 35) / 100,
    color: TriangleColorValues[randomNumberPlease(6, 0)],
  };
};

function getInitialProps(): StyledRandomTriangleProps[] {
  console.log('getInitialProps');

  const triangleProps: StyledRandomTriangleProps[] = [];

  for (let i = 0; i < NUM_TRIANGLES; i++) {
    const random = getRandomProps();

    triangleProps.push(random);
  }

  return triangleProps;
}

const initialTriangles = getInitialProps();

function TriangleOverlay() {
  const [randomProps, setRandomProps] = useState<StyledRandomTriangleProps[]>(
    initialTriangles
  );

  // useInterval(() => {
  //   const trianglePick = randomNumberPlease(NUM_TRIANGLES, 0);

  //   const newProps = [...randomProps];

  //   newProps[trianglePick] = getRandomProps();

  //   setRandomProps(newProps);
  // }, 5000);

  useEffect(() => {
    const interval = setInterval(() => {
      const trianglePick = randomNumberPlease(NUM_TRIANGLES, 0);

      const newProps = [...randomProps];

      newProps[trianglePick] = getRandomProps();

      setRandomProps(newProps);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // on load, create a list of triangle props
  // map those out below

  // set a timer and change 1-3 triangles based on a random number pick

  // memoize the random triangles that way they don't re-render if their props don't change.

  // troubleshoot the jumping at that point

  return (
    <StyledTriangleOverlay>
      {randomProps.map((rp, i) => {
        return <RandomTriangle key={i} randomProps={rp} />;
      })}
    </StyledTriangleOverlay>
  );
}

export default memo(TriangleOverlay);
