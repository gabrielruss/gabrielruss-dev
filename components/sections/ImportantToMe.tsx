import { styled } from '..';
import Container from '../common/Container';
import Header from '../common/Header';

const ImportantToMeWrapper = styled.div`
  /* padding-top: 2rem; */
  padding: 10rem 3rem;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    justify-items: center;
    gap: 3rem;
    width: 90vw;
    max-width: ${props => props.theme.break_large};
    align-items: center;

    li {
      width: 50rem;
      list-style: none;
      text-align: left;
    }
  }
`;

const ListItemHeader = styled.div`
  font-size: 4rem;
  font-weight: 400;
  text-align: center;
`;

const ListItemContent = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

const ImportantToMe = () => (
  <Container>
    <ImportantToMeWrapper>
      <Header type="h2">what coding practices are important to me?</Header>
      <ul>
        <li>
          <ListItemHeader>Build with empathy</ListItemHeader>
          <ListItemContent>
            Understand your audience and try to put yourself in their shoes.
            Would YOU enjoy using the thing you are building all day every day.
          </ListItemContent>
        </li>
        <li>
          <ListItemHeader>Movement towards accessibility</ListItemHeader>
          <ListItemContent>
            Accessibility will always be on my mind when designing a website.
            Things should looks nice, to as many users as possible.
          </ListItemContent>
        </li>
        <li>
          <ListItemHeader>UX before all</ListItemHeader>
          <ListItemContent>
            The user experience should be top priority. Making things easy is
            hard. As UX/UI, our job is made difficult by making our user's lives
            easier. That gives me purpose and I love it.
          </ListItemContent>
        </li>
        <li>
          <ListItemHeader>Pure, Single Purpose Functions</ListItemHeader>
          <ListItemContent>
            Break complex tasks down into the smallest chunks possible until you
            can write individual methods for each task.
          </ListItemContent>
          <ListItemContent>
            Try to ensure that given X input, the output will always be Y. Then
            you have the perfect opportunity to write a test!
          </ListItemContent>
        </li>
        <li>
          <ListItemHeader>Don't repeat yourself</ListItemHeader>
          <ListItemContent>
            This is always more of an art than a science. How many times do you
            write a piece of code before you abstract it out into a separate
            file and make it reusable? I usually say 2-3 times is a good
            starting point.
          </ListItemContent>
        </li>
        {/* <li>
          <ListItemHeader>
            Could someone new to programming understand?
          </ListItemHeader>
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
          <ListItemHeader>Comment your code</ListItemHeader>
          <ListItemContent>
            When you or someone else reads your code years from now, will they
            understand WHY you did that? If the answer is maybe, you should
            probably write a comment.
          </ListItemContent>
          <ListItemContent>
            If it is business logic, write the comment similar to a user story.
            "The user should not be able to click Submit if they have not filled
            out their birth date."
          </ListItemContent>
        </li>

        <li>
          <ListItemHeader>Use descriptive naming</ListItemHeader>
          <ListItemContent>
            Try not to use single letter variables. You may remember that "u"
            means "user", but someone else may not.
          </ListItemContent>
          <ListItemContent>
            "disableSubmitButton" is always better than simply "disable". Be as
            brief as possible while still describing what it does.
          </ListItemContent>
        </li>
        <li>
          <ListItemHeader>Use some sort of typing</ListItemHeader>
          <ListItemContent>
            I personally like TypeScript a lot. I feel naked when I don't use it
            now. Other options are great as well such as Flow or using PropTypes
            for your React components.
          </ListItemContent>
        </li>
      </ul>
    </ImportantToMeWrapper>
  </Container>
);

export default ImportantToMe;
