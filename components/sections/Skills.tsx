import Header, { StyledHeader } from '../common/Header';
import StyledContainer from '../styles/StyledContainer';
import { styled } from '..';

const StyledSkills = styled.div`
  /* frosted glass for chrome */
  /* background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px); */

  > ${StyledHeader} {
    margin-bottom: 3rem;
  }

  /* TODO: make this possibly reusable with the FrostedGlass component in common */
  /* frosted glass for firefox */
  position: relative;
  z-index: 1;

  :before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: inset 0 2000px 2000px rgba(255, 255, 255, 0.9);
    filter: blur(5px);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 5rem;
  max-width: ${props => props.theme.break_large};
  width: calc(100vw - 33px);
  padding: 0 2rem;
`;

interface ISkillsProps {
  header: string | JSX.Element;
}

function Skills({ header, children }: React.PropsWithChildren<ISkillsProps>) {
  return (
    <StyledContainer>
      <StyledSkills>
        <Header size="medium">{header}</Header>
        <SkillsGrid>{children}</SkillsGrid>
      </StyledSkills>
    </StyledContainer>
  );
}

export default Skills;
