import { differenceInYears } from 'date-fns';

import { styled } from './styles';
import { StyledButton, StyledLink, FrostedGlass } from './styles/components';
import { StyledHeader, Header } from './common';
import { RESUME_DL_LINK } from './util/_constants';

const ResumeWrapper = styled.span`
  ${StyledButton} {
    position: absolute;
    left: 5rem;

    @media (max-width: ${(props) => props.theme.break_large}) {
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  margin: 5rem auto 0;
  max-width: ${(props) => props.theme.break_medium};

  > :first-child {
    margin-bottom: 3rem;
  }

  ${StyledLink} {
    margin-bottom: 2rem;
    margin-left: 10rem;
  }

  > :last-child {
    margin-top: 5rem;
  }
`;

const ResumeSubSection = styled.div`
  margin: 0 auto;

  ul {
    text-align: left;
    list-style: disclosure-closed;
  }

  p {
    margin: 0.5rem 0;
  }

  ${StyledLink} {
    margin: 0;
  }
`;

const ResumeSection = styled.div`
  margin-left: 10rem;
  padding: 2rem 0;

  > ${StyledHeader} {
    margin-bottom: 2rem;
  }

  @media (max-width: ${(props) => props.theme.break_medium}) {
    margin-left: 5rem;
  }

  @media (max-width: ${(props) => props.theme.break_small}) {
    margin: 0;
  }
`;

const years = differenceInYears(new Date(), new Date(2014, 6));

