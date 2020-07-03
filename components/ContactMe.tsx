import styled from 'styled-components';
import StyledBorderContainer from './styles/StyledBorderContainer';
import Header from './common/Header';
import StyledLink from './styles/StyledLink';

const RightContainer = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  padding: 2rem 0;
`;

const StyledContactMe = styled.div`
  position: relative;

  ${StyledBorderContainer} {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-auto-flow: column;
    gap: 2rem;
    margin-top: 25vh;
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
          <StyledLink
            href="https://github.com/gabrielruss?tab=repositories"
            target="_blank"
          >
            Github
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/gabriel-russ-2ab06930/"
            target="_blank"
          >
            LinkedIn
          </StyledLink>
          <StyledLink href="mailto:me@gabrielruss.dev" target="_blank">
            Email
          </StyledLink>
        </RightContainer>
      </StyledBorderContainer>
    </StyledContactMe>
  );
}

export default ContactMe;
