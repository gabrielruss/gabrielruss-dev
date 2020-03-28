import { styled } from '..';

const StyledButton = styled.button`
  padding: 1rem 1.5rem 0.25rem 1.5rem;
  background-color: ${props => props.theme.colors.aaa_teal};
  color: ${props => props.theme.colors.white};
  font-family: 'overpass-regular';
  font-size: 2rem;
  font-weight: bold;
  border: none;
  border-radius: 2rem;

  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 2px 1px ${props => props.theme.colors.teal};
  }

  :active {
    box-shadow: 0px 0px 3px 1px ${props => props.theme.colors.teal};
  }
`;

export default StyledButton;
