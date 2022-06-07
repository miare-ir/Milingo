import * as React from 'react';
import { Moment } from 'moment';
import * as moment from 'moment-jalaali';
import * as classNames from 'classnames';
import * as ReactModal from 'react-modal';

import Button from '../button';
import PersianNumber from '../persian-number';
import { Column, Row } from '../flex';

import './styles.scss';

moment.loadPersian({ dialect: 'persian-modern' });

export type DateRange = [moment.Moment, moment.Moment?];

export interface DatePickerRangeProps {
  title: string;
  onChangeDate: (date: DateRange) => void;
  defaultValue?: DateRange;
  className?: string;
  isSelectable?: (day: Moment) => boolean;
  displayFormat?: (day: Moment) => string;
  dialogOpen?: boolean;
  openDialog?: () => void;
  closeDialog?: () => void;
  forceDatePickerOpen?: boolean;
  inputButtonSize?: 'small' | 'tiny' | 'regular' | 'large';
  disabled?: boolean;
}

export interface DatePickerState {
  month: number;
  year: number;
  fromDate: moment.Moment | null;
  toDate: moment.Moment | null;
  dialogOpen: boolean;
  savedDate: DateRange | null;
  forceDatePickerOpen?: boolean;
}

class DatePicker extends React.Component<
  DatePickerRangeProps,
  DatePickerState
