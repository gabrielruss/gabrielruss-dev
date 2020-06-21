import TitleCard from './sections/TitleCard';
import Skills from './sections/Skills';
import Time from './sections/Time';
import Icon from './common/Icon';
import Header from './common/Header';
import ImportantToMe from './sections/ImportantToMe';
import { ContainerSeperator } from './styles/ContainerSeperator';

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
  </main>
);

export default Home;
