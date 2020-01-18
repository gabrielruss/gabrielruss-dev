import { GlobalStyle, styled } from '.';
import Nav from './Nav';

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.colors.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.break_large};
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledPage>
      <Nav />
      <Inner>{children}</Inner>
    </StyledPage>
  </>
);

export default Page;
