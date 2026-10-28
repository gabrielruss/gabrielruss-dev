import { styled } from '..';

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 1.5rem 0;
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.caution};
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
`;

export default StatusBadge;
