import { styled } from '../styles';
import { StyledContainer, FrostedGlass } from '../styles/components';
import { Header, StyledHeader } from '../common';

const StyledSkills = styled.div`
  ${StyledHeader} {
    margin-bottom: 3rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 5rem;
  max-width: ${(props) => props.theme.break_large};
  width: calc(100vw - 33px);
  padding: 0 2rem;

  ${StyledHeader} {
    /* stops skill headers from inheriting margin-bottom above */
    margin-bottom: unset;
  }
`;

interface SkillsProps {
  header: string | JSX.Element;
}

function Skills({ header, children }: React.PropsWithChildren<SkillsProps>) {
  return (
    <StyledContainer>
      <StyledSkills>
        <FrostedGlass>
          <Header size="medium">{header}</Header>
          <SkillsGrid>{children}</SkillsGrid>
        </FrostedGlass>
      </StyledSkills>
    </StyledContainer>
  );
}

export default Skills;
