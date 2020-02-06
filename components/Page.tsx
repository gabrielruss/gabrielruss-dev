import { GlobalStyle, styled } from '.';
import Nav from './Nav';

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

const Page = ({ children }) => (
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

export default Page;
