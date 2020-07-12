import styled from 'styled-components';
import Link from 'next/link';
import {
  StyledContainer,
  StyledBorderContainer,
  IconGrid,
} from '../styles/components';
import { Header, Icon, IconWrapper, StyledIcon } from '../common';

const StyledWhatsNext = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.theme.break_medium};

  a {
    text-decoration: none;
  }

  ${IconWrapper} {
    ${StyledIcon} {
      transition: 0.1s all ease-in-out;
    }
    :hover {
      ${StyledIcon} {
        transform: scale(1.1);
      }
    }
  }
`;

function WhatsNext() {
  return (
    <StyledContainer>
      <StyledWhatsNext>
        <StyledBorderContainer>
          <Header size="medium">what's next?</Header>
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
          </IconGrid>
        </StyledBorderContainer>
      </StyledWhatsNext>
    </StyledContainer>
  );
}

export default WhatsNext;
