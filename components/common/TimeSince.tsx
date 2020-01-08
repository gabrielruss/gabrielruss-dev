import { FunctionComponent } from 'react';
import { differenceInMonths } from 'date-fns';

import Header from './Header';

interface ITimeSinceProps {
  startDate: Date;
}

const TimeSince: FunctionComponent<ITimeSinceProps> = ({ startDate }) => {
  const months = differenceInMonths(new Date(), startDate);
  const years = Math.floor(months / 12);

  const remainingMonths = months - years * 12 + 1;

  return (
    <>
      <div>
        <Header>{years}</Header>
        <p>years</p>
      </div>
      <div>
        <Header>{remainingMonths}</Header>
        <p>months</p>
      </div>
    </>
  );
};

export default TimeSince;
