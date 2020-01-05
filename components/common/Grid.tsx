import { FunctionComponent } from 'react';
import { styled } from '../';

const StyledGrid = styled.div<IGridProps>`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-items: center;
`;

interface IGridProps {
  columns?: number;
}

const Grid: FunctionComponent<IGridProps> = ({ columns, children }) => (
  <StyledGrid columns={columns}>{children}</StyledGrid>
);

export default Grid;
