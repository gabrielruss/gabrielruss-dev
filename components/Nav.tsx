import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { styled } from '.';
import ActiveLink from './common/ActiveLink';
import FrostedGlass from './styles/FrostedGlass';

const StyledNav = styled.nav<{ showNavName: boolean }>`
  padding: 0 5rem;
  margin-left: -17px;
  position: sticky;
  display: grid;
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
      transition: 0.6s opacity ease-in-out;

      :hover {
        transition: 0.2s box-shadow ease;
        box-shadow: 0 3px ${(props) => props.theme.colors.aa_teal};
      }
      &.selected {
        box-shadow: 0 3px ${(props) => props.theme.colors.aa_teal};
      }

      :first-child {
        position: absolute;
        left: 0;
        opacity: ${(props) => (props.showNavName ? 1 : 0)};
      }
    }
  }

  @media (max-width: ${(props) => props.theme.break_large}) {
    padding: 0;
    margin: 0;
    justify-content: space-around;

    ul {
      gap: 2rem;
      margin-left: ${(props) => (props.showNavName ? 'unset' : '-130px')};
      transition: 0.5s margin ease-in-out;
      a {
        :first-child {
          position: unset;
        }
      }
    }
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
    <StyledNav showNavName={showNavName || router.route !== '/'}>
      <FrostedGlass>
        <ul>
          <ActiveLink href="/">
            <a>gabriel russ</a>
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
          <a href="mailto:me@gabrielruss.dev">email me</a>
        </ul>
      </FrostedGlass>
    </StyledNav>
  );
}

export default Nav;
