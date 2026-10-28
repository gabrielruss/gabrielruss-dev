import { styled } from './styles';
import { StyledLink, FrostedGlass, StatusBadge } from './styles/components';
import {
  Header,
  Icon,
  IconWrapper,
  LinkCard,
  StyledHeader,
  StyledIcon,
} from './common';

const DLAMS_REPO_URL = 'https://github.com/gabrielruss/dlams';
const DLAMS_APP_URL = 'https://dontlookatmystuff.com';

const DlamsWrapper = styled.div`
  max-width: ${(props) => props.theme.break_medium};
  margin: 2rem auto 0;
  text-align: left;
`;

const Section = styled.section`
  margin-top: 4rem;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme.colors.trans_black};
  background-color: rgba(45, 45, 45, 0.08);

  > ${StyledHeader} {
    margin-bottom: 2rem;
  }

  p {
    margin: 1rem 0;
  }
`;

const Closing = styled.div`
  margin-top: 5rem;
`;

const SourceLink = styled.p`
  margin: 0 0 3rem;
  text-align: center;
`;

const Badge = styled(StatusBadge)`
  margin: 1rem 0;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;

  > section {
    margin-top: 0;
  }

  @media (max-width: ${(props) => props.theme.break_medium}) {
    grid-template-columns: 1fr;
  }
`;

const Flow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: stretch;
  gap: 1rem;
  margin: 2rem 0 1rem;

  @media (max-width: ${(props) => props.theme.break_medium}) {
    grid-template-columns: 1fr;
  }
`;

const FlowStep = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.trans_white};

  img {
    width: 5rem;
    height: 5rem;
    margin-bottom: 1rem;
  }

  small {
    font-size: 1.6rem;
    margin-top: 0.5rem;
  }
`;

const FlowArrow = styled.div`
  align-self: center;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.aa_teal};

  @media (max-width: ${(props) => props.theme.break_medium}) {
    text-align: center;
    transform: rotate(90deg);
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 3rem;
  margin: 2rem 0;
  text-align: center;

  ${IconWrapper} {
    justify-content: flex-start;
  }

  ${StyledIcon} {
    width: 8rem;
    height: 8rem;
    object-fit: contain;
  }

  ${StyledHeader} {
    font-size: 1.8rem;
  }
`;

const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;

  li {
    padding: 0.25rem 1.5rem 0;
    border: 2px solid ${(props) => props.theme.colors.aa_teal};
    border-radius: 2rem;
  }
`;

const Step = ({
  icon,
  title,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  note: string;
}) => (
  <FlowStep>
    {icon}
    <b>{title}</b>
    <small>{note}</small>
  </FlowStep>
);

const icon = (name: string) => <img src={`/icons/${name}.svg`} alt="" />;

const Dlams = () => (
  <FrostedGlass>
    <DlamsWrapper>
      <Header size="medium">{`<DLAMS>`}</Header>
      <Header size="small">Don't Look At My Stuff</Header>
      <p>A silly website for adding and sharing your collections</p>
      <Badge>in active development</Badge>
      <LinkCard
        href={DLAMS_APP_URL}
        image="/static/dlams-preview.png"
        imageWidth={1600}
        imageHeight={787}
        title="Don't Look At My Stuff"
        displayUrl="dontlookatmystuff.com"
        description="Try the read-only live demo."
      />

      <Columns>
        <Section>
          <Header size="small">What is</Header>
          <ul>
            <li>
              A tracker for your video game collection: consoles and games, with
              condition and play status
            </li>
            <li>Multiple collections per account</li>
            <li>A read-only demo</li>
            <li>Mobile friendly</li>
          </ul>
        </Section>
        <Section>
          <Header size="small">What will be</Header>
          <ul>
            <li>Sharing a collection with other people</li>
            <li>Editing in the demo, kept in your own browser</li>
            <li>More types of collections beyond video games</li>
          </ul>
        </Section>
      </Columns>

      <Section>
        <Header size="small">Infrastructure</Header>
        <p>
          Pushing to <code>main</code> on GitHub starts a GitHub Actions
          workflow. The job runs on a self-hosted runner on a Raspberry Pi,
          which pulls the code and rebuilds the containers in place with Docker
          Compose. A separate workflow runs lint, tests, and a build on every
          push, and a nightly database backup runs on the Pi.
        </p>
        <Flow>
          <Step
            icon={icon('github')}
            title="push to GitHub"
            note="main branch"
          />
          <FlowArrow>→</FlowArrow>
          <Step
            icon={icon('github-actions')}
            title="GitHub Actions"
            note="self-hosted runner on the Pi"
          />
          <FlowArrow>→</FlowArrow>
          <Step
            icon={icon('docker')}
            title="Docker Compose"
            note="built and served on the Pi"
          />
        </Flow>
        <Flow>
          <Step icon={icon('nginx')} title="Nginx" note="routes traffic" />
          <FlowArrow>→</FlowArrow>
          <Step
            icon={icon('fastapi')}
            title="FastAPI"
            note="handles all data and permissions"
          />
          <FlowArrow>→</FlowArrow>
          <Step
            icon={icon('postgresql')}
            title="PostgreSQL"
            note="stores everything"
          />
        </Flow>
        <TechGrid>
          <Icon iconName="raspberry-pi" iconType="svg" footer="Raspberry Pi" />
          <Icon iconName="docker" iconType="svg" footer="Docker" />
          <Icon
            iconName="github-actions"
            iconType="svg"
            footer="GitHub Actions"
          />
          <Icon iconName="nginx" iconType="svg" footer="Nginx" />
        </TechGrid>
      </Section>

      <Section>
        <Header size="small">Frontend</Header>
        <TechGrid>
          <Icon iconName="react" footer="React" />
          <Icon iconName="typescript" footer="TypeScript" />
          <Icon iconName="vite" iconType="svg" footer="Vite" />
          <Icon iconName="tailwindcss" iconType="svg" footer="Tailwind CSS" />
          <Icon
            iconName="tanstack-query"
            iconType="svg"
            footer="TanStack Query"
          />
        </TechGrid>
        <Chips>
          <li>React Router</li>
          <li>shadcn/ui</li>
          <li>React Hook Form</li>
          <li>Zod</li>
          <li>Vitest</li>
          <li>Testing Library</li>
        </Chips>
      </Section>

      <Section>
        <Header size="small">Backend</Header>
        <TechGrid>
          <Icon iconName="python" footer="Python" />
          <Icon iconName="fastapi" iconType="svg" footer="FastAPI" />
          <Icon iconName="postgresql" iconType="svg" footer="PostgreSQL" />
          <Icon iconName="sqlalchemy" iconType="svg" footer="SQLAlchemy" />
        </TechGrid>
        <Chips>
          <li>Alembic</li>
          <li>Pydantic</li>
          <li>JWT cookie auth</li>
          <li>unittest</li>
        </Chips>
      </Section>

      <Closing>
        <SourceLink>
          <StyledLink
            href={DLAMS_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View the source on GitHub
          </StyledLink>
        </SourceLink>
        <Header size="medium">{`</DLAMS>`}</Header>
      </Closing>
    </DlamsWrapper>
  </FrostedGlass>
);

export default Dlams;
