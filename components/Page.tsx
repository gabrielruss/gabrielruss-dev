import { GlobalStyle, styled } from '.';
import Nav from './Nav';
import { TriangleOverlay } from './sections/TriangleOverlay';

const StyledPage = styled.div`
  z-index: 1;
  background: white;
  color: ${(props) => props.theme.colors.black};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.break_large};
  margin: 0 auto;
  padding: 2rem;
`;

function Page({ children }) {
  return (
    <>
      <GlobalStyle />
      <StyledPage>
        <Nav />
        <TriangleOverlay>
          <Inner>{children}</Inner>
        </TriangleOverlay>
      </StyledPage>
    </>
  );
}

export default Page;
