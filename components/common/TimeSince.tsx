import { styled } from '..';
import { FunctionComponent } from 'react';
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
  }
`;

interface ITimeSinceProps {
  startDate: Date;
}

const TimeSince: FunctionComponent<ITimeSinceProps> = ({ startDate }) => {
  const months = differenceInMonths(new Date(), startDate);
  const years = Math.floor(months / 12);

  const remainingMonths = months - years * 12 + 1;

  return (
    <TimeSinceWrapper>
      <div>
        <Header>{years}</Header>
        <p>years</p>
      </div>
      <div>
        <Header type="h2">{remainingMonths}</Header>
        <p>months</p>
      </div>
    </TimeSinceWrapper>
  );
};

export default TimeSince;