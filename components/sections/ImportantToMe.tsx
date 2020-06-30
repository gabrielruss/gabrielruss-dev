import { styled } from '..';
import StyledContainer from '../styles/StyledContainer';
import Header from '../common/Header';
import FrostedGlass from '../styles/FrostedGlass';

const ImportantToMeWrapper = styled.div`
  padding: 10rem 3rem;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45rem, 1fr));
    justify-items: center;
    gap: 3rem;
    width: 90vw;
    max-width: ${(props) => props.theme.break_large};
    align-items: center;
    padding: 2rem;

    li {
      width: 40rem;
      list-style: none;
      text-align: left;
    }
  }

  @media (max-width: ${(props) => props.theme.break_small}) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      padding: 2rem;

      li {
        width: auto;
      }
    }
  }
`;

const ListItemContent = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

function ImportantToMe() {
  return (
    <StyledContainer>
      <ImportantToMeWrapper>
        <FrostedGlass>
          <Header size="medium">practices important to me</Header>
          <ul>
            <li>
              <Header size="small">build with empathy</Header>
              <ListItemContent>
                I work to understand my users and put myself in their shoes.
                Would I want to use the application I'm building?
              </ListItemContent>
            </li>
            <li>
              <Header size="small">UX comes first</Header>
              <ListItemContent>
                The user experience is my top priority. As a UI developer, my
                job is to make the users' jobs easier.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">pure, single purpose functions</Header>
              <ListItemContent>
                I break complex tasks down into the smallest chunks possible
                until single purpose, pure functions can be written for each
                task.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">keep things simple</Header>
              <ListItemContent>
                Does my solution elegantly solve the problem? Developers at any
                experience level should be able to understand and use my code.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">code comments</Header>
              <ListItemContent>
                When code is required to be complex, it can be difficult to
                understand and debug. Writing comments helps others to know why
                each piece of the code is needed.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">write tests</Header>
              <ListItemContent>
                I have found numerous issues by writing tests for my code.
                Running those tests pre-deployment catches mistakes before the
                users are affected.
              </ListItemContent>
            </li>
          </ul>
        </FrostedGlass>
      </ImportantToMeWrapper>
    </StyledContainer>
  );
}

export default ImportantToMe;
