import { styled } from './';

const StyledSection = styled.div`
  height: 1000px;
`;

const Section = ({ children }) => <StyledSection>{children}</StyledSection>;

export default Section;
