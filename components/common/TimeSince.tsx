import { styled } from '..';
import { differenceInMonths } from 'date-fns';

import Header from './Header';

const TimeSinceWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  gap: 7rem;

  div {
    display: flex;
    align-items: center;

    p {
      margin-left: 0.5rem;
    }
  }
`;

interface ITimeSinceProps {
  startDate: Date;
}

function TimeSince({ startDate }: ITimeSinceProps) {
  const months = differenceInMonths(new Date(), startDate);
  const years = Math.floor(months / 12);

  const remainingMonths = months - years * 12;

  return (
    <TimeSinceWrapper>
      <div>
        <Header>{years}</Header>
        <p>years</p>
      </div>
      <div>
        <Header size="medium">{remainingMonths}</Header>
        <p>months</p>
      </div>
    </TimeSinceWrapper>
  );
}

export default TimeSince;
