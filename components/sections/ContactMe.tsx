import styled from 'styled-components';
import Link from 'next/link';

import StyledContainer from '../styles/StyledContainer';
import Header from '../common/Header';
import StyledBorderContainer from '../styles/StyledBorderContainer';
import Icon, { IconWrapper, StyledIcon } from '../common/Icon';
import { IconGrid } from './Skills';

const StyledContactMe = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.theme.break_medium};

  a {
    text-decoration: none;
  }

  ${IconWrapper} {
    ${StyledIcon} {
      transition: 0.3s all ease-in-out;
    }
    :hover {
      ${StyledIcon} {
        transform: scale(1.1);
      }
    }
  }
`;

function ContactMe() {
  return (
    <StyledContainer>
      <StyledContactMe>
        <StyledBorderContainer>
          <Header size="medium">What next?</Header>
          <IconGrid>
            <Link href="/resume">
              <a>
                <Icon iconName="professional" iconType="svg" header="resume" />
              </a>
            </Link>
            <a
              href="https://github.com/gabrielruss?tab=repositories"
              target="_blank"
            >
              <Icon iconName="github" header="github" iconType="svg" />
            </a>
            <Link href="/contact-me">
              <a>
                <Icon iconName="email" iconType="svg" header="contact me" />
              </a>
            </Link>
            {/* <a
              href="https://www.linkedin.com/in/gabriel-russ-2ab06930/"
              target="_blank"
            >
              <Icon iconName="linkedin" header="linkedin" iconType="svg" />
            </a> */}
            {/* <a href="mailto:me@gabrielruss.dev">
              <Icon iconName="email" header="email me" iconType="svg" />
            </a> */}
          </IconGrid>
        </StyledBorderContainer>
      </StyledContactMe>
    </StyledContainer>
  );
}

export default ContactMe;
