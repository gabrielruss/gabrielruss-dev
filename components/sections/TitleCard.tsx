import { styled } from '..';
import BorderContainer from '../common/BorderContainer';
import Header from '../common/Header';

const StyledTitleCard = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  margin-top: 30rem;
  height: 100vh;
`;

const TitleCard = () => (
  <StyledTitleCard>
    <BorderContainer>
      <Header>Gabriel Russ</Header>
      <Header type="h4">i’m just a guy who’s a web developer for fun</Header>
    </BorderContainer>
  </StyledTitleCard>
);

export default TitleCard;
