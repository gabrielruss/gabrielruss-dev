import { GlobalStyle } from '.';
import Nav from './Nav';

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    <div>{children}</div>
  </>
);

export default Page;
