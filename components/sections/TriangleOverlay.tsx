import { styled } from '../styles';
import { RandomTriangle } from '../common';

const StyledTriangleOverlay = styled.div`
  z-index: 1000;
`;

interface TriangleOverlayProps {
  speed?: number;
  baseTriangles?: number;
}

export function TriangleOverlay({
  speed = 5000,
  baseTriangles = 15,
  children,
}: React.PropsWithChildren<TriangleOverlayProps>) {
  const getInitialTriangles = () => {
    const triangles = [];

    for (let i = 0; i <= baseTriangles; i++) {
      triangles.push(<RandomTriangle speed={speed} key={i} />);
    }

    return triangles;
  };

  return (
    <StyledTriangleOverlay>
      {getInitialTriangles()}
      {children}
    </StyledTriangleOverlay>
  );
}
