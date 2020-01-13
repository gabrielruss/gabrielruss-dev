import Header from '../common/Header';
import Container from '../common/Container';
import TimeSince from '../common/TimeSince';
import { styled } from '..';

const TimeWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TimeHeader = styled.div`
  max-width: ${props => props.theme.break_large};
`;

const TimeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(46rem, 1fr));
  gap: 5rem;
`;

const Time = () => (
  <TimeWrapper>
    <TimeHeader>
      <Header type="h2">🤓 I have been a developer for give or take...</Header>
      <TimeSince startDate={new Date(2014, 8)} />
    </TimeHeader>
    <TimeContent>
      <div>
        <Header type="h2">👶 father for </Header>
        <TimeSince startDate={new Date(2013, 8)} />
      </div>
      <div>
        <Header type="h2">💍 married for </Header>
        <TimeSince startDate={new Date(2011, 8)} />
      </div>
    </TimeContent>
    <span>By the way...that isn't an error in months...</span>
    <span>
      Major events just seem to happen in August in my life for some reason
    </span>
  </TimeWrapper>
);

export default Time;
