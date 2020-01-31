import { styled } from '..';

const Triangle = styled.div`
  position: absolute;
  top: 10rem;
  left: 10rem;
  transform: rotate(calc(100deg - 10vw));
  width: 15rem;
  height: 13rem;
  background: url(https://goo.gl/BeSyyD);

  /* The points are: centered top, left bottom, right bottom */
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
`;

export default Triangle;
