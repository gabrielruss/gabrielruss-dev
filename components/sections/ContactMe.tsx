import styled from 'styled-components';
import Link from 'next/link';

import StyledContainer from '../styles/StyledContainer';
import Header from '../common/Header';
import StyledBorderContainer from '../styles/StyledBorderContainer';
import Icon from '../common/Icon';
import { IconGrid } from './Skills';

const StyledContactMe = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.theme.break_medium};

  a {
    text-decoration: none;
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
                <Icon iconName="arrow-right" iconType="svg" header="resume" />
              </a>
            </Link>
            <a href="https://www.linkedin.com/in/gabriel-russ-2ab06930/">
              <Icon iconName="linkedin" header="linkedin" iconType="svg" />
            </a>
            <a href="mailto:me@gabrielruss.dev">
              <Icon iconName="email" header="email me" iconType="svg" />
            </a>
          </IconGrid>
        </StyledBorderContainer>
      </StyledContactMe>
    </StyledContainer>
  );
}

export default ContactMe;
