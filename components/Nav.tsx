import { styled } from '.';

const StyledNav = styled.nav`
  display: grid;

  padding: 0 5rem;
  justify-content: flex-end;
  border-bottom: 3px solid ${props => props.theme.colors.trans_teal};

  ul {
    display: grid;
    gap: 5rem;
    margin: 0;
    padding: 0;
    grid-auto-flow: column;
    li {
      font-size: 2rem;
      font-weight: 700;
      padding: 2rem 0.5rem 0.5rem;
      list-style: none;
      cursor: pointer;

      :hover {
        transition: 0.2s box-shadow ease;
        box-shadow: 0 3px ${props => props.theme.colors.teal};
      }
    }
  }

  @media (max-width: ${props => props.theme.break_large}) {
    justify-content: center;
    transition: 1s ease all;
  }

  @media only screen and (max-width: ${props => props.theme.break_small}) {
    padding: 0 1rem;
  }
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li>about me</li>
      <li>projects</li>
    </ul>
  </StyledNav>
);

export default Nav;
