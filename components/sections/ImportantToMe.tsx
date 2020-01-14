import { styled } from '..';
import Container from '../common/Container';
import Header from '../common/Header';

const ImportantToMeWrapper = styled.div`
  padding-top: 2rem;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    justify-items: center;
    gap: 3rem;
    width: 100vw;
    max-width: ${props => props.theme.break_large};

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
      <Header type="h2">What is important to me?</Header>
      <ul>
        <li>
          <ListItemHeader>Pure, Single Purpose Functions</ListItemHeader>
          <ListItemContent>
            When faced with a complex task, I try and break it down into the
            smallest chunks possible until I can write individual methods for
            each specific task.
          </ListItemContent>
          <ListItemContent>
            I also try my best to ensure that given X input, the output will
            always be Y. Then you have the perfect opportunity to write a test!
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
        <li>
          <ListItemHeader>
            Would someone new to programming be able to follow your logic?
          </ListItemHeader>
          <ListItemContent>
            A lot of times complex business logic can cause spaghetti code. And
            while it might sound delicious, it will make you or someone else's
            life difficult down the road.
            <ListItemContent>
              When things are starting to get crazy, try placing your functions
              in the order in which they get called. If it makes sense, create a
              controller method that has the order of operations for your
              business logic.
            </ListItemContent>
            {/* Everyone loves to save time by naming
            your variables quickly just to be able to tick the box. But keep in
            mind that when you or someone else is reading your code 2 years from
            now, will they understand WHY you did that? If the answer is maybe,
            you should probably give it a better name and/or write a comment. */}
          </ListItemContent>
        </li>
        <li>
          <ListItemHeader>Comment your code</ListItemHeader>
          <ListItemContent>
            Ask yourself, when you or someone else is reading your code 2 years
            from now, will they understand WHY you did that? If the answer is
            maybe, you should probably write a comment.
          </ListItemContent>
          <ListItemContent>
            If it is business logic, try writing the comment similar to a user
            story. "The user should not be able to click Submit if I have not
            filled out their birth date."
          </ListItemContent>
        </li>
        <li>
          <ListItemHeader>
            Name everything in a way that your code comments seem redundant
          </ListItemHeader>
          <ListItemContent>
            Try not to use single letter variables. You may remember that "u"
            means "user", but someone else may not.
          </ListItemContent>
          <ListItemContent>
            Ok so this one is also a bit of an art. You can't exactly name all
            your variables like "shouldTheUserNOTBeAbleToClickTheSubmitButton".
            But I would argue that "disableSubmitButton" is always better than
            simply "disable". Be as brief as possible while still describing
            what it does.
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
