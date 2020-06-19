import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { styled } from '.';
import ActiveLink from './common/ActiveLink';
import FrostedGlass from './styles/FrostedGlass';

// const SubTitle1 = styled(Custom).attrs(({ customProperty }) => ({
//   customProperty,
// }))`
//   font-style: italic;
// `;

const StyledNav = styled.nav`
  padding: 0 5rem;
  margin-left: -17px;
  position: sticky;
  top: 0;
  z-index: 9999;

  ul {
    display: grid;
    gap: 4rem;
    margin: 0;
    padding: 0;
    grid-auto-flow: column;
    justify-content: flex-end;

    a {
      text-decoration: none;
      font-size: 2rem;
      font-weight: 700;
      padding: 2rem 0.5rem 0.5rem;
      list-style: none;
      cursor: pointer;
      color: ${(props) => props.theme.colors.black};
      opacity: 1;
      transition: 0.6s opacity ease-in-out;

      :first-child {
        position: absolute;
        left: 0;
      }

      :hover {
        transition: 0.2s box-shadow ease;
        box-shadow: 0 3px ${(props) => props.theme.colors.aa_teal};
      }
      &.selected {
        box-shadow: 0 3px ${(props) => props.theme.colors.aa_teal};
      }

      &.hide-me {
        opacity: 0;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.break_large}) {
    padding: 0;
    margin: 0;
    justify-content: space-around;
  }
`;

function Nav() {
  const router = useRouter();
  const [showNavName, setShowNavName] = useState(false);

  const isNameOffScreen = () =>
    window.innerHeight / 2 - window.scrollY + 150 < 0;

  useEffect(() => {
    const handleScroll = () => {
      const nameOffScreen = isNameOffScreen();

      if (nameOffScreen && !showNavName) {
        setShowNavName(true);
      } else if (!nameOffScreen && showNavName) {
        setShowNavName(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showNavName]);

  useEffect(() => {
    const nameOffScreen = isNameOffScreen();
    if (nameOffScreen && !showNavName) {
      setShowNavName(true);
    } else if (!nameOffScreen && showNavName) {
      setShowNavName(false);
    }
  }, []);

  return (
    <StyledNav>
      <FrostedGlass>
        <ul>
          <ActiveLink href="/">
            <a className={router.route === '/' && !showNavName && 'hide-me'}>
              gabriel russ
            </a>
          </ActiveLink>
          <ActiveLink href="/resume">
            <a>resume</a>
          </ActiveLink>
          <a
            href="https://github.com/gabrielruss?tab=repositories"
            target="_blank"
          >
            github
          </a>
          <a href="mailto:contact.me@gabrielruss.dev">
            contact.me@gabrielruss.dev
          </a>
        </ul>
      </FrostedGlass>
    </StyledNav>
  );
}

export default Nav;
