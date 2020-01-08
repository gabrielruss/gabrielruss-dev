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
  margin: 1rem 0;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

const Icon: FunctionComponent<IIconProps> = ({ iconType, header, footer }) => (
  <IconWrapper>
    <Header type="h3">{header}</Header>
    <StyledIcon src={`./icons/${iconType}.png`} />
    <Header type="h3">{footer}</Header>
  </IconWrapper>
);

export default Icon;
