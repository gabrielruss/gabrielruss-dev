import { styled } from '..';
import StyledBorderContainer from '../styles/StyledBorderContainer';
import Header from '../common/Header';

export const StyledTitleCard = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  transition: margin-top 0.2s ease;
  margin-top: 25vh;
  height: 100vh;

  @media (max-width: ${props => props.theme.break_large}) {
    margin-top: 20vh;
  }

  @media (max-width: ${props => props.theme.break_medium}) {
    margin-top: 15vh;
  }

  ${StyledBorderContainer} {
    position: relative;
    z-index: 1;
  }
`;

const LongSquare = styled.div`
  z-index: 0;
  position: relative;
  /* height: 30rem;
  width: 92rem; */
  height: calc(150px + (350 - 150) * ((100vw - 360px) / (1920 - 360)));
  width: calc(300px + (950 - 300) * ((100vw - 360px) / (1920 - 360)));
  margin-left: 35rem;
  margin-top: -25rem;
  background-color: ${props => props.theme.colors.teal};

  /* calc(
        80px + (150 - 80) *
          ((100vw - 360px) / (1920 - 360))
      ); */
`;

const TitleCard = () => (
  <StyledTitleCard>
    <StyledBorderContainer>
      <Header>Gabriel Russ</Header>
      <p>i’m just a guy who’s a web developer for fun</p>
    </StyledBorderContainer>
    <LongSquare />
  </StyledTitleCard>
);

export default TitleCard;
