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
  const getRandomProps = (uniqueId: number): ITrangleProps => {
    return {
      top: randomNumberPlease(100, 5),
      right: randomNumberPlease(90, 0),
      rotation: Math.random() < 0.5 ? '' : 'reverse',
      width: randomNumberPlease(105, 85),
      height: randomNumberPlease(75, 55),
      opacity: randomNumberPlease(65, 35) / 100,
      color: TriangleColorArray[randomNumberPlease(5, 0)],
      uniqueId,
    };
  };

  // const getInitialTriangles = () => {
  //   let initialTriangleProps: {
  //     [key: number]: ITrangleProps;
  //   } = {};

  //   for (let i = 0; i <= baseTriangles; i++) {
  //     initialTriangleProps[i] = { ...getRandomProps() };
  //   }

  //   return initialTriangleProps;
  // };

  const getInitialTriangles = () => {
    let initialTriangleProps: ITrangleProps[] = [];

    for (let i = 0; i <= baseTriangles; i++) {
      initialTriangleProps.push({ ...getRandomProps(i) });
    }

    return initialTriangleProps;
  };

  // const getMemoizedInitialTriangles = useMemo(() => getInitialTriangles(), [
  //   baseTriangles,
  // ]);

  const [triangleProps, setTriangleProps] = useState<ITrangleProps[]>(
    getInitialTriangles
  );

  // const memoProps = useMemo(() => {
  //   return triangleProps;
  // }, [triangleProps]);

  const handlePropsReplace = useCallback((trianglePick: number) => {
    // setTriangleProps(prevProps => {
    //   prevProps[trianglePick] = { ...getRandomProps() };
    //   return prevProps;
    // });

    // setTriangleProps(prevProps => {
    //   const newProps = getRandomProps();

    //   prevProps.splice(trianglePick, 1, newProps);

    //   return prevProps;
    // });

    setTriangleProps(prevProps => {
      const p = [...prevProps];

      const newProps = getRandomProps(trianglePick);

      p.splice(trianglePick, 1, newProps);

      return [...p];
    });
  }, []);

  // const mapCallback = useCallback(
  //   () =>
  //     triangleProps.map((p, i) => {
  //       console.log(triangleProps[0]);
  //       return <RandomTriangleMemo {...p} key={i} />;
  //       // return <RandomTriangle {...triangleProps[i]} key={i} />;
  //     }),
  //   []
  // );

  useInterval(() => {
    const trianglePick = randomNumberPlease(0, baseTriangles + 1);

    handlePropsReplace(trianglePick);

    // setTriangleProps(prevProps => {
    //   const p = [...prevProps];

    //   const newProps = getRandomProps();

    //   p.splice(trianglePick, 1, newProps);

    //   return [...p];
    // });

    // setTriangleProps({
    //   ...triangleProps,
    //   [trianglePick]: { ...getRandomProps() },
    // });
  }, speed);

  const RandomTriangleMemo = memo((props: ITrangleProps) => {
    console.log('RandomTriangleMemo');
    return <RandomTriangle {...props} />;
  });

  // ! issue. line 152. triangleProps[0] never changes. if the state of triangleProps[0] changes, we should see it change.
  // ? need to make it to where if triangleProps[0] changes, triangleProps[0] re-renders, but nothing else does

  return (
    <StyledTriangleOverlay triangles={baseTriangles}>
      {/* {Object.entries(triangleProps).map(([key, value]) => {
        console.log('Object.entries');
        return <RandomTriangleMemo {...value} key={key} />;
      })} */}
      {triangleProps.map((p, i) => {
        console.log(triangleProps[0]);
        return <RandomTriangleMemo {...p} key={p.uniqueId} />;
        // return <RandomTriangle {...p} key={i} />;
      })}
      {/* {mapCallback()} */}
      {children}
    </StyledTriangleOverlay>
  );
}
