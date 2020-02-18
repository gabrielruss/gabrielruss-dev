import { useState, useMemo } from 'react';
import { styled } from '..';
import RandomTriangle, {
  TriangleColors,
  ITrangleProps,
} from '../styles/RandomTriangle';
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
  speed = 10000,
  baseTriangles = 15,
}) {
  const getRandomProps = (): ITrangleProps => {
    return {
      top: randomNumberPlease(100, 5),
      right: randomNumberPlease(90, 0),
      rotation: Math.random() < 0.5 ? '' : 'reverse',
      width: randomNumberPlease(105, 85),
      height: randomNumberPlease(75, 55),
      opacity: randomNumberPlease(65, 35) / 100,
      color: TriangleColorArray[randomNumberPlease(5, 0)],
    };
  };

  const getInitialTriangles = () => {
    let initialTriangleProps: {
      [key: number]: ITrangleProps;
    } = {};

    for (let i = 0; i <= baseTriangles; i++) {
      initialTriangleProps[i] = { ...getRandomProps() };
    }

    return initialTriangleProps;
  };

  const getMemoizedInitialTriangles = useMemo(() => getInitialTriangles(), [
    baseTriangles,
  ]);

  const [triangleProps, setTriangleProps] = useState<{
    [key: number]: ITrangleProps;
  }>(getMemoizedInitialTriangles);

  useInterval(() => {
    const trianglePick = randomNumberPlease(0, baseTriangles + 1);

    setTriangleProps({
      ...triangleProps,
      [trianglePick]: { ...getRandomProps() },
    });
  }, speed);

  return (
    <StyledTriangleOverlay triangles={baseTriangles}>
      {Object.entries(triangleProps).map(([key, value]) => (
        <RandomTriangle {...value} key={key} />
      ))}
      {children}
    </StyledTriangleOverlay>
  );
}
