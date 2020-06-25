import TitleCard from './sections/TitleCard';

import Icon from './common/Icon';
import Header from './common/Header';
import { ContainerSeperator } from './styles/ContainerSeperator';
import { Time, Skills, ImportantToMe, ContactMe } from './sections';

const Home = () => (
  <main>
    <TitleCard />
    <ContainerSeperator />
    <Time />
    <ContainerSeperator />
    <Skills header="what i'm good at">
      <Icon iconType="javascript" header="JavaScript" />
      <Icon iconType="react" header="React" />
      <Icon iconType="typescript" header="TypeScript" />
      <Icon iconType="html" header="HTML" />
      <Icon iconType="css" header="CSS" />
      <Icon iconType="sass" header="SASS" />
    </Skills>
    <ContainerSeperator />
    <ImportantToMe />
    <ContainerSeperator />
    <Skills header="what i'm learning">
      <Icon iconType="python" footer="Python" />
      <Icon iconType="graphql" footer="GraphQL" />
      <span>
        <p>
          centering things in CSS without getting frustrated and 'display: flex'
          -ing
        </p>
        <Header size="small">¯\_(ツ)_/¯</Header>
      </span>
      <span style={{ display: 'none' }}>
        To be clear, the centering thing is a joke...maybe :)
      </span>
    </Skills>
    <Skills header="this site was made with">
      <Icon iconType="next" header="Next.js" />
      <Icon iconType="react" header="React" />
      <Icon iconType="typescript" header="TypeScript" />
      <Icon iconType="styled-components" header="Styled Components" />
    </Skills>
    <ContactMe />
  </main>
);

export default Home;
