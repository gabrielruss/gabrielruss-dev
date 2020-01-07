import Header from './common/Header';
import Grid from './common/Grid';
import Container from './common/Container';

// TODO put some padding after the ${StyledContainer} > Header

const Skills = ({ header, children }) => (
  <Container>
    <Header type="h2">{header}</Header>
    <Grid>{children}</Grid>
  </Container>
);

export default Skills;