const Resume = () => (
  <ResumeWrapper>
    <FrostedGlass>
      <ResumeContainer>
        <Header size="medium">{`<Resume>`}</Header>
        <StyledLink href={RESUME_DL_LINK} target="_blank">
          Download a copy
        </StyledLink>
        <ResumeSection>
          <Header size="small">Summary</Header>
          <ResumeSubSection>
            <p>
              Senior Software Engineer (frontend focused, full stack) with{' '}
              {years} years of experience building frontend architecture with
              React and TypeScript, and working on the backend with Node.js and
              Python.
            </p>
            <br />
            <p>
              Built scalable and accessible applications for SaaS companies in
              education, help desk, finance, and healthcare. Led teams,
              architected projects, and mentored developers for over 7 years.
            </p>
            <br />
            <p>
              Experienced using agentic AI workflows to deliver features and fix
              bugs.
            </p>
          </ResumeSubSection>
        </ResumeSection>

        <ResumeSection>
          <Header size="small">Skills</Header>
          <ResumeSubSection>
            <ul>
              <li>
                <b>Frontend:</b> React, React Native, TypeScript, JavaScript,
                Next.js, HTML, CSS, SASS, Tailwind CSS, shadcn/ui, Vite,
                Material UI, state management (Redux, TanStack Query, Zustand),
                React Hook Form, Zod
              </li>
              <li>
                <b>Architecture and UI systems:</b> frontend architecture,
                design systems, component libraries, accessibility (WCAG),
                responsive design, web performance
              </li>
              <li>
                <b>Backend and data:</b> Node.js, Express, Python, FastAPI, REST
                APIs, GraphQL, WebSockets, PostgreSQL
              </li>
              <li>
                <b>Testing and delivery:</b> Jest, Vitest, React Testing
                Library, Playwright, Storybook, CI/CD, GitHub Actions, Docker,
                Git
              </li>
              <li>
                <b>Cloud and monitoring:</b> AWS (S3, CloudFront, Lambda),
                Datadog, Sentry
              </li>
              <li>
                <b>AI assisted development:</b> Claude Code, GitHub Copilot,
                agentic workflows (Emdash, git worktrees)
              </li>
              <li>
                <b>Practices:</b> mentoring, code review, A/B testing, Agile and
                Scrum
              </li>
            </ul>
          </ResumeSubSection>
        </ResumeSection>

        <ResumeSection>
          <Header size="small">Work Experience</Header>
          <ResumeSubSection>
            <b>Imagine Learning</b>
            <p>Senior Software Engineer</p>
            <p>Mar 2025 - Oct 2026</p>
            <br />
            <p>
              Worked on a team of frontend, backend, and UX engineers to build
              Imagine Learning’s digital curriculum platforms for Traverse and
              Dragonfly.
            </p>
            <ul>
              <li>
                Helped migrate every file from plain JavaScript to TypeScript,
                and did pull requests and code reviews to speed along the
                process.
              </li>
              <li>
                Reduced TypeScript errors by around 1,000, completely removed
                the old PropTypes patterns, and placed CI checks to prevent
                further TypeScript errors from being merged in.
              </li>
              <li>
                Built the Bring Students Here feature for Traverse, which
                navigated all signed in students assigned to a lesson to the
                page the teacher was on, using a React UI and a Node.js backend
                with a websocket for real time navigation.
              </li>
              <li>
                Established agentic coding style sheets and custom instructions
                to guide AI agents through the TypeScript conversions.
              </li>
              <li>
                Used an AI workflow of Emdash, git worktrees, and Claude Code to
                deliver large and small features and bug fixes. Caught niche
                scenarios and wrote tests, including Playwright end to end
                tests, so the final product was more complete.
              </li>
            </ul>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>Calendly</b>
            <p>Senior Software Engineer</p>
            <p>Oct 2023 - Aug 2024</p>
            <br />
            <p>
              Led the development effort on Calendly’s Marketing Website team,
              working with marketing professionals.
            </p>
            <ul>
              <li>
                Responsible for the front page of calendly.com, which served
                millions of users per day and had analytics and A/B testing
                tools installed.
              </li>
              <li>
                Refactored the pricing page from a temporary solution into
                scalable, reusable components that were used in other areas of
                the site.
              </li>
              <li>
                Identified the need for a technical backlog, created the
                process, and led biweekly grooming sessions.
              </li>
              <li>
                Maintained routing and authentication checks using Node.js and
                Express middleware.
              </li>
            </ul>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>Capacity</b>
            <p>Senior Software Engineer</p>
            <p>Feb 2022 - Aug 2023</p>
            <br />
            <p>
              Worked as a Senior Software Engineer on the UI team for
              Capacity’s AI help desk software.
            </p>
            <ul>
              <li>
                Led the effort for creating the AI chatbot in Capacity’s mobile
                app with React Native, alongside a manager and a junior
                developer.
              </li>
              <li>
                Worked closely with the backend team to update and maintain the
                Python GraphQL API layer so the frontend received accurate and
                properly formatted data.
              </li>
              <li>
                Worked with management to improve and document team processes.
              </li>
              <li>
                Acted as a first point of contact for a junior developer in an
                informal mentorship.
              </li>
            </ul>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>FinQuery (formerly LeaseQuery)</b>
            <p>Senior Software Engineer (Lead UI Engineer)</p>
            <p>May 2019 - Feb 2022</p>
            <br />
            <p>
              Led the frontend development effort to create multiple new SaaS
              products for lease accounting.
            </p>
            <ul>
              <li>
                Architected LeaseGuru, a self serve lease accounting
                application, and led it from a small team of a few people to
                several full stack teams all using the base code across several
                new products.
              </li>
              <li>
                Architected and authored LeaseQuery’s first reusable UI
                component library for a consistent look and feel across all
                future projects. Components were previewed in Storybook and
                tested to meet WCAG 2.0 AA or AAA accessibility standards.
              </li>
              <li>
                Architected the Reporting tool redesign using the reusable
                component library, and rebuilt the old .NET application as a
                modern UI with React, TypeScript, Next.js, and
                styled-components.
              </li>
              <li>
                Acted as the bridge between engineering, product, and design,
                and handled defining and documenting the team processes and
                coding conventions.
              </li>
              <li>
                Built an onboarding wizard that guided users through complex
                accounting in a simple and intuitive way, and it received
                positive feedback from users.
              </li>
              <li>
                Scaled the lease home page for hundreds of customers by adding
                pagination and separate API calls for the initial data load,
                which greatly decreased initial load time.
              </li>
              <li>
                Led standups and technical backlog meetings, and mentored a
                junior developer in a formal mentorship.
              </li>
              <li>
                Collaborated closely with the backend team to maintain the .NET
                Core API layer and integrate 3rd party APIs.
              </li>
            </ul>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>Intellinet</b>
            <p>Senior Developer</p>
            <p>Aug 2017 - May 2019</p>
            <br />
            <ul>
              <li>
                Architected and led the frontend development team on an agile,
                large scale, HIPAA regulated electronic medical record (EMR)
                solution using React, Redux, and React Testing Library.
              </li>
              <li>
                Worked with the UX and backend teams to translate wireframes and
                business requirements into working solutions, and developed
                custom Web APIs in .NET Core.
              </li>
            </ul>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>Abel Solutions</b>
            <p>Developer</p>
            <p>Aug 2014 - Aug 2017</p>
            <br />
            <ul>
              <li>
                Built custom forms within the Microsoft ecosystem using React,
                TypeScript, and Office UI Fabric, and developed custom solutions
                in C# with a development infrastructure in Azure.
              </li>
            </ul>
          </ResumeSubSection>
        </ResumeSection>

        <ResumeSection>
          <Header size="small">Projects</Header>
          <ResumeSubSection>
            <b>Don’t Look At My Stuff (DLAMS)</b>
            <p>Personal Project</p>
            <p>Oct 2026 - present</p>
            <p>
              <StyledLink href="https://dontlookatmystuff.com" target="_blank">
                dontlookatmystuff.com
              </StyledLink>
              {' | '}
              <StyledLink
                href="https://github.com/gabrielruss/dlams"
                target="_blank"
              >
                github.com/gabrielruss/dlams
              </StyledLink>
            </p>
            <br />
            <ul>
              <li>
                A collection tracker where users can track and share their
                collections, with multiple collections per account, read only
                share links, search across collections, invite only accounts,
                and a temporary sandbox demo.
              </li>
              <li>
                Built with React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui,
                TanStack Query, React Hook Form, and Zod on the frontend, and
                FastAPI, SQLAlchemy, Alembic, and PostgreSQL on the backend.
              </li>
              <li>
                Designed the API as the security boundary. It uses JWT cookie
                auth and server side authorization for owner and read only
                access.
              </li>
              <li>
                Self hosted on a Raspberry Pi with Docker Compose and Nginx.
                Pushes to main deploy through GitHub Actions on a self hosted
                runner, and CI runs lint, tests (Vitest, Testing Library, axe),
                and a build on every push.
              </li>
            </ul>
          </ResumeSubSection>
        </ResumeSection>
        <ResumeSection>
          <Header size="small">Before I Became a Full-Time Developer</Header>
          <ResumeSubSection>
            <b>McKesson Corporation</b>
            <p>SharePoint Engineer</p>
            <p>Nov 2012 - Jun 2014</p>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>The Coca-Cola Company</b>
            <p>Customer Data Analyst</p>
            <p>Jan 2012 - Nov 2012</p>
            <br />
            <p>Customer Data Analyst Intern</p>
            <p>May 2011 - Aug 2011</p>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>Georgia Southern University</b>
            <p>SharePoint Engineer Intern</p>
            <p>Feb 2011 - Dec 2011</p>
          </ResumeSubSection>
        </ResumeSection>
        <ResumeSection>
          <Header size="small">Education</Header>
          <ResumeSubSection>
            <b>Georgia Southern University</b>
            <p>BBA in Information Systems</p>
            <p>Dec 2011</p>
          </ResumeSubSection>
        </ResumeSection>
        <Header size="medium">{`</Resume>`}</Header>
      </ResumeContainer>
    </FrostedGlass>
  </ResumeWrapper>
);

export default Resume;
