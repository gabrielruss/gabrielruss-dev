import styled from 'styled-components';
import { FunctionComponent } from 'react';

const getTypeFontSize = (type: HeaderTypes) => {
  switch (type) {
    case 'h1':
      return `15rem`;
    default:
      break;
  }
};

const StyledHeader = styled.div<IHeaderProps>`
  font-size: ${props => getTypeFontSize(props.type)};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.overpass_regular};
  font-weight: 700;
`;

type HeaderTypes = 'h1' | 'h2' | 'h3';

interface IHeaderProps {
  type: HeaderTypes;
}

const Header: FunctionComponent<IHeaderProps> = ({ type, children }) => (
  <StyledHeader type={type}>{children}</StyledHeader>
);

export default Header;
