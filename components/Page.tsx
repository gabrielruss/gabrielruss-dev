import TitleCard from './TitleCard';
import Skills from './Skills';
import Time from './Time';
import Icon from './common/Icon';

const Page = () => (
  <main>
    <TitleCard />
    <Skills header="what I'm good at">
      <Icon iconType="javascript" title="JavaScript" />
      <Icon iconType="react" title="React" />
      <Icon iconType="typescript" title="TypeScript" />
      <Icon iconType="html" title="HTML" />
      <Icon iconType="css" title="CSS" />
      <Icon iconType="sass" title="SASS" />
    </Skills>
    <Skills header="what I'm interested in">
      <p>Python</p>
      <p>GraphQL</p>
      <p>Styled Components</p>
      <p>
        centering things in CSS without getting frustrated and 'display: flex'
        -ing
      </p>
    </Skills>
    <Time />
  </main>
);

export default Page;
