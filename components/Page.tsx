import { styled } from '.';
import TitleCard from './TitleCard';

const StyledPage = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  @media (max-width: ${props => props.theme.breakpoint}) {
  }
`;

const Page = () => (
  <StyledPage>
    <TitleCard />
  </StyledPage>
);

export default Page;
