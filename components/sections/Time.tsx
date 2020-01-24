import Header from '../common/Header';
import Container from '../common/Container';
import TimeSince from '../common/TimeSince';
import { styled } from '..';

const TimeWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10rem 3rem;
  /* box-shadow: 0px 5px 5px ${props => props.theme.colors.trans_black} */
    /* 0px -5px 5px ${props => props.theme.colors.trans_black}; */
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
      <Header size="medium">
        🤓 i have been a developer for give or take...
      </Header>
      <TimeSince startDate={new Date(2014, 7)} />
    </TimeHeader>
    <TimeContent>
      <div>
        <Header size="medium">👶 father for </Header>
        <TimeSince startDate={new Date(2013, 8)} />
      </div>
      <div>
        <Header size="medium">💍 married for </Header>
        <TimeSince startDate={new Date(2011, 8)} />
      </div>
    </TimeContent>
    <span>By the way...that isn't an error in months...</span>
    <span>
      Major events just seem to happen around August in my life for some reason
    </span>
  </TimeWrapper>
);

export default Time;
