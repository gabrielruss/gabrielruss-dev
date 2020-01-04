import { styled } from '../';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  height: 100vh;
  /* TODO fix this container thing... */
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
