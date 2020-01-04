// import { styled } from '.';
import Header from './common/Header';
import Container from './common/Container';

// const StyledTime = styled.div`
//   display: flex;
//   flex-flow: column;
//   text-align: center;
//   height: 100vh;
//   /* TODO fix this container thing... */
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
// `;

const Time = () => (
  <Container>
    <Header type="h2">I have been a developer for give or take...</Header>
    <p>2 years</p>
  </Container>
);

export default Time;
