import Header, { StyledHeader } from '../common/Header';
import TimeSince from '../common/TimeSince';
import { styled } from '..';

const TimeWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  gap: 2rem;
`;

const TimeHeader = styled.div`
  @media (max-width: ${props => props.theme.break_small}) {
    padding: 0 10rem;
  }
`;

const TimeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
  gap: 2rem;
`;

function Time() {
  return (
    <TimeWrapper>
      <TimeHeader>
        <Header size="medium">
          🤓
          <br /> i have been a developer for give or take...
        </Header>
        <TimeSince startDate={new Date(2014, 7)} />
      </TimeHeader>
      <TimeContent>
        <div>
          <Header size="medium">
            👶
            <br /> father for{' '}
          </Header>
          <TimeSince startDate={new Date(2013, 8)} />
        </div>
        <div>
          <Header size="medium">
            💍
            <br /> married for{' '}
          </Header>
          <TimeSince startDate={new Date(2011, 8)} />
        </div>
      </TimeContent>
      {/* <p>
      By the way...that isn't an error in months...
      <br />
      Major events just seem to happen around August in my life for some reason
    </p> */}
    </TimeWrapper>
  );
}

export default Time;
