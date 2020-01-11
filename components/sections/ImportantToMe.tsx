import { styled } from '..';
import Container from '../common/Container';
import Header from '../common/Header';

const ImportantToMeWrapper = styled.div`
  padding-top: 2rem;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 3rem;

    li {
      width: 35rem;
      font-size: 3rem;
      list-style: none;
      text-align: left;
    }
  }
`;

const ImportantToMe = () => (
  <Container>
    <ImportantToMeWrapper>
      <Header type="h2">What is important to me?</Header>
      <ul>
        <li>Pure, Single Purpose Functions</li>
        <li>Don't repeat yourself</li>
        <li>Would someone new to programming be able to follow your logic?</li>
        <li>Comment your code</li>
        <li>Name everything in a way that your code comments seem redundant</li>
      </ul>
    </ImportantToMeWrapper>
  </Container>
);

export default ImportantToMe;
