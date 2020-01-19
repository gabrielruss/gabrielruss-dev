import styled from 'styled-components';
import { FunctionComponent } from 'react';

const getTypeFontSize = (type: HeaderTypes) => {
  switch (type) {
    case 'h1':
      return `15rem`;
    case 'h2':
      return `7rem`;
    case 'h3':
      return `3rem`;
    case 'h4':
      return `1.5rem`;
  }
};

export const StyledHeader = styled.div<IHeaderProps>`
  font-size: ${props => getTypeFontSize(props.type)};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.overpass_regular};
  font-weight: 700;
`;

type HeaderTypes = 'h1' | 'h2' | 'h3' | 'h4';

interface IHeaderProps {
  type?: HeaderTypes;
}

/**
 *
 * @param type - defaults to h1
 */
const Header: FunctionComponent<IHeaderProps> = ({ type = 'h1', children }) => (
  <StyledHeader type={type}>{children}</StyledHeader>
);

export default Header;
