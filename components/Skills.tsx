import Header, { StyledHeader } from './common/Header';
import Grid from './common/Grid';
import Container from './common/Container';
import { styled } from '.';

const StyledSkills = styled.div`
  > ${StyledHeader} {
    margin-bottom: 3rem;
  }
`;

const Skills = ({ header, children }) => (
  <Container>
    <StyledSkills>
      <Header type="h2">{header}</Header>
      <Grid>{children}</Grid>
    </StyledSkills>
  </Container>
);

export default Skills;
