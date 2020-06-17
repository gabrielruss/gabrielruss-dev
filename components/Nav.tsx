import { styled } from '.';
import ActiveLink from './common/ActiveLink';
import Link from 'next/link';
import FrostedGlass from './styles/FrostedGlass';
import { useEffect, useState } from 'react';

interface ShowyHideyLinkyProps {
  showNavName: boolean;
}

const ShowyHideyLinky = styled(ActiveLink)`
  background: red;
`;

// const SubTitle1 = styled(Custom).attrs(({ customProperty }) => ({
//   customProperty,
// }))`
//   font-style: italic;
// `;

const StyledNav = styled.nav`
  display: grid;
  padding: 0 5rem;
  justify-content: flex-end;
  /* border-bottom: 3px solid ${(props) => props.theme.colors.trans_teal}; */
  /* small shadow */
  /* box-shadow: 0 0 5rem 5rem ${(props) => props.theme.colors.trans_teal}; */
  /* this one is great big shadow */
  /* box-shadow: 0 0 20rem 35rem ${(props) => props.theme.colors.trans_teal}; */
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
          {/* <ShowyHideyLinky > */}
          <ActiveLink href="/">
            <a className={!showNavName && 'hide-me'}>gabriel russ</a>
          </ActiveLink>
          {/* </ShowyHideyLinky> */}
          <ActiveLink href="/resume">
            <a>resume</a>
          </ActiveLink>
          <a
            href="https://github.com/gabrielruss?tab=repositories"
            target="_blank"
          >
            github
          </a>
        </ul>
      </FrostedGlass>
    </StyledNav>
  );
}

export default Nav;
