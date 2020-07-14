import { styled, GlobalStyle } from './styles';
import Nav from './Nav';
import { TriangleOverlay } from './sections';

const StyledPage = styled.div`
  z-index: 1;
  background: white;
  color: ${(props) => props.theme.colors.black};
`;

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  padding: 0 5rem;
`;

const Inner = styled.main`
  max-width: ${(props) => props.theme.break_large};
  margin: 0 auto;
  padding: 2rem;
`;

function Page({ children }) {
  return (
    <>
      <GlobalStyle />
      <StyledPage>
        <NavWrapper>
          <Nav />
        </NavWrapper>
        <TriangleOverlay>
          <Inner>{children}</Inner>
        </TriangleOverlay>
      </StyledPage>
    </>
  );
}

export default Page;
