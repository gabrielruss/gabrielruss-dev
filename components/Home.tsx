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
      <Icon iconName="javascript" header="JavaScript" />
      <Icon iconName="react" header="React" />
      <Icon iconName="typescript" header="TypeScript" />
      <Icon iconName="html" header="HTML" />
      <Icon iconName="css" header="CSS" />
      <Icon iconName="sass" header="SASS" />
    </Skills>
    <ContainerSeperator />
    <ImportantToMe />
    <ContainerSeperator />
    <Skills header="what i'm learning">
      <Icon iconName="python" footer="Python" />
      <Icon iconName="graphql" footer="GraphQL" />
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
      <Icon iconName="next" header="Next.js" />
      <Icon iconName="react" header="React" />
      <Icon iconName="typescript" header="TypeScript" />
      <Icon iconName="styled-components" header="Styled Components" />
    </Skills>
    <ContactMe />
  </main>
);

export default Home;
