import { Moment } from 'moment';
import * as moment from 'moment-jalaali';

export const generateMonth = (
  mm: string,
  yyyy: string,
  generateDay: (day?: Moment, month?: 'next' | 'prev') => React.ReactNode,
): JSX.Element[] => {
  const dates = [];
  const month = moment(`${yyyy}/${mm}/1`, 'jYYYY/jM/jD');
  const startOfNextMonth = moment(month).endOf('jMonth');
  const date = moment(month);

  for (let i = 6, j = 0; i !== date.day(); i === 6 ? (i = 0) : i++, j++) {
    const day = moment(date).subtract(date.day() - j + 1, 'days');
    dates.push(generateDay(day, 'prev'));
  }
  while (date.isBefore(startOfNextMonth)) {
    dates.push(generateDay(date));
    date.add(1, 'days');
  }
  for (let i = date.day(); i < 6; i++) {
    const day = moment(date).subtract(date.day() - i, 'days');
    dates.push(generateDay(day, 'next'));
  }

  return dates;
};
