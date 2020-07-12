import { styled } from '..';

const FrostedGlass = styled.div`
  position: relative;
  z-index: 1;

  :before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.9);
    filter: blur(5px);
  }
`;

export default FrostedGlass;
