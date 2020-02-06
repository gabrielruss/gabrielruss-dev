import { GlobalStyle, styled } from '.';
import Nav from './Nav';

const randomNumberPlease = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const StyledPage = styled.div`
  z-index: 1;
  background: white;
  color: ${props => props.theme.colors.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.break_large};
  margin: 0 auto;
  padding: 2rem;
`;

const TriangleOverlay = styled.div`
  z-index: 1000;
`;

const Triangle = styled.div`
  position: absolute;
  background: url('/space.jpg');

  top: 20rem;
  right: 30rem;

  width: ${randomNumberPlease(105, 85)}px;
  height: ${randomNumberPlease(75, 55)}px;

  opacity: ${randomNumberPlease(0.85, 0.65)};

  clip-path: polygon(50% 0, 0 100%, 100% 100%);

  -webkit-animation: spin 150s linear infinite;
  -moz-animation: spin 150s linear infinite;
  animation: spin 150s linear infinite;

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

// TODO: spawn a triangle somewhere within the TiangleOverlay

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledPage>
      <Nav />
      <TriangleOverlay>
        <Triangle />
        <Inner>{children}</Inner>
      </TriangleOverlay>
    </StyledPage>
  </>
);

export default Page;
