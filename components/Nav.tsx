import { styled } from '.';
import ActiveLink from './common/ActiveLink';

const StyledNav = styled.nav`
  display: grid;
  padding: 0 5rem;
  justify-content: flex-end;
  border-bottom: 3px solid ${props => props.theme.colors.trans_teal};
  margin-left: -17px;

  ul {
    display: grid;
    gap: 4rem;
    margin: 0;
    padding: 0;
    grid-auto-flow: column;
    a {
      text-decoration: none;
      font-size: 2rem;
      font-weight: 700;
      padding: 2rem 0.5rem 0.5rem;
      list-style: none;
      cursor: pointer;
      color: ${props => props.theme.colors.black};

      :hover {
        transition: 0.2s box-shadow ease;
        box-shadow: 0 3px ${props => props.theme.colors.teal};
      }

      &.selected {
        box-shadow: 0 3px ${props => props.theme.colors.teal};
      }
    }
  }

  @media (max-width: ${props => props.theme.break_large}) {
    padding: 0;
    margin: 0;
    justify-content: space-around;
  }
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <ActiveLink href="/">
        <a>home</a>
      </ActiveLink>
      <ActiveLink href="/resume">
        <a>resume</a>
      </ActiveLink>
      <a href="https://github.com/gabrielruss?tab=repositories" target="_blank">
        github
      </a>
    </ul>
  </StyledNav>
);

export default Nav;
