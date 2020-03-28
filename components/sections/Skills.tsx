import Header, { StyledHeader } from '../common/Header';
import StyledContainer from '../styles/StyledContainer';
import { styled } from '..';
import FrostedGlass from '../styles/FrostedGlass';

const StyledSkills = styled.div`
  > ${StyledHeader} {
    margin-bottom: 3rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 5rem;
  max-width: ${props => props.theme.break_large};
  width: calc(100vw - 33px);
  padding: 0 2rem;
`;

interface ISkillsProps {
  header: string | JSX.Element;
}

function Skills({ header, children }: React.PropsWithChildren<ISkillsProps>) {
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
