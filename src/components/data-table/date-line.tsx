import * as React from 'react';
import * as moment from 'moment-jalaali';

import PersianNumber from '../persian-number';

import './styles.scss';

export interface DateLineProps {
  date: moment;
}

const DateLine: React.SFC<DateLineProps> = (props: DateLineProps) => {
  const JFORMAT: string = 'ddd jD jMMMM، jYYYY';
  const { date } = props;

  const extractDate = () => {
    if (date.isSame(moment(), 'day')) {
      return 'امروز، ' + date.format(JFORMAT);
    }
    return date.format(JFORMAT);
  };

  return (
    <div className="date-line">
      <PersianNumber value={extractDate()} />
    </div>
  );
};

export default DateLine;
