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
  width: 8rem;
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
    <Header size="small">{header}</Header>
    <StyledIcon src={`./icons/${iconType}.png`} />
    <Header size="small">{footer}</Header>
  </IconWrapper>
);

export default Icon;
