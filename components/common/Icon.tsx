import { FunctionComponent } from 'react';
import { styled } from '..';
import Header from './Header';

type IconTypes =
  | 'javascript'
  | 'react'
  | 'typescript'
  | 'css'
  | 'html'
  | 'sass';

interface IIconProps {
  iconType: IconTypes;
  title?: string;
}

const StyledIcon = styled.img`
  width: 10rem;
`;

const Icon: FunctionComponent<IIconProps> = ({ iconType, title }) => (
  <div>
    <Header type="h3">{title}</Header>
    <StyledIcon src={`./icons/${iconType}.png`} />
  </div>
);

export default Icon;
