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

function spawnTriangles() {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // TODO: spawn them in after 1 second
  // spawn them out after 10 seconds
  // maximum of 20

  // ? make them clickable and when clicked they dissapear?

  return testArray.map((_, i) => (
    <Triangle
      top={randomNumberPlease(100, 5)}
      right={randomNumberPlease(90, 0)}
      rotation={Math.random() < 0.5 ? '' : 'reverse'}
      width={randomNumberPlease(105, 85)}
      height={randomNumberPlease(75, 55)}
      opacity={randomNumberPlease(65, 35) / 100}
      key={i}
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
