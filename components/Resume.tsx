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

  ${StyledHeader}:first-of-type {
    margin-bottom: 5rem;
  }
`;

const ResumeSection = styled.div`
  margin-left: 10rem;
`;

const ResumeSubSection = styled.div`
  margin-left: auto;
  margin-right: auto;

  ul {
    text-align: left;
    list-style: disclosure-closed;
  }
`;

const years = differenceInYears(new Date(), new Date(2014, 8));

const Resume = () => (
  <>
    <ResumeContainer>
      <Header type="h2">{`<Resume>`}</Header>
      <ResumeSection>
        <Header type="h3">{`<Specialties>`}</Header>
        <ResumeSubSection>
          <ul>
            <li>{years} years of experience with JavaScript</li>
            <li>{years} years of experience with React</li>
            <li>Proficient in TypeScript, HTML, and CSS</li>
            <li>Familiar with GraphQL, Apollo Client, Angular, C#, Java</li>
          </ul>
        </ResumeSubSection>
      </ResumeSection>
    </ResumeContainer>
  </>
);

export default Resume;
