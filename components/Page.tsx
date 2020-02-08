import { GlobalStyle, styled } from '.';
import Nav from './Nav';
import Triangle from './styles/Triangle';
import { randomNumberPlease } from './utilities/_helpers';

const StyledPage = styled.div`
  z-index: 1;
  background: white;
  color: ${props => props.theme.colors.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.break_large};
  margin: 0 auto;
  padding: 2rem;
`;

const TriangleOverlay = styled.div`
  z-index: 1000;
`;

// TODO: spawn a triangle somewhere within the TiangleOverlay

function spawnTriangles() {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // TODO: spawn them in after 1 second
  // spawn them out after 10 seconds
  // maximum of 20

  // ? make them clickable and when clicked they dissapear?

  return testArray.map(_ => (
    <Triangle
      top={randomNumberPlease(100, 5)}
      right={randomNumberPlease(90, 0)}
      direction={Math.random() < 0.5}
    />
  ));
}

function Page({ children }) {
  return (
    <>
      <GlobalStyle />
      <StyledPage>
        <Nav />
        <TriangleOverlay>
          {spawnTriangles()}
          <Inner>{children}</Inner>
        </TriangleOverlay>
      </StyledPage>
    </>
  );
}

export default Page;
