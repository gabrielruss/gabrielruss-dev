import { styled } from '.';
import Header, { StyledHeader } from './common/Header';
import { differenceInYears } from 'date-fns';
import StyledButton from './styles/StyledButton';
import FrostedGlass from './common/FrostedGlass';
import { RESUME_VIEW_LINK } from './utilities/_constants';

const ResumeWrapper = styled.span`
  ${StyledButton} {
    position: absolute;
    left: 5rem;

    @media (max-width: ${props => props.theme.break_large}) {
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
  margin: 10rem auto 0;
  max-width: ${props => props.theme.break_medium};

  > :first-child {
    margin-bottom: 5rem;
  }

  > :last-child {
    margin-top: 5rem;
  }
`;

const ResumeSection = styled.div`
  margin-left: 10rem;
  padding: 2rem 0;

  > ${StyledHeader} {
    margin-bottom: 2rem;
  }

  @media (max-width: ${props => props.theme.break_medium}) {
    margin-left: 5rem;
  }

  @media (max-width: ${props => props.theme.break_small}) {
    margin: auto;
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
`;

const years = differenceInYears(new Date(), new Date(2014, 8));

const Resume = () => (
  <ResumeWrapper>
    <StyledButton onClick={() => window.open(RESUME_VIEW_LINK, '_blank')}>
      Google Drive Link
    </StyledButton>
    <FrostedGlass>
      <ResumeContainer>
        <Header size="medium">{`<Resume>`}</Header>
        <ResumeSection>
          <Header size="small">Specialties</Header>
          <ResumeSubSection>
            <ul>
              <li>{years} years of experience with JavaScript</li>
              <li>{years} years of experience with React</li>
              <li>Proficient in TypeScript, HTML, CSS, and SASS</li>
              <li>
                Played around with GraphQL, Apollo Client, Angular, C#, Java,
                and Python
              </li>
            </ul>
          </ResumeSubSection>
        </ResumeSection>
        <ResumeSection>
          <Header size="small">Education</Header>
          <ResumeSubSection>
            <b>Georgia Southern University</b>
            <p>BBA in Information Systems</p>
            <p>December 2011</p>
            <p>Dean’s List: Fall 2010, Spring 2011, Fall 2011</p>
          </ResumeSubSection>
        </ResumeSection>
        <ResumeSection>
          <Header size="small">Work Experience</Header>
          <ResumeSubSection>
            <b>LeaseQuery</b>
            <p>UI Engineer</p>
            <p>May 2019 - Present</p>
            <br />
            <p>
              Led the front-end development effort to create a new SAAS product
              for lease accounting using React (16.8), TypeScript, Redux,
              react-router, react-testing-library, and Formik. Worked on
              integrating 3rd party products, such as QuickBooks Online.
            </p>
            <ul>
              <li>
                Worked closely with Back-End Developer, Product Owner, UX
                Designer, QA Engineer, and Junior Developers
              </li>
              <li>Ensured code quality by conducting code reviews</li>
              <li>
                Set up and maintained branching and pull request strategies as
                well as backlog organization
              </li>
              <li>
                Coordinated with Dev-Ops to set up CI for running, testing, and
                deploying each branch of the code
              </li>
            </ul>
          </ResumeSubSection>
          <ResumeSubSection>
            <b>Intellinet Consulting</b>
            <p>Senior Developer</p>
            <p>August 2017 - May 2019</p>
            <br />
            <p>
              Specialized in front-end development. Worked closely with clients
              to understand requirements and develop solutions that leveraged a
              wide range of front-end development tools. Focused on writing
              clean and reusable code to maximize efficiency and readability.
            </p>
            <ul>
              <li>
                Led the front-end development team on an agile, large-scale EMR
                solution using React, Redux, react-router, and
                react-testing-library
              </li>
              <li>
                Worked with the UX team to translate wireframes and business
                requirements into working solutions
              </li>
              <li>
                Worked with the Back-End team to ensure custom APIs met
                acceptance criteria
              </li>
              <li>Developed custom Web APIs in .NET Core (C#)</li>
              <li>
                Developed a SignalR websocket to provide real time updates to
                the UI
              </li>
            </ul>
          </ResumeSubSection>
          <ResumeSubSection>
            <b>Abel Solutions</b>
            <p>Developer</p>
            <p>August 2014 - August 2017</p>
            {/* <br /> */}
            <ul>
              <li>
                Within Microsoft ecosystem, built custom forms using React,
                TypeScript, and Office UI Fabric (UI framework)
              </li>
              <li>Developed and maintained custom solutions in C#</li>
              <li>Built a development infrastructure within Azure</li>
            </ul>
          </ResumeSubSection>
        </ResumeSection>
        <ResumeSection>
          <Header size="small">Before I Became a Full Time Developer</Header>
          <ResumeSubSection>
            <b>McKesson Corporation</b>
            <p>SharePoint Engineer</p>
            <p>November 2012 - June 2014</p>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>The Coca-Cola Company</b>
            <p>Customer Data Analyst</p>
            <p>January 2012 - November 2012</p>
            <br />
            <p>Customer Data Analyst Intern</p>
            <p>May 2011 - August 2011</p>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>Georgia Southern University</b>
            <p>SharePoint Engineer Intern</p>
            <p>February 2011 - December 2011</p>
          </ResumeSubSection>
        </ResumeSection>
        <Header size="medium">{`</Resume>`}</Header>
      </ResumeContainer>
    </FrostedGlass>
  </ResumeWrapper>
);

export default Resume;
