import { styled } from '..';

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 5rem;
  padding: 0 2rem;
  max-width: ${(props) => props.theme.break_large};
  width: 100%;
`;

export default IconGrid;
