import { styled } from '..';
import StyledBorderContainer from '../styles/StyledBorderContainer';
import Header, { StyledHeader } from '../common/Header';

export const StyledTitleCard = styled.div`
  position: relative;

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

  /* WIP */
  ${StyledBorderContainer} {
    position: -webkit-sticky;
    position: sticky;
    top: 25vh;

    @media (max-width: ${props => props.theme.break_large}) {
      top: 20vh;
    }

    @media (max-width: ${props => props.theme.break_medium}) {
      top: 15vh;
    }
  }
`;

const TitleCard = () => (
  <StyledTitleCard>
    <StyledBorderContainer>
      <Header>Gabriel Russ</Header>
      <p>i’m just a guy who’s a web developer for fun</p>
    </StyledBorderContainer>
  </StyledTitleCard>
);

export default TitleCard;
