import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { styled } from './styles';
import { FrostedGlass } from './styles/components';
import { ActiveLink } from './common';

const NavLinkWrapper = styled.div`
  display: grid;
  gap: 4rem;
  margin: 0;
  padding: 0;
  grid-auto-flow: column;
  justify-content: flex-end;
`;

const StyledNav = styled.nav<{ showNavName: boolean }>`
  padding: 0 5rem;
  margin-left: -17px;
  position: sticky;
  display: grid;
  top: 0;

  ${NavLinkWrapper} {
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

    ${NavLinkWrapper} {
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

  @media (max-width: ${(props) => props.theme.break_nav}) {
    ${NavLinkWrapper} {
      /* 16px: nav side padding. 27.5em: widest row of 5 links, with slack */
      font-size: min(2rem, calc((100vw - 16px) / 27.5));
      gap: 0.6em;
      /* width of the hidden name link plus one gap */
      margin-left: ${(props) => (props.showNavName ? 'unset' : '-7em')};

      a {
        font-size: inherit;
        padding: 2rem 0.3em 0.5rem;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.break_small}) {
    ${NavLinkWrapper} {
      /* 23em: widest row of 4 links (one is hidden below), with slack */
      font-size: min(2rem, calc((100vw - 16px) / 23));
      text-align: center;
      margin-left: unset;

      a {
        opacity: 1;
        white-space: nowrap;

        :first-child {
          opacity: 1;
        }

        &.selected {
          display: none;
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
        <NavLinkWrapper>
          <ActiveLink href="/">
            <a>gabriel russ</a>
          </ActiveLink>
          <ActiveLink href="/resume">
            <a>resume</a>
          </ActiveLink>
          <ActiveLink href="/dlams">
            <a>project</a>
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
        </NavLinkWrapper>
      </FrostedGlass>
    </StyledNav>
  );
}

export default Nav;
