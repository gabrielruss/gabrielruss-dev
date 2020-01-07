import { FunctionComponent } from 'react';
import { styled } from '..';
import Header from './Header';

type IconTypes =
  | 'javascript'
  | 'react'
  | 'typescript'
  | 'css'
  | 'html'
  | 'sass'
  | 'python'
  | 'graphql'
  | 'styled-components';

interface IIconProps {
  iconType: IconTypes;
  header?: string;
  footer?: string;
}

const StyledIcon = styled.img`
  width: 10rem;
`;

const Icon: FunctionComponent<IIconProps> = ({ iconType, header, footer }) => (
  <div>
    <Header type="h3">{header}</Header>
    <StyledIcon src={`./icons/${iconType}.png`} />
    <Header type="h3">{footer}</Header>
  </div>
);

export default Icon;
