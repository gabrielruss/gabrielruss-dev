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
              A video game collection tracker with a read-only demo you can
              try.
              <br />
              Built with React and TypeScript on the frontend and Python,
              FastAPI, and PostgreSQL on the backend, and self-hosted on a
              Raspberry Pi.
            </p>
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
