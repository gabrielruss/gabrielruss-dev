import { FunctionComponent } from 'react';
import { styled } from '../';

const StyledGrid = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

interface IGridProps {
  columns?: number;
}

const Grid: FunctionComponent<IGridProps> = ({ columns, children }) => (
  <StyledGrid columns={columns}>{children}</StyledGrid>
);

export default Grid;
