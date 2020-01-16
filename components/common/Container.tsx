import { styled } from '../';

const StyledContainer = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0px 5px 5px ${props => props.theme.colors.trans_black}; */
    /* 0px -5px 5px ${props => props.theme.colors.trans_black}; */
  /* flex-flow: column; */
  /* max-width: ${props => props.theme.break_large}; */
  /* margin-right: auto;
  margin-left: auto; */
  /* TODO: this is not working as a way to give our containers height */
  /* margin-top: 50%; */
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
