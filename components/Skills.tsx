// import { styled } from '.';
import Header from './common/Header';
import Grid from './common/Grid';
import Container from './common/Container';

// const StyledSkills = styled.div`
//   display: flex;
//   flex-flow: column;
//   text-align: center;
//   height: 100vh;
//   /* TODO fix this container thing... */
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
// `;

const Skills = ({ header, children }) => (
  <Container>
    <Header type="h2">{header}</Header>
    <Grid>{children}</Grid>
  </Container>
);

export default Skills;
