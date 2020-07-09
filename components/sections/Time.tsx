import Header from '../common/Header';
import TimeSince from '../common/TimeSince';
import { styled } from '..';
import FrostedGlass from '../styles/FrostedGlass';

const TimeWrapper = styled.div`
  text-align: center;
  min-height: 100vh;
`;

const TimeHeader = styled.div`
  @media (max-width: ${(props) => props.theme.break_small}) {
    padding: 0;
  }
`;

const TimeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.break_small}) {
    grid-template-columns: auto;
  }
`;

function Time() {
  return (
    <TimeWrapper>
      <FrostedGlass>
        <TimeHeader>
          <Header size="medium">
            🤓
            <br /> i've been a developer for
          </Header>
          <TimeSince startDate={new Date(2014, 6)} />
        </TimeHeader>
        <TimeContent>
          <div>
            <Header size="medium">
              👶
              <br /> father for{' '}
            </Header>
            <TimeSince startDate={new Date(2013, 7)} />
          </div>
          <div>
            <Header size="medium">
              💍
              <br /> married for{' '}
            </Header>
            <TimeSince startDate={new Date(2011, 7)} />
          </div>
        </TimeContent>
      </FrostedGlass>
    </TimeWrapper>
  );
}

export default Time;
