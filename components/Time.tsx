import Header from './common/Header';
import Container from './common/Container';
import TimeSince from './common/TimeSince';
import Grid from './common/Grid';

const Time = () => (
  <Container>
    <Header type="h2">🤓 I have been a developer for give or take...</Header>
    <TimeSince startDate={new Date(2014, 8)} />
    <Grid>
      <span>
        <Header type="h2">💍 married for </Header>
        <TimeSince startDate={new Date(2011, 8)} />
      </span>
      <span>
        <Header type="h2">👶 father for </Header>
        <TimeSince startDate={new Date(2013, 8)} />
      </span>
    </Grid>
    <span>By the way...that isn't an error in months...</span>
    <span>
      Major events just seem to happen in August in my life for some reason
    </span>
  </Container>
);

export default Time;
