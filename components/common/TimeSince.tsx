import { styled } from '..';
import { FunctionComponent } from 'react';
import { differenceInMonths } from 'date-fns';

import Header from './Header';

const TimeSinceWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  gap: 7rem;

  p {
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
      <p>
        <Header>{years}</Header>
        <p>years</p>
      </p>
      <p>
        <Header type="h2">{remainingMonths}</Header>
        <p>months</p>
      </p>
    </TimeSinceWrapper>
  );
};

export default TimeSince;
