import { styled } from '..';

const StyledBorderContainer = styled.div`
  max-width: ${props => props.theme.break_large};
  margin: 0 auto;
  /* margin-right: auto;
  margin-left: auto; */
  padding: 2rem;
  border: 3px solid ${props => props.theme.colors.black};
`;

const BorderContainer = ({ children }) => (
  <StyledBorderContainer>{children}</StyledBorderContainer>
);

export default BorderContainer;
