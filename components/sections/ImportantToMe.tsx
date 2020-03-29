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
    max-width: ${props => props.theme.break_large};
    align-items: center;
    padding: 2rem;

    li {
      width: 40rem;
      list-style: none;
      text-align: left;
    }
  }

  @media (max-width: ${props => props.theme.break_small}) {
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
                I work to understand my users and try to put myself in their
                shoes. Would I want to use the application I'm building?
              </ListItemContent>
            </li>
            <li>
              <Header size="small">UX before all</Header>
              <ListItemContent>
                The user experience is my top priority. Making things easy is
                hard. As a UI developer, my job isn't complete until I've made
                the users' jobs easier.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">pure, single purpose functions</Header>
              <ListItemContent>
                I try to break complex tasks down into the smallest chunks
                possible until individual pure functions can be written for each
                task.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">don't repeat yourself</Header>
              <ListItemContent>
                This is always more of an art than a science. How many times do
                you write a piece of code before you abstract it out into a
                separate file and make it reusable? I usually say 2-3 times is a
                good starting point.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">code comments</Header>
              <ListItemContent>
                If I am writing some code that isn't super obvious or is based
                on complex business logic, I always try and write a comment
                explaining why that code is there.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">use TypeScript</Header>
              <ListItemContent>
                I have fully jumped aboard the TypeScript train. I have caught
                numerous coding issues pre-deployment because of strongly typing
                my code.
              </ListItemContent>
            </li>
          </ul>
        </FrostedGlass>
      </ImportantToMeWrapper>
    </StyledContainer>
  );
}

export default ImportantToMe;
