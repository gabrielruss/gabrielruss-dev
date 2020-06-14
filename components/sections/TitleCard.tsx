import { styled } from '..';
import StyledBorderContainer from '../styles/StyledBorderContainer';
import Header from '../common/Header';
import { useRef, useEffect, MutableRefObject } from 'react';
import { debounce, throttle } from '../util/_helpers';

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
  const ref = useRef(null);

  const handleTopCheck = (element) => {
    if (element) {
      const { top } = element.getBoundingClientRect();
      if (top <= 50) {
        console.log('below');
      } else {
        console.log('above');
      }
    }
  };

  const handleScroll = throttle(() => handleTopCheck(ref.current), 1000);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledTitleCard>
      <LongSquareContainer>
        <StyledBorderContainer>
          <Header>Gabriel Russ</Header>
          <p ref={ref}>i’m just a guy who’s a web developer for fun</p>
        </StyledBorderContainer>
        <LongSquare />
      </LongSquareContainer>
    </StyledTitleCard>
  );
}

export default TitleCard;
