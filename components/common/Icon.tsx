import { FunctionComponent } from 'react';
import { styled } from '..';

type IconTypes = 'javascript';

interface IIconProps {
  iconType: IconTypes;
}

const StyledIcon = styled.img`
  width: 10rem;
`;

const Icon: FunctionComponent<IIconProps> = ({ iconType }) => (
  <StyledIcon src={`./icons/${iconType}.svg`} />
);

export default Icon;
