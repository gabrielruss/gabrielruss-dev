import TitleCard from './TitleCard';
import Skills from './Skills';
import Time from './Time';
import Icon from './common/Icon';
import Header from './common/Header';

const Page = () => (
  <main>
    <TitleCard />
    <Skills header="what I'm good at">
      <Icon iconType="javascript" header="JavaScript" />
      <Icon iconType="react" header="React" />
      <Icon iconType="typescript" header="TypeScript" />
      <Icon iconType="html" header="HTML" />
      <Icon iconType="css" header="CSS" />
      <Icon iconType="sass" header="SASS" />
    </Skills>
    <Skills header="what I'm learning">
      <Icon iconType="python" footer="Python" />
      <Icon iconType="graphql" footer="GraphQL" />
      <Icon iconType="styled-components" footer="Styled Components" />
      <span>
        <Header type="h3">¯\_(ツ)_/¯</Header>
        <p>
          centering things in CSS without getting frustrated and 'display: flex'
          -ing
        </p>
      </span>
      <span style={{ display: 'none' }}>
        To be clear, the centering thing is a joke...maybe :)
      </span>
    </Skills>
    <Time />
  </main>
);

export default Page;
