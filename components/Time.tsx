import Header from './common/Header';
import Container from './common/Container';
import TimeSince from './common/TimeSince';

const Time = () => (
  <Container>
    <Header type="h2">🤓 I have been a developer for give or take...</Header>
    <TimeSince startDate={new Date(2014, 8)} />
    <Header type="h2">💍 married for </Header>
    <TimeSince startDate={new Date(2011, 8)} />
    <Header type="h2">👶 father for </Header>
    <TimeSince startDate={new Date(2013, 8)} />
  </Container>
);

export default Time;
