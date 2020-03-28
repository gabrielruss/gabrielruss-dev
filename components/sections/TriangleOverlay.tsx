import { styled } from '..';
import RandomTriangle from '../common/RandomTriangle';

interface IStyledTriangleOverlay {
  triangles: number;
}

const StyledTriangleOverlay = styled.div<IStyledTriangleOverlay>`
  z-index: 1000;
`;

interface ITriangleOverlay {
  speed?: number;
  baseTriangles?: number;
}

export function TriangleOverlay({
  speed = 5000,
  baseTriangles = 15,
  children,
}: React.PropsWithChildren<ITriangleOverlay>) {
  const getInitialTriangles = () => {
    const triangles = [];

    for (let i = 0; i <= baseTriangles; i++) {
      triangles.push(<RandomTriangle speed={speed} key={i} />);
    }

    return triangles;
  };

  return (
    <StyledTriangleOverlay triangles={baseTriangles}>
      {getInitialTriangles()}
      {children}
    </StyledTriangleOverlay>
  );
}
