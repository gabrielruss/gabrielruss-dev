import { styled } from '..';
import RandomTriangle from '../styles/RandomTriangle';

interface IStyledTriangleOverlay {
  triangles: number;
}

const StyledTriangleOverlay = styled.div<IStyledTriangleOverlay>`
  z-index: 1000;
`;

export function TriangleOverlay({
  children,
  speed = 5000,
  baseTriangles = 15,
}) {
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
