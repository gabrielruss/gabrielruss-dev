import { styled } from '..';
import StyledBorderContainer from '../styles/StyledBorderContainer';
import Header from '../common/Header';

const LongSquare = styled.div`
  z-index: 0;
  background-color: ${props => props.theme.colors.teal};
  transition: 0.5s ease all;

  /*  1920 */
  top: 3%;
  left: 21%;
  height: calc(200px + (300 - 200) * ((100vw - 360px) / (1920 - 360)));
  width: calc(600px + (900 - 600) * ((100vw - 360px) / (1920 - 360)));

  @media (max-width: ${props => props.theme.break_large}) {
    top: 3%;
    left: 17%;
    height: calc(250px + (300 - 250) * ((100vw - 360px) / (1920 - 360)));
    width: calc(600px + (775 - 600) * ((100vw - 360px) / (1920 - 360)));
  }

  @media (max-width: ${props => props.theme.break_medium}) {
    top: 3%;
    left: 17%;
    height: calc(220px + (300 - 220) * ((100vw - 360px) / (1920 - 360)));
    /* height: 50vh; */
    width: 80vw;
    /* width: calc(600px + (750 - 600) * ((100vw - 360px) / (1920 - 360))); */
  }

  @media (max-width: ${props => props.theme.break_small}) {
    top: 3%;
    left: 20%;
    height: calc(350px + (400 - 350) * ((100vw - 360px) / (1920 - 360)));
    width: 75vw;
    /* width: calc(600px + (750 - 600) * ((100vw - 360px) / (1920 - 360))); */
  }
`;

const LongSquareContainer = styled.div`
  position: relative;

  ${StyledBorderContainer} {
    z-index: 1;
  }

  ${LongSquare} {
    position: absolute;
  }
`;

export const StyledTitleCard = styled.div`
  ${LongSquareContainer} {
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
  }
`;

function TitleCard() {
  return (
    <StyledTitleCard>
      <LongSquareContainer>
        <StyledBorderContainer>
          <Header>Gabriel Russ</Header>
          <p>i’m just a guy who’s a web developer for fun</p>
        </StyledBorderContainer>
        <LongSquare />
        {/* <LongSquare /> */}
      </LongSquareContainer>
    </StyledTitleCard>
  );
}

export default TitleCard;
