import { styled } from '..';
import Header from './Header';

type IconNames =
  | 'javascript'
  | 'react'
  | 'typescript'
  | 'css'
  | 'html'
  | 'sass'
  | 'python'
  | 'graphql'
  | 'styled-components'
  | 'next'
  | 'arrow-right'
  | 'linkedin'
  | 'email'
  | 'github'
  | 'professional';

interface IIconProps {
  iconName: IconNames;
  iconType?: 'png' | 'svg';
  header?: string;
  footer?: string;
}

export const StyledIcon = styled.img`
  max-width: 8rem;
  max-height: 8rem;
  margin: 1rem 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

function Icon({ iconName, header, footer, iconType = 'png' }: IIconProps) {
  return (
    <IconWrapper>
      <Header size="small">{header}</Header>
      <StyledIcon src={`./icons/${iconName}.${iconType}`} />
      <Header size="small">{footer}</Header>
    </IconWrapper>
  );
}

export default Icon;
