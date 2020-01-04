import TitleCard from './TitleCard';
import Skills from './Skills';
import Time from './Time';
import Icon from './common/Icon';

const Page = () => (
  <main>
    <TitleCard />
    <Skills header="what I'm good at">
      <Icon iconType="javascript" />
      <p>ES6+</p>
      <p>React</p>
      <p>TypeScript</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>SASS</p>
    </Skills>
    <Skills header="what I'm interested in">
      <p>Python</p>
      <p>GraphQL</p>
      <p>
        centering things in CSS without getting frustrated and 'display: flex'
        -ing
      </p>
    </Skills>
    <Time />
  </main>
);

export default Page;
