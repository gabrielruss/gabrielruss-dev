import { styled } from '../';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  height: 100vh;
  max-width: ${props => props.theme.break_large};
  margin-right: auto;
  margin-left: auto;
  margin-top: 50%;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
