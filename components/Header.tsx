import { styled } from './';

const StyledNav = styled.nav`
  display: grid;

  padding-right: 5rem;
  justify-content: flex-end;
  border-bottom: 1px solid ${props => props.theme.colors.teal};

  ul {
    display: grid;
    gap: 10rem;
    margin: 0;
    padding: 0;
    grid-auto-flow: column;
    li {
      font-size: 3rem;
      padding: 2rem;
      list-style: none;
      cursor: pointer;

      :hover {
        background: red;
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoint}) {
    justify-content: center;
    transition: 1s ease all;
  }
`;

const Header = () => (
  <StyledNav>
    <ul>
      <li>about me</li>
      <li>projects</li>
    </ul>
  </StyledNav>
);

export default Header;
