import { styled } from '.';
import Header, { StyledHeader } from './common/Header';
import { differenceInYears } from 'date-fns';
// import { RESUME_VIEW_LINK } from './utilities/_constants';
import StyledLink from './styles/StyledLink';
import StyledButton from './styles/StyledButton';

const ResumeWrapper = styled.span`
  /* ${StyledLink} {
    position: absolute;
    right: 5rem;
  } */

  ${StyledButton} {
    position: absolute;
    /* right: 5rem; */
    left: 5rem;
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
    {/* <StyledLink href={RESUME_VIEW_LINK} target="_blank">
      Google Drive Download
    </StyledLink> */}
    <StyledButton>Google Drive Link</StyledButton>
    <ResumeContainer>
      <Header size="medium">{`<Resume>`}</Header>
      <ResumeSection>
        <Header size="small">Specialties</Header>
        <ResumeSubSection>
          <ul>
            <li>{years} years of experience with JavaScript</li>
            <li>{years} years of experience with React</li>
            <li>Proficient in TypeScript, HTML, and CSS</li>
            <li>Familiar with GraphQL, Apollo Client, Angular, C#, Java</li>
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
            Led the Front-End Development effort to create a new SAAS product
            for lease accounting using React (16.8), TypeScript, Redux,
            react-router, react-testing-library, and formik.
          </p>
          <ul>
            <li>
              Worked closely with back-end developer, product owner, UX
              designer, QA engineer, and junior developers.
            </li>
            <li>Ensured code quality by conducting code reviews.</li>
            <li>
              Set up and maintained branching strategies and pull request/jira
              ticket organization.
            </li>
            <li>
              Coordinated with dev-ops to set up CI for running, testing, and
              deploying each branch of the code.
            </li>
          </ul>
        </ResumeSubSection>
        <ResumeSubSection>
          <b>Intellinet Consulting</b>
          <p>Senior Developer</p>
          <p>August 2017 - May 2019</p>
          <br />
          <p>
            Specialized in front-end development. Worked closely with clients to
            understand requirements and develop solutions that leveraged a wide
            range of front-end development tools. Focused on writing clean and
            reusable code to maximize efficiency and readability.
          </p>
          <ul>
            <li>
              Led the Front-End Development team on an agile, large-scale EMR
              solution using React, Redux, react-router, and
              react-testing-library
            </li>
            <li>
              Worked with the UX team to translate wireframes and business
              requirements into working solutions
            </li>
            <li>
              Worked with the Back-End team to ensure custom APIs meet
              acceptance criteria
            </li>
            <li>Developed custom Web APIs in .NET Core (C#)</li>
            <li>
              Developed and consumed a SignalR websocket to provide real time
              updates to the UI
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
            <li>
              Developed and maintained custom solutions in C# to meet required
              business logic
            </li>
            <li>Built out a development infrastructure within Azure</li>
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
  </ResumeWrapper>
);

export default Resume;
