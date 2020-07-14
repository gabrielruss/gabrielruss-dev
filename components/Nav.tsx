import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { styled } from './styles';
import { FrostedGlass } from './styles/components';
import { ActiveLink } from './common';

const StyledNav = styled.nav<{ showNavName: boolean; isHome: boolean }>`
  padding: 0 5rem;
  margin-left: -17px;
  position: sticky;
  display: grid;
  top: 0;

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
      transition: 0.3s margin ease-in-out;
      a {
        :first-child {
          position: unset;
        }
      }
    }
  }

  @media (max-width: ${(props) => props.theme.break_small}) {
    ul {
      text-align: center;
      gap: ${(props) => (props.showNavName && props.isHome ? '0' : '')};
      padding: ${(props) => (props.showNavName ? '0 2rem' : '0')};

      a {
        opacity: ${(props) => (props.showNavName && props.isHome ? 0 : 1)};
        white-space: nowrap;

        :nth-child(2) {
          display: ${(props) => (props.isHome ? 'inherit' : 'none')};
        }

        :nth-child(2),
        :nth-child(3) {
          width: ${(props) =>
            props.showNavName && props.isHome ? '3rem' : 'auto'};
          transition: 0.3s width ease-in-out;
        }

        :last-child {
          opacity: 1;
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
    <StyledNav
      showNavName={showNavName || router.route !== '/'}
      isHome={router.route === '/'}
    >
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
          <ActiveLink href="/contact-me">
            <a>contact me</a>
          </ActiveLink>
          {/* <a href="mailto:me@gabrielruss.dev">email me</a> */}
        </ul>
      </FrostedGlass>
    </StyledNav>
  );
}

export default Nav;
