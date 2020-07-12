import { styled } from '../styles';
import { StyledBorderContainer } from '../styles/components';
import { Header } from '../common';

// FYI long square is an inside joke between my wife and I
// I am aware what a rectangle is :)
const LongSquare = styled.div`
  z-index: 0;
  background-color: ${(props) => props.theme.colors.teal};
  transition: 0.5s ease all;

  /*  1920 */
  top: 3%;
  left: 21%;
  height: calc(200px + (300 - 200) * ((100vw - 360px) / (1920 - 360)));
  width: calc(600px + (900 - 600) * ((100vw - 360px) / (1920 - 360)));

  @media (max-width: ${(props) => props.theme.break_large}) {
    top: 3%;
    left: 17%;
    height: calc(250px + (300 - 250) * ((100vw - 360px) / (1920 - 360)));
    width: calc(600px + (775 - 600) * ((100vw - 360px) / (1920 - 360)));
  }

  @media (max-width: ${(props) => props.theme.break_medium}) {
    top: 3%;
    left: 17%;
    height: calc(220px + (300 - 220) * ((100vw - 360px) / (1920 - 360)));
    width: 80vw;
  }

  @media (max-width: ${(props) => props.theme.break_small}) {
    top: 3%;
    left: 20%;
    height: calc(350px + (400 - 350) * ((100vw - 360px) / (1920 - 360)));
    width: 75vw;
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

    @media (max-width: ${(props) => props.theme.break_large}) {
      margin-top: 20vh;
    }

    @media (max-width: ${(props) => props.theme.break_medium}) {
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
          <p>
            making the internet a better place, one <code>{`<div>`}</code> at a
            time
          </p>
        </StyledBorderContainer>
        <LongSquare />
      </LongSquareContainer>
    </StyledTitleCard>
  );
}

export default TitleCard;