> {
  public static defaultProps: Partial<DatePickerRangeProps> = {
    className: '',
    dialogOpen: false,
    onChangeDate: () => {},
  };

  calendar = React.createRef<HTMLDivElement>();

  constructor(props: DatePickerRangeProps) {
    super(props);

    const fromDate = props.defaultValue
      ? moment(props.defaultValue[0])
      : moment();

    const toDate =
      props.defaultValue && props.defaultValue[1]
        ? moment(props.defaultValue[1])
        : null;

    this.state = {
      month: fromDate.jMonth() + 1,
      year: fromDate.jYear(),
      fromDate,
      toDate,
      dialogOpen: false,
      savedDate: [fromDate, toDate],
    };
  }

  componentDidUpdate(prevProps: DatePickerRangeProps): void {
    if (
      !moment(prevProps.defaultValue[0]).isSame(this.state.savedDate[0], 'day')
    ) {
      this.saveDate([
        moment(this.state.savedDate[0]),
        this.state.savedDate[1] ? moment(this.state.savedDate[1]) : null,
      ]);
    }

    if (this.state.forceDatePickerOpen) {
      this.openDialog();
    }
  }

  generateMonth = (mm, yyyy): React.ReactNode => {
    const dates = [];
    const month = moment(`${yyyy}/${mm}/1`, 'jYYYY/jM/jD');
    const startOfNextMonth = moment(month).endOf('jMonth');
    const date = moment(month);

    for (let i = 6, j = 0; i !== date.day(); i === 6 ? (i = 0) : i++, j++) {
      const day = moment(date).subtract(date.day() - j + 1, 'days');
      dates.push(this.generateDay(day, 'prev'));
    }
    while (date.isBefore(startOfNextMonth)) {
      dates.push(this.generateDay(date));
      date.add(1, 'days');
    }
    for (let i = date.day(); i < 6; i++) {
      const day = moment(date).subtract(date.day() - i, 'days');
      dates.push(this.generateDay(day, 'next'));
    }

    const weeks: JSX.Element[] = [];
    for (let i = 0; i < dates.length / 7; i++) {
      const week: JSX.Element[] = dates.slice(i * 7, (i + 1) * 7);
      weeks.push(<React.Fragment key={i}>{week}</React.Fragment>);
    }
    return (
      <div
        onMouseLeave={() => this.createDefaultRange()}
        className="calendar-month">
        {weeks}
      </div>
    );
  };

  generateDay = (day?: Moment, month?: 'next' | 'prev'): React.ReactNode => {
    const { current: calendar } = this.calendar;

    const isSelectable: boolean = !this.props.isSelectable
      ? day.isBefore(moment())
      : this.props.isSelectable(moment(day));

    let isInRange = false;
    let isSecondary = false;
    let isPrimary = false;

    if (calendar) {
      const dayID = '#day-'.concat(day.format('jYYYY-jMM-jD'));
      const dayElement = calendar.querySelector(dayID);

      if (dayElement) {
        if (dayElement.classList.contains('secondary')) {
          isSecondary = true;
        }
        if (dayElement.classList.contains('primary')) {
          isPrimary = true;
        }
        if (dayElement.classList.contains('inRange')) {
          isInRange = true;
        }
      }
    }

    const className = classNames('calendar-day', {
      'seem-disabled': !!month || !isSelectable,
      selected:
        day.isSame(this.state.fromDate, 'day') ||
        day.isSame(this.state.toDate, 'day'),
      inRange: isInRange,
      secondary: isSecondary,
      primary: isPrimary,
      clickable: isSelectable,
    });

    const onClick = !month
      ? this.selectDate.bind(this, day.format('jYYYY jMM jD'))
      : month === 'next'
      ? this.changeMonth.bind(this, 'add')
      : this.changeMonth.bind(this, 'subtract');

    const onMouseOver = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const dayElement = evt.currentTarget as HTMLDivElement;

      if (!month) {
        if (!(this.state.fromDate && this.state.toDate)) {
          this.handleCreateRange(dayElement);
        }
      }
    };

    return (
      <div
        onClick={isSelectable ? onClick : null}
        onMouseOver={onMouseOver}
        className={className}
        id={'day-' + day.format('jYYYY-jMM-jD')}
        key={day.format('jYYYY-jMM-jD')}>
        <PersianNumber value={day.format('jD')} />
      </div>
    );
  };

  getDashedDateDetail(date: string) {
    const detail = date.split('-');
    return {
      year: parseInt(detail[0], 10),
      month: parseInt(detail[1], 10),
      day: parseInt(detail[2], 10),
    };
  }

  handleCreateRange(toDayElement: Element): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    const toDayID = moment(
      toDayElement.id.replace('#day-', ''),
      'jYYYY/jM/jD',
    ).format('jYYYY-jMM-jD');

    const fromDayID = this.state.fromDate.format('jYYYY-jMM-jD');
    const fromDayElement = calendar.querySelector('#day-' + fromDayID);

    if (!fromDayElement) {
      const fromDayDetail = this.getDashedDateDetail(fromDayID);
      const toDayDetail = this.getDashedDateDetail(toDayID);

      if (fromDayDetail.month < toDayDetail.month) {
        return this.createRange(toDayElement, 'start');
      } else if (fromDayDetail.month > toDayDetail.month) {
        return this.createRange(toDayElement, 'end');
      } else {
        return;
      }
    }

    this.createRange(fromDayElement, toDayElement);
  }

  createRange(
    from: Element | 'start' | 'end',
    to: Element | 'start' | 'end',
  ): void {
    const { current: calendar } = this.calendar;
    if (!calendar) {
      return;
    }

    if (from === 'start') {
      from = calendar.querySelector('.calendar-day');
    }
    if (from === 'end') {
      const allDays = calendar.querySelectorAll('.calendar-day');
      from = allDays[allDays.length - 1];
    }

    if (to === 'start') {
      to = calendar.querySelector('.calendar-day');
    }
    if (to === 'end') {
      const allDays = calendar.querySelectorAll('.calendar-day');
      to = allDays[allDays.length - 1];
    }

    const fromDay = moment(from.id.replace('day-', ''), 'jYYYY/jM/jD');
    const toDay = moment(to.id.replace('day-', ''), 'jYYYY/jM/jD');

    if (fromDay.isSame(toDay)) {
      return;
    }

    from.classList.add('inRange');

    const isToDayAfterFromDay = toDay.isAfter(fromDay);
    const achievementFunc = isToDayAfterFromDay ? 'add' : 'subtract';
    const difference = Math.abs(fromDay.diff(toDay, 'day'));

    this.removeAllPrimariesAndSecondaries();

    for (let i = 1; i <= difference; i++) {
      const dayElementID = '#day-'.concat(
        fromDay[achievementFunc](1, 'day').format('jYYYY-jMM-jD'),
      );

      const dayElement = calendar.querySelector(dayElementID);
      if (!dayElement) {
        continue;
      }

      dayElement.classList.add('inRange');

      if (isToDayAfterFromDay) {
        this.removeAllNextInRanges(dayElement);
        this.removeAllInRangesBeforePrimary(from);
        from.classList.add('primary');
        to.classList.add('secondary');
      } else {
        this.removeAllPrevInRanges(dayElement);
        this.removeAllInRangesAfterPrimary(from);
        from.classList.add('secondary');
        to.classList.add('primary');
      }
    }
  }

  removeAllNextInRanges(dayElement: Element): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    const day = moment(dayElement.id.replace('day-', ''), 'jYYYY/jM/jD');
    const nextElementID = '#day-'.concat(
      day.add(1, 'day').format('jYYYY-jMM-jD'),
    );

    const nextElement = calendar.querySelector(nextElementID);
    if (nextElement) {
      nextElement.classList.remove('inRange');
      this.removeAllNextInRanges(nextElement);
    }
  }

  removeAllPrevInRanges(dayElement: Element): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    const day = moment(dayElement.id.replace('day-', ''), 'jYYYY/jM/jD');
    const prevElementID = '#day-'.concat(
      day.subtract(1, 'day').format('jYYYY-jMM-jD'),
    );

    const prevElement = calendar.querySelector(prevElementID);
    if (prevElement) {
      prevElement.classList.remove('inRange');
      this.removeAllPrevInRanges(prevElement);
    }
  }

  removeAllInRangesAfterPrimary(dayElement: Element): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    const nextElement = dayElement.nextElementSibling;
    if (nextElement) {
      nextElement.classList.remove('inRange');
      this.removeAllInRangesAfterPrimary(nextElement);
    }
  }

  removeAllInRangesBeforePrimary(dayElement: Element): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    const prevElement = dayElement.previousElementSibling;
    if (prevElement) {
      prevElement.classList.remove('inRange');
      this.removeAllInRangesBeforePrimary(prevElement);
    }
  }

  removeAllInRanges(): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    calendar
      .querySelectorAll('.inRange')
      .forEach(inRange => inRange.classList.remove('inRange'));
  }

  removeAllSecondaries(): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }
    calendar
      .querySelectorAll('.secondary')
      .forEach(inRange => inRange.classList.remove('secondary'));
  }

  removeAllPrimaries(): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }
    calendar
      .querySelectorAll('.primary')
      .forEach(inRange => inRange.classList.remove('primary'));
  }

  removeAllPrimariesAndSecondaries(): void {
    this.removeAllPrimaries();
    this.removeAllSecondaries();
  }

  createDefaultRange(): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    if (this.state.toDate && this.state.fromDate) {
      const toDateID = this.state.toDate.format('jYYYY-jMM-jD');
      const fromDateID = this.state.fromDate.format('jYYYY-jMM-jD');
      const toDateElement = calendar.querySelector('#day-'.concat(toDateID));
      const fromDateElement = calendar.querySelector(
        '#day-'.concat(fromDateID),
      );

      const { month: fromMonth } = this.getDashedDateDetail(fromDateID);
      const { month: toMonth } = this.getDashedDateDetail(toDateID);

      if (fromMonth === toMonth) {
        this.createRange(fromDateElement, toDateElement);
      } else {
        if (!toDateElement && !fromDateElement) {
          if (fromMonth > toMonth) {
            if (this.state.month < fromMonth && this.state.month > toMonth) {
              this.createRange('start', 'end');
            }
          } else {
            if (this.state.month < toMonth && this.state.month > fromMonth) {
              this.createRange('start', 'end');
            }
          }
        } else if (toDateElement) {
          if (this.state.month < fromMonth) {
            this.createRange('end', toDateElement);
          } else {
            this.createRange('start', toDateElement);
          }
        } else {
          if (this.state.month < toMonth) {
            this.createRange(fromDateElement, 'end');
          } else {
            this.createRange('start', fromDateElement);
          }
        }
      }
    } else if (this.state.toDate) {
      const toDateID = '#day-'.concat(this.state.toDate.format('jYYYY-jMM-jD'));
      const toDateElement = calendar.querySelector(toDateID);
      if (!toDateElement) {
        return;
      }
      this.handleCreateRange(toDateElement);
    } else {
      this.removeAllInRanges();
    }
  }

  resetDate(): void {
    const date = moment();
    this.setState({
      year: date.jYear(),
      month: date.jMonth() + 1,
      fromDate: date,
      toDate: null,
    });
    this.removeAllInRanges();
  }

  selectDate(date): void {
    const selectedDate = moment(date, 'jYYYY/jM/jD');

    if (this.state.fromDate && this.state.toDate) {
      this.setState({
        toDate: null,
        fromDate: selectedDate,
      });
      this.removeAllInRanges();
    } else if (this.state.toDate) {
      this.setState({ fromDate: selectedDate });
    } else {
      this.setState({ toDate: selectedDate });
    }

    // this.saveDate(moment(date, 'jYYYY/jM/jD'));
  }

  changeMonth(fn: 'add' | 'subtract'): void {
    const date = `${this.state.year}/${this.state.month}/1`;
    const parsedDate = moment(date, 'jYYYY/jM/jD')[fn](1, 'jMonth');

    this.setState({
      month: parsedDate.jMonth() + 1,
      year: parsedDate.jYear(),
    });

    // magic 0ms timeout to make sure all days are rendered
    setTimeout(() => this.createDefaultRange(), 0);
  }

  saveDate = (date: DateRange): void => {
    this.setState({ savedDate: date });
    this.props.onChangeDate(date);
    this.closeDialog();
  };

  openDialog = (): void => {
    if (this.props.disabled) {
      return;
    }

    const date1 = this.props.defaultValue
      ? moment(this.props.defaultValue[0])
      : moment();

    let month = date1.jMonth() + 1;
    let year = date1.jYear();

    if (this.state.savedDate) {
      month = this.state.savedDate[0].jMonth() + 1;
      year = this.state.savedDate[0].jYear();
    }

    if (this.props.openDialog) {
      this.setState(
        {
          year,
          month,
        },
        () => this.props.openDialog(),
      );
    } else {
      this.setState({
        dialogOpen: true,
        year,
        month,
      });
    }

    setTimeout(() => this.createDefaultRange(), 0);
  };

  closeDialog = (): void => {
    if (this.props.closeDialog) {
      this.props.closeDialog();
    } else {
      this.setState({ dialogOpen: false });
    }
  };

  createTitle(minimal?: boolean): string {
    const format = minimal ? 'jM/jD' : 'ddd jD jMMMM';

    if (this.state.fromDate && this.state.toDate) {
      const from = this.state.fromDate.toDate().getTime();
      const to = this.state.toDate.toDate().getTime();

      const fromTitle = moment(from).format(format);
      const toTitle = moment(to).format(format);

      if (from < to) {
        return `از ${fromTitle} تا ${toTitle}`;
      } else {
        return `از ${toTitle} تا ${fromTitle}`;
      }
    } else if (this.state.fromDate) {
      return this.state.fromDate.format(format);
    }
    return minimal ? 'انتخاب' : 'لطفا یک روز را انتخاب کنید';
  }

  render(): React.ReactNode {
    const currentYear: string = this.state.fromDate
      ? this.state.fromDate.jYear()
      : '';
    const year: number = this.state.year;
    const month: number = this.state.month;
    const displayedDate: string = moment(
      `${year}-${month}-1`,
      'jYYYY/jM/jD',
    ).format('jMMMM jYYYY');

    return (
      <div className={`range-date-picker-container ${this.props.className}`}>
        <Button
          ghost
          disabled={this.props.disabled}
          className={`date-picker-input ${this.state.savedDate ? '' : 'empty'}`}
          onClick={this.openDialog}
          {...{ [this.props.inputButtonSize]: true }}>
          <PersianNumber value={this.createTitle(true)} className="clickable" />
        </Button>
        <ReactModal
          ariaHideApp={false}
          isOpen={this.props.dialogOpen || this.state.dialogOpen}
          onRequestClose={this.closeDialog}
          overlayClassName="milingo-range-date-picker-overlay"
          className="date-picker"
          contentLabel="Modal">
          <div className="calendar-info">
            <PersianNumber className="year" value={currentYear} />
            <PersianNumber className="month" value={this.createTitle()} />
          </div>
          <Row grow={1} className="padding-medium calendar-switches">
            <Column grow={0} order={0}>
              <span
                className="material-icons clickable"
                onClick={() => this.changeMonth('subtract')}>
                chevron_right
              </span>
            </Column>
            <Column grow={0} order={2}>
              <span
                className="material-icons clickable"
                onClick={() => this.changeMonth('add')}>
                chevron_left
              </span>
            </Column>
            <Column grow={1} order={1} align="center">
              <PersianNumber className="month" value={displayedDate} />
            </Column>
          </Row>
          <div className="calendar" ref={this.calendar}>
            <div className="calendar-month">
              <div className="calendar-week">
                <div className="calendar-weekday">ش</div>
                <div className="calendar-weekday">ی</div>
                <div className="calendar-weekday">د</div>
                <div className="calendar-weekday">س</div>
                <div className="calendar-weekday">چ</div>
                <div className="calendar-weekday">پ</div>
                <div className="calendar-weekday">ج</div>
              </div>
            </div>
            {this.generateMonth(this.state.month, this.state.year)}
          </div>
          <div className="calendar-actions">
            <Button
              link
              small
              onClick={() => this.saveDate([this.state.fromDate, this.state])}>
              تایید
            </Button>
            <Button link small onClick={this.closeDialog}>
              انصراف
            </Button>
            <Button link small onClick={this.resetDate.bind(this)}>
              امروز
            </Button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default DatePicker;
