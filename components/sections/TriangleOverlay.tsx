import { memo, useEffect, useState } from 'react';
import { styled } from '../styles';
import { RandomTriangle } from '../common';
import { randomNumberPlease } from '../util/_helpers';
import { RandomTriangleProps, TriangleColors } from '../common/RandomTriangle';

const StyledTriangleOverlay = styled.span`
  z-index: -1;
`;

const NUM_TRIANGLES = 15;

const TriangleColorValues: TriangleColors[] = Object.values(TriangleColors).map(
  (t: TriangleColors) => t
);

const getRandomProps = (): RandomTriangleProps => {
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

function getInitialProps(): RandomTriangleProps[] {
  const triangleProps: RandomTriangleProps[] = [];

  for (let i = 1; i <= NUM_TRIANGLES; i++) {
    const random = getRandomProps();

    triangleProps.push(random);
  }

  return triangleProps;
}

const initialTriangles = getInitialProps();

function TriangleOverlay() {
  const [randomProps, setRandomProps] = useState<RandomTriangleProps[]>(
    initialTriangles
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const trianglePick = randomNumberPlease(NUM_TRIANGLES, 1);

      const newProps = [...randomProps];

      newProps[trianglePick] = getRandomProps();

      setRandomProps(newProps);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <StyledTriangleOverlay>
      {randomProps.map((rp, i) => {
        return <RandomTriangle key={i} randomProps={rp} />;
      })}
    </StyledTriangleOverlay>
  );
}

export default memo(TriangleOverlay);
