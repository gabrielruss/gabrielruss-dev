import styled from 'styled-components';
import { FunctionComponent } from 'react';

const getTypeFontSize = (size: HeaderSizes) => {
  switch (size) {
    case 'large':
      // return `15rem`;
      // between 80px and 150px
      return `calc(
        80px + (150 - 80) *
          ((100vw - 500px) / (1920 - 500))
      );`;
    case 'medium':
      // return `7rem`;
      // between 40px and 70px
      return `calc(
        40px + (70 - 40) *
          ((100vw - 500px) / (1920 - 500))
      );`;
    case 'small':
      // return `3rem`;
      // between 20px and 30px
      return `calc(
        20px + (30 - 20) *
          ((100vw - 500px) / (1920 - 500))
      );`;
  }
};

export const StyledHeader = styled.div<IHeaderProps>`
  font-size: ${props => getTypeFontSize(props.size)};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.overpass_regular};
  font-weight: 700;
`;

type HeaderSizes = 'small' | 'medium' | 'large';

interface IHeaderProps {
  size?: HeaderSizes;
}

/**
 *
 * @param type - defaults to large (80px min / 150px max)
 */
const Header: FunctionComponent<IHeaderProps> = ({
  size = 'large',
  children,
}) => <StyledHeader size={size}>{children}</StyledHeader>;

export default Header;
