import Header, { StyledHeader } from '../common/Header';
import Container from '../common/Container';
import { styled } from '..';

const StyledSkills = styled.div`
  > ${StyledHeader} {
    margin-bottom: 3rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 5rem;
  max-width: ${props => props.theme.break_large};
  width: 100vw;
  padding: 0 2rem;
`;

const Skills = ({ header, children }) => (
  <Container>
    <StyledSkills>
      <Header type="h2">{header}</Header>
      <SkillsGrid>{children}</SkillsGrid>
    </StyledSkills>
  </Container>
);

export default Skills;
