import { styled } from '.';
import Header from './common/Header';
import Grid from './common/Grid';

const StyledSkills = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  height: 100vh;
  /* TODO fix this container thing... */
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

const Skills = () => (
  <StyledSkills>
    <Header type="h2">what I am good at</Header>
    <Grid>
      <p>I am in a grid</p>
      <p>I am in a grid</p>
      <p>I am in a grid</p>
      <p>I am in a grid</p>
      <p>I am in a grid</p>
      <p>I am in a grid</p>
    </Grid>
  </StyledSkills>
);

export default Skills;
