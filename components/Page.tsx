import { styled } from '.';
import TitleCard from './TitleCard';
import Skills from './Skills';
import Time from './Time';

const StyledPage = styled.main`
  /* display: flex;
  flex-flow: column;
  text-align: center; */
`;

const Page = () => (
  <StyledPage>
    <TitleCard />
    <Skills header="what I'm good at">
      <p>ES6+</p>
      <p>React</p>
      <p>TypeScript</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>SASS</p>
      <p>being an OK human</p>
    </Skills>
    <Skills header="what I'm learning">
      <p>Python</p>
      <p>
        how to center things in CSS without getting frustrated and 'display:
        flex' -ing
      </p>
      <p>how to be a better human</p>
    </Skills>
    <Time />
  </StyledPage>
);

export default Page;
