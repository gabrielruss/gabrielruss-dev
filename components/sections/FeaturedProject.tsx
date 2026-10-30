import Link from 'next/link';

import { styled } from '../styles';
import {
  StyledButton,
  StyledContainer,
  FrostedGlass,
  StatusBadge,
} from '../styles/components';
import { Header } from '../common';

const StyledFeaturedProject = styled.div`
  max-width: ${(props) => props.theme.break_medium};
  padding: 0 2rem;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;

  p {
    margin: 0;
  }
`;

const BuiltWith = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectButton = styled(StyledButton)`
  display: inline-block;
  padding: 1rem 1.5rem;
  text-decoration: none;
`;

function FeaturedProject() {
  return (
    <StyledContainer>
      <StyledFeaturedProject>
        <FrostedGlass>
          <Header size="medium">what i'm building</Header>
          <ProjectContent>
            <Header size="small">DLAMS</Header>
            <StatusBadge>in active development</StatusBadge>
            <p>
              A video game collection tracker with a temporary sandbox demo
            </p>
            <BuiltWith>
              <b>Built with</b>
              <span>frontend: React, TypeScript</span>
              <span>backend: Python, FastAPI, PostgreSQL</span>
              <span>self-hosted on: Raspberry Pi</span>
            </BuiltWith>
            <Link href="/dlams" passHref>
              <ProjectButton as="a">see how it's built</ProjectButton>
            </Link>
          </ProjectContent>
        </FrostedGlass>
      </StyledFeaturedProject>
    </StyledContainer>
  );
}

export default FeaturedProject;
