import { useState, useMemo, memo, useCallback } from 'react';
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
  speed = 1000,
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

  const [triangleProps, setTriangleProps] = useState<{
    [key: number]: ITrangleProps;
  }>(getInitialTriangles);

  // useInterval(() => {
  //   const trianglePick = randomNumberPlease(0, baseTriangles + 1);

  //   setTriangleProps(prevProps => {
  //     return {
  //       ...prevProps,
  //       [trianglePick]: { ...getRandomProps() },
  //     };
  //   });
  // }, speed);

  // const MemoTriangle = memo((props: ITrangleProps) => (
  //   <RandomTriangle {...props} />
  // ));

  // ! issue. line 152. triangleProps[0] never changes. if the state of triangleProps[0] changes, we should see it change.
  // ? need to make it to where if triangleProps[0] changes, triangleProps[0] re-renders, but nothing else does

  return (
    <StyledTriangleOverlay triangles={baseTriangles}>
      {Object.entries(triangleProps).map(([key, value]) => {
        return <RandomTriangle {...value} key={key} />;
      })}
      {children}
    </StyledTriangleOverlay>
  );
}
