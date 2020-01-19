import { styled } from '.';
import Header, { StyledHeader } from './common/Header';
import { differenceInYears } from 'date-fns';

const ResumeContainer = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  margin-top: 10rem;
  height: 100vh;
  margin-left: 20rem;

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
  margin-left: auto;
  margin-right: auto;

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
  <>
    <ResumeContainer>
      <Header type="h2">{`<Resume>`}</Header>
      <ResumeSection>
        <Header type="h3">Specialties</Header>
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
        <Header type="h3">Education</Header>
        <ResumeSubSection>
          <b>Georgia Southern University</b>
          <p>BBA in Information Systems</p>
          <p>December 2011</p>
          <p>Dean’s List: Fall 2010, Spring 2011, Fall 2011</p>
        </ResumeSubSection>
      </ResumeSection>
      <ResumeSection>
        <Header type="h3">Work Experience</Header>
        <ResumeSubSection>
          <b>Intellinet Consulting</b>
          <p>Senior Developer</p>
          <p>August 2017 - May 2018</p>
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
      </ResumeSection>
      <Header type="h2">{`</Resume>`}</Header>
    </ResumeContainer>
  </>
);

export default Resume;
