import { styled } from '.';
import TitleCard from './TitleCard';
import Section from './Section';
import WhatIAmGoodAt from './WhatIAmGoodAt';

const StyledPage = styled.main`
  display: flex;
  flex-flow: column;
  text-align: center;
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
