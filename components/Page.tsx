import { styled } from '.';
import TitleCard from './TitleCard';
import Section from './Section';
import WhatIAmGoodAt from './WhatIAmGoodAt';

const StyledPage = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const Page = () => (
  <StyledPage>
    <TitleCard />
    <Section>
      <WhatIAmGoodAt />
    </Section>
  </StyledPage>
);

export default Page;
