import { styled } from '..';

const StyledBorderContainer = styled.div`
  max-width: ${props => props.theme.break_large};
  margin: 0 auto;
  padding: 2rem;
  border: 3px solid ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.trans_white};
`;

export default StyledBorderContainer;
