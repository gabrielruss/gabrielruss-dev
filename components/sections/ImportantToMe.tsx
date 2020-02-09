import { styled } from '..';
import StyledContainer from '../styles/StyledContainer';
import Header from '../common/Header';
import FrostedGlass from '../common/FrostedGlass';

const ImportantToMeWrapper = styled.div`
  padding: 10rem 3rem;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
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
          <Header size="medium">
            what coding practices are important to me?
          </Header>
          <ul>
            <li>
              <Header size="small">Build with empathy</Header>
              <ListItemContent>
                Understand your audience and try to put yourself in their shoes.
                Would YOU enjoy using the thing you are building all day every
                day.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">Movement towards accessibility</Header>
              <ListItemContent>
                Accessibility will always be on my mind when designing a
                website. Things should looks nice, to as many users as possible.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">UX before all</Header>
              <ListItemContent>
                The user experience should be top priority. Making things easy
                is hard. As UX/UI, our job is made difficult by making our
                user's lives easier. That gives me purpose and I love it.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">Pure, Single Purpose Functions</Header>
              <ListItemContent>
                Break complex tasks down into the smallest chunks possible until
                you can write individual methods for each task.
              </ListItemContent>
              <ListItemContent>
                Try to ensure that given X input, the output will always be Y.
                Then you have the perfect opportunity to write a test!
              </ListItemContent>
            </li>
            <li>
              <Header size="small">Don't repeat yourself</Header>
              <ListItemContent>
                This is always more of an art than a science. How many times do
                you write a piece of code before you abstract it out into a
                separate file and make it reusable? I usually say 2-3 times is a
                good starting point.
              </ListItemContent>
            </li>
            {/* <li>
          <Header size="small">
          Could someone new to programming understand?
          </Header>
          <ListItemContent>
          A lot of times complex business logic can cause spaghetti code.
          </ListItemContent>
          <ListItemContent>
          Try placing your functions in the order in which they get called. If
          it makes sense, create a controller method that has the order of
          operations for your business logic.
          </ListItemContent>
        </li> */}
            <li>
              <Header size="small">Comment your code</Header>
              <ListItemContent>
                When you or someone else reads your code years from now, will
                they understand WHY you did that? If the answer is maybe, you
                should probably write a comment.
              </ListItemContent>
              <ListItemContent>
                If it is business logic, write the comment similar to a user
                story. "The user should not be able to click Submit if they have
                not filled out their birth date."
              </ListItemContent>
            </li>

            <li>
              <Header size="small">Use descriptive naming</Header>
              <ListItemContent>
                Try not to use single letter variables. You may remember that
                "u" means "user", but someone else may not.
              </ListItemContent>
              <ListItemContent>
                "disableSubmitButton" is always better than simply "disable". Be
                as brief as possible while still describing what it does.
              </ListItemContent>
            </li>
            <li>
              <Header size="small">Use some sort of typing</Header>
              <ListItemContent>
                I personally like TypeScript a lot. I feel naked when I don't
                use it now. Other options are great as well such as Flow or
                using PropTypes for your React components.
              </ListItemContent>
            </li>
          </ul>
        </FrostedGlass>
      </ImportantToMeWrapper>
    </StyledContainer>
  );
}

export default ImportantToMe;
