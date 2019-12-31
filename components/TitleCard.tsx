import { styled } from './';

const StyledTitleCard = styled.div`
  text-align: center;
  width: 100%;

  h1 {
    color: ${props => props.theme.colors.black};
    font-size: 15rem;
    margin-top: 30rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${props => props.theme.m_breakpoint}) {
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
    <h1>gabriel russ</h1>
    <h3>i’m just a guy who’s a web developer for fun</h3>
  </StyledTitleCard>
);

export default TitleCard;
