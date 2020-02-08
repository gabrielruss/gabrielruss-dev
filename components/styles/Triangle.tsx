import { styled } from '..';
import { randomNumberPlease } from '../utilities/_helpers';

interface ITrangleProps {
  top: number;
  right: number;
  direction: boolean;
}

/**
 * Random width, height, and opacity
 */
// const Triangle = styled.div`
const Triangle = styled.div<ITrangleProps>`
  position: fixed;
  background: url('/space.jpg');

  top: ${props => props.top}rem;
  right: ${props => props.right}vw;

  width: ${randomNumberPlease(105, 85)}px;
  height: ${randomNumberPlease(75, 55)}px;

  opacity: ${randomNumberPlease(0.85, 0.65)};

  clip-path: polygon(50% 0, 0 100%, 100% 100%);

  -webkit-animation: spin 150s linear infinite;
  -moz-animation: spin 150s linear infinite;
  animation: spin 150s linear infinite
    ${props => (props.direction ? 'reverse' : '')};

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
