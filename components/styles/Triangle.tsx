import { styled } from '..';

export type TriangleColors =
  | 'teal'
  | 'purple'
  | 'flamingo'
  | 'yellow'
  | 'black';

interface ITrangleProps {
  top: number;
  right: number;
  rotation: '' | 'reverse';
  opacity: number;
  height: number;
  width: number;
  color: TriangleColors;
}

/**
 * Random width, height, and opacity
 */
const Triangle = styled.div<ITrangleProps>`
  position: fixed;
  background-color: ${props => props.theme.colors[props.color]};

  top: ${props => props.top}rem;
  right: ${props => props.right}vw;

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  opacity: ${props => props.opacity};

  clip-path: polygon(50% 0, 0 100%, 100% 100%);

  -webkit-animation: spin 150s linear infinite;
  -moz-animation: spin 150s linear infinite;
  animation: spin 150s linear infinite ${props => props.rotation};

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Triangle;
