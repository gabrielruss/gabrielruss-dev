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

    ${StyledHeader}:first-of-type {
      /* font-size: 8rem; */
      font-size: calc(
        80px + (150 - 80) *
          ((100vw - ${props => props.theme.break_small}) / (1366 - 500))
      );
    }
  }
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
