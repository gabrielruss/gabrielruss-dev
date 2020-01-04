import { styled } from '.';

const StyledTitleContainer = styled.div`
  max-width: ${props => props.theme.break_large};
  margin-right: auto;
  margin-left: auto;
  padding: 2rem;
  border: 3px solid ${props => props.theme.colors.black};
`;

const TitleContainer = ({ children }) => (
  <StyledTitleContainer>{children}</StyledTitleContainer>
);

export default TitleContainer;
