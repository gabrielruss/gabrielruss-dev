import { differenceInYears } from 'date-fns';

import { styled } from './styles';
import {
  StyledButton,
  StyledLink,
  FrostedGlass,
  ContainerSeperator,
} from './styles/components';
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
  margin: 10rem auto 0;
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
          <Header size="small">Specialties</Header>
          <Header size="xsmall">Frontend</Header>
          <ResumeSubSection>
            <ul>
              <li>
                {years} years of experience with JavaScript, React, TypeScript
              </li>
              <li>
                Proficient with SASS, styled-components, GraphQL, Redux, and
                react-query
              </li>
            </ul>
          </ResumeSubSection>
          <Header size="xsmall">Backend</Header>
          <ResumeSubSection>
            <ul>
              <li>
                Experience with backend tasks using Node.js, Python, and .NET
                Core, including API development, server-side logic, and database
                integration
              </li>
            </ul>
          </ResumeSubSection>
        </ResumeSection>

        <ResumeSection>
          <Header size="small">Work Experience</Header>
          <ResumeSubSection>
            <b>Calendly</b>
            <p>Senior Software Engineer</p>
            <p>Oct 2023 - Aug 2024</p>
            <br />
            <p>Technologies & Libraries Used:</p>
            <ul>
              <li>React (18+)</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>styled-components</li>
              <li>react-testing-library</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
            <br />
            <p>
              Worked with a team of developers and marketing professionals as a
              Senior Software Engineer on Calendly’s Marketing Website team.
            </p>
            <ul>
              <li>
                Worked to improve the user experience of the marketing site
              </li>
              <li>Ensured code quality by conducting code reviews</li>
              <li>
                Lead the effort to create and maintain the technical backlog
              </li>
              <li>
                Lead weekly team meetings to improve processes and add issues to
                technical backlog
              </li>
              <li>
                Maintained routing and authentication checks using Node.js and
                Express middleware, ensuring secure and efficient user
                navigation and authentication across the backend
              </li>
            </ul>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>Capacity</b>
            <p>Senior Software Engineer</p>
            <p>Febuary 2022 - Aug 2023</p>
            <br />
            <p>Technologies & Libraries Used:</p>
            <ul>
              <li>React (16.8+)</li>
              <li>TypeScript</li>
              <li>react-query</li>
              <li>react-testing-library</li>
              <li>react-router</li>
              <li>Redux</li>
              <li>SASS</li>
              <li>Next.js</li>
              <li>styled-components</li>
              <li>Python</li>
              <li>GraphQL</li>
            </ul>
            <br />
            <p>Worked as a Senior Software Engineer on Capacity’s UI team.</p>
            <ul>
              <li>
                Lead the effort on several large scale features for Capacity’s
                primary application
              </li>
              <li>Ensured code quality by conducting code reviews</li>
              <li>
                Worked with Management to improve and document team processes
              </li>
              <li>
                Worked closely with the backend team to update and maintain the
                Python GraphQL API layer, ensuring the frontend received
                accurate and properly formatted data
              </li>
            </ul>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>LeaseQuery</b>
            <p>Lead UI Engineer</p>
            <p>May 2019 - Febuary 2022</p>
            <br />
            <p>Technologies & Libraries Used:</p>
            <ul>
              <li>React (16.8+)</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Storybook</li>
              <li>styled-components</li>
              <li>react-testing-library</li>
              <li>react-router</li>
              <li>Redux</li>
              <li>.NET Core</li>
            </ul>
            <br />
            <p>
              Led the front-end development effort to create multiple new SaaS
              products for lease accounting.
            </p>
            <ul>
              <li>
                Authored LeaseQuery's first reusable UI component library with
                the goal of creating a consistent look and feel across all
                future projects
              </li>
              <li>
                Ensured reusable components were tested and met WCAG 2.0 AA or
                AAA accessibility standards
              </li>
              <li>
                Became an honorary member of the UX Design team by participating
                in design studios and regular UX discussions
              </li>
              <li>Ensured code quality by conducting code reviews</li>
              <li>
                Collaborated closely with the backend team to maintain the .NET
                Core API layer, assisting with the integration of 3rd-party APIs
                into LeaseQuery's tools
              </li>
            </ul>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>Intellinet</b>
            <p>Senior Developer</p>
            <p>August 2017 - May 2019</p>
            <br />
            <p>Technologies & Libraries Used:</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>react-router</li>
              <li>react-testing-library</li>
              <li>.NET Core</li>
            </ul>
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
              <li>Developed custom Web APIs in .NET Core</li>
            </ul>
          </ResumeSubSection>
          <br />
          <ResumeSubSection>
            <b>Abel Solutions</b>
            <p>Developer</p>
            <p>August 2014 - August 2017</p>
            <br />
            <p>Technologies & Libraries Used:</p>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>C#</li>
            </ul>
            <br />
            <p>
              Within the Microsoft ecosystem, built custom forms using React,
              TypeScript, and Office UI Fabric (UI framework).
            </p>
            <ul>
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
        <ResumeSection>
          <Header size="small">Education</Header>
          <ResumeSubSection>
            <b>Georgia Southern University</b>
            <p>BBA in Information Systems</p>
            <p>December 2011</p>
            <p>Dean’s List: Fall 2010, Spring 2011, Fall 2011</p>
          </ResumeSubSection>
        </ResumeSection>
        <Header size="medium">{`</Resume>`}</Header>
      </ResumeContainer>
    </FrostedGlass>
  </ResumeWrapper>
);

export default Resume;
