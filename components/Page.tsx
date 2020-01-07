import TitleCard from './TitleCard';
import Skills from './Skills';
import Time from './Time';
import Icon from './common/Icon';

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
    <Skills header="what I'm interested in">
      <Icon iconType="python" footer="Python" />
      <Icon iconType="graphql" footer="GraphQL" />
      <Icon iconType="styled-components" footer="Styled Components" />
      <p
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        centering things in CSS without getting frustrated and 'display: flex'
        -ing
      </p>
      <span style={{ display: 'none' }}>
        To be clear, the centering thing is a joke :)
      </span>
    </Skills>
    <Time />
  </main>
);

export default Page;
