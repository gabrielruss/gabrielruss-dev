import { styled } from '.';
import TitleCard from './TitleCard';
import Skills from './Skills';

const StyledPage = styled.main`
  /* display: flex;
  flex-flow: column;
  text-align: center; */
`;

const Page = () => (
  <StyledPage>
    <TitleCard />
    <Skills />
  </StyledPage>
);

export default Page;
