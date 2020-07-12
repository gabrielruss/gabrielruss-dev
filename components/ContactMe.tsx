import styled from 'styled-components';
import StyledBorderContainer from './styles/StyledBorderContainer';
import Header from './common/Header';
import StyledLink from './styles/StyledLink';
import Icon, { StyledIcon } from './common/Icon';

const RightContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const StyledContactMe = styled.div`
  position: relative;
  max-width: ${(props) => props.theme.break_medium};
  margin: 0 auto;

  ${StyledBorderContainer} {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-auto-flow: column;
    gap: 1rem;
    margin-top: 25vh;
  }
`;

const IconLink = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${StyledIcon} {
    width: 50%;
    margin: 0;
    transition: 0.1s all ease-in-out;

    @media (max-width: ${(props) => props.theme.break_small}) {
      display: none;
    }
  }

  ${StyledLink} {
    place-self: center start;
  }

  :hover {
    ${StyledIcon} {
      transform: scale(1.1);
    }
  }
`;

function ContactMe() {
  return (
    <StyledContactMe>
      <StyledBorderContainer>
        <div>
          <Header>Hi.</Header>
          <p>Thanks for stopping by. I look forward to hearing from you.</p>
        </div>
        <RightContainer>
          <IconLink>
            <StyledLink
              href="https://www.linkedin.com/in/gabriel-russ-2ab06930/"
              target="_blank"
            >
              LinkedIn
            </StyledLink>
            <Icon iconName="linkedin" iconType="svg" />
          </IconLink>
          <IconLink>
            <StyledLink href="mailto:me@gabrielruss.dev" target="_blank">
              Email
            </StyledLink>
            <Icon iconName="email" iconType="svg" />
          </IconLink>
        </RightContainer>
      </StyledBorderContainer>
    </StyledContactMe>
  );
}

export default ContactMe;
