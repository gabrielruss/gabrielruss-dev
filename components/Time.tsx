import Header from './common/Header';
import Container from './common/Container';
import TimeSince from './common/TimeSince';

const Time = () => (
  <Container>
    <Header type="h2">I have been a developer for give or take...</Header>
    <TimeSince startDate={new Date(2015, 5)} />
  </Container>
);

export default Time;
