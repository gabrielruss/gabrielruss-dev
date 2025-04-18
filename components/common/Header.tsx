import styled from 'styled-components';

import { theme } from '../styles';

const getTypeFontSize = (size: HeaderSizes) => {
  switch (size) {
    case 'large':
      // between 80px and 150px
      return `calc(
        80px + (150 - 80) *
          ((100vw - 360px) / (1920 - 360))
      );`;
    case 'medium':
      // between 40px and 70px
      return `calc(
        40px + (70 - 40) *
          ((100vw - 360px) / (1920 - 360))
      );`;
    case 'small':
      // between 20px and 30px
      return `calc(
        20px + (30 - 20) *
          ((100vw - 360px) / (1920 - 360))
      );`;
    case 'xsmall':
      // between 10px and 20px
      return `calc(
          15px + (20 - 15) *
            ((100vw - 360px) / (1920 - 360))
        );`;
  }
};

export const StyledHeader = styled.div<IHeaderProps>`
  font-size: ${(props) => getTypeFontSize(props.size)};
  color: ${(props) => props.color};
  font-family: ${(props) => props.theme.fonts.overpass_regular};
  font-weight: 700;
`;

type HeaderSizes = 'xsmall' | 'small' | 'medium' | 'large';

interface IHeaderProps {
  size?: HeaderSizes;
  color?: keyof typeof theme.colors;
}

/**
 *
 * @param type - defaults to large (80px min / 150px max)
 */
function Header({
  size = 'large',
  color = 'black',
  children,
}: React.PropsWithChildren<IHeaderProps>) {
  return (
    <StyledHeader size={size} color={color}>
      {children}
    </StyledHeader>
  );
}

export default Header;
