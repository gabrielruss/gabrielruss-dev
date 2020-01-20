import { styled } from '..';
import BorderContainer from '../common/BorderContainer';
import Header from '../common/Header';

const StyledTitleCard = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  margin-top: 30rem;
  height: 100vh;

  h1 {
    color: ${props => props.theme.colors.aaa_teal};
    font-size: 15rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${props => props.theme.break_small}) {
    h1 {
      font-size: 20vw;
    }
    h3 {
      font-size: 4vw;
    }
  }
`;

const TitleCard = () => (
  <StyledTitleCard>
    <BorderContainer>
      <Header>Gabriel Russ</Header>
      <h3>i’m just a guy who’s a web developer for fun</h3>
    </BorderContainer>
  </StyledTitleCard>
);

export default TitleCard;
