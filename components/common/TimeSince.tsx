import { FunctionComponent } from 'react';
import Header from './Header';

interface ITimeSinceProps {
  startDate: Date;
}

const TimeSince: FunctionComponent<ITimeSinceProps> = ({ startDate }) => {
  const calculateTimeSince = () => {
    const todayDateMonth = new Date(startDate).getMonth();

    // TODO: get days since, then break it into even years
    // then even months
    // then days remaining

    return todayDateMonth;
  };

  return <Header>{calculateTimeSince()}</Header>;
};

export default TimeSince;
