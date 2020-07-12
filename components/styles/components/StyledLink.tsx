import { styled } from '..';

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.aa_teal};

  :hover {
    color: ${(props) => props.theme.colors.aaa_teal};
  }
`;

export default StyledLink;
