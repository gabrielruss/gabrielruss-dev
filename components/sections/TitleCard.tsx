import { styled } from '..';
import BorderContainer from '../common/BorderContainer';
import Header, { StyledHeader } from '../common/Header';

const StyledTitleCard = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  /* todo: height is weird sometimes  */
  transition: margin-top 0.2s ease;
  margin-top: 25vh;
  height: 100vh;

  @media (max-width: ${props => props.theme.break_large}) {
    margin-top: 20vh;

    /* ${StyledHeader}:first-of-type {
      font-size: calc(
        7rem + (150 - 70) *
          ((100vw - ${props => props.theme.break_small}) / (1920 - 500))
      );
    } */
  }
`;

const TitleCard = () => (
  <StyledTitleCard>
    <BorderContainer>
      <Header>Gabriel Russ</Header>
      <p>i’m just a guy who’s a web developer for fun</p>
    </BorderContainer>
  </StyledTitleCard>
);

export default TitleCard;
