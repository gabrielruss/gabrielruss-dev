import { FunctionComponent } from 'react';
import { styled } from '../';

const StyledGrid = styled.div<IGridProps>`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-items: center;
`;

interface IGridProps {
  // TODO: trying to add in a number to replace 10 rem up there
  breakpoint?: number;
}

const Grid: FunctionComponent<IGridProps> = ({ breakpoint, children }) => (
  <StyledGrid breakpoint={breakpoint}>{children}</StyledGrid>
);

export default Grid;
