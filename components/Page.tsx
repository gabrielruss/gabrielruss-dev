import TitleCard from './sections/TitleCard';
import Skills from './sections/Skills';
import Time from './sections/Time';
import Icon from './common/Icon';
import Header from './common/Header';
import ImportantToMe from './sections/ImportantToMe';
import { ContainerSeperator } from './styles/ContainerSeperator';

const Page = () => (
  <main>
    <TitleCard />
    <ContainerSeperator />
    <Skills header="what I'm good at">
      <Icon iconType="javascript" header="JavaScript" />
      <Icon iconType="react" header="React" />
      <Icon iconType="typescript" header="TypeScript" />
      <Icon iconType="html" header="HTML" />
      <Icon iconType="css" header="CSS" />
      <Icon iconType="sass" header="SASS" />
    </Skills>
    <ContainerSeperator />
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
    <ContainerSeperator />
    <Time />
    <ContainerSeperator />
    <ImportantToMe />
  </main>
);

export default Page;
