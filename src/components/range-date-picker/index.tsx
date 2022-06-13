import * as React from 'react';
import { Moment } from 'moment';
import * as moment from 'moment-jalaali';
import * as classNames from 'classnames';
import * as ReactModal from 'react-modal';

import Button from '../button';
import PersianNumber from '../persian-number';
import { Column, Row } from '../flex';

import './styles.scss';
import { generateMonth } from '../../common/utils/date-pickers';

moment.loadPersian({ dialect: 'persian-modern' });

export type DateRange = [moment.Moment, moment.Moment?];

export interface RangeDatePickerProps {
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
  inputButtonType?: 'primary' | 'danger' | 'ghost' | 'link';
  disabled?: boolean;
}

export interface RangeDatePickerState {
  month: number;
  year: number;
  fromDate: moment.Moment | null;
  toDate: moment.Moment | null;
  isDialogOpen: boolean;
  selectedDate: DateRange | null;
  forceDatePickerOpen?: boolean;
}

class RangeDatePicker extends React.Component<
  RangeDatePickerProps,
  RangeDatePickerState
> {
  public static defaultProps: Partial<RangeDatePickerProps> = {
    className: '',
    dialogOpen: false,
    onChangeDate: () => {},
  };

  calendar = React.createRef<HTMLDivElement>();

  persianFormats = {
    fullDashed: 'jYYYY-jMM-jD',
    fullSlashed: 'jYYYY/jMM/jD',
    fullSpaced: 'jYYYY jMM jD',
  };

  classNames = {
    inRange: 'inRange',
    primary: 'primary',
    secondary: 'secondary',
    selected: 'selected',
  };

  daysIdPrefix = 'day-';

  constructor(props: RangeDatePickerProps) {
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
      isDialogOpen: false,
      selectedDate: [fromDate, toDate],
    };
  }

  componentDidUpdate(prevProps: RangeDatePickerProps): void {
    if (
      !moment(prevProps.defaultValue[0]).isSame(
        this.state.selectedDate[0],
        'day',
      )
    ) {
      this.saveDate([
        moment(this.state.selectedDate[0]),
        this.state.selectedDate[1] ? moment(this.state.selectedDate[1]) : null,
      ]);
    }

    if (this.state.forceDatePickerOpen) {
      this.openDialog();
    }
  }

  generateMonth = (mm, yyyy): React.ReactNode => {
    const dates = generateMonth(mm, yyyy, this.generateDay);

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

  onMouseOverDays = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
    month?: 'next' | 'prev',
  ): void => {
    const dayElement = evt.currentTarget as HTMLDivElement;

    if (!month) {
      if (
        this.state.fromDate &&
        !dayElement.classList.contains(this.classNames.inRange)
      ) {
        const toDate = moment(dayElement.id.replace(this.daysIdPrefix, ''));
        const fromDate = moment(
          this.state.fromDate.format(this.persianFormats.fullDashed),
        );

        if (toDate.isAfter(fromDate)) {
          dayElement.classList.add(this.classNames.primary);
        } else {
          dayElement.classList.add(this.classNames.secondary);
        }
      }

      if (!(this.state.fromDate && this.state.toDate)) {
        this.handleCreateRange(dayElement);
      }
    }
  };

  onMouseLeaveDays = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    const { classList } = evt.currentTarget;
    if (!classList.contains(this.classNames.selected)) {
      if (
        classList.contains(this.classNames.primary) ||
        classList.contains(this.classNames.secondary)
      ) {
        classList.remove(this.classNames.primary, this.classNames.secondary);
      }
    }
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
      const dayID = `#${this.daysIdPrefix}`.concat(
        day.format(this.persianFormats.fullDashed),
      );
      const dayElement = calendar.querySelector(dayID);

      if (dayElement) {
        if (dayElement.classList.contains(this.classNames.secondary)) {
          isSecondary = true;
        }
        if (dayElement.classList.contains(this.classNames.primary)) {
          isPrimary = true;
        }
        if (dayElement.classList.contains(this.classNames.inRange)) {
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
      ? this.selectDate.bind(this, day.format(this.persianFormats.fullSpaced))
      : month === 'next'
      ? this.changeMonth.bind(this, 'add')
      : this.changeMonth.bind(this, 'subtract');

    return (
      <div
        onClick={isSelectable ? onClick : null}
        onMouseOver={evt => this.onMouseOverDays(evt, month)}
        onMouseLeave={this.onMouseLeaveDays}
        className={className}
        id={this.daysIdPrefix + day.format(this.persianFormats.fullDashed)}
        key={day.format(this.persianFormats.fullDashed)}>
        <PersianNumber value={day.format('jD')} />
      </div>
    );
  };

  getDashedDateDetail(
    date: string,
  ): { year: number; month: number; day: number } {
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
      toDayElement.id.replace(`#${this.daysIdPrefix}`, ''),
      'jYYYY/jM/jD',
    ).format(this.persianFormats.fullDashed);

    const fromDayID = this.state.fromDate.format(
      this.persianFormats.fullDashed,
    );
    const fromDayElement = calendar.querySelector(
      `#${this.daysIdPrefix}` + fromDayID,
    );

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

    const fromDay = moment(
      from.id.replace(this.daysIdPrefix, ''),
      'jYYYY/jM/jD',
    );
    const toDay = moment(to.id.replace(this.daysIdPrefix, ''), 'jYYYY/jM/jD');

    if (fromDay.isSame(toDay)) {
      return;
    }

    from.classList.add(this.classNames.inRange);

    const isToDayAfterFromDay = toDay.isAfter(fromDay);
    const achievementFunc = isToDayAfterFromDay ? 'add' : 'subtract';
    const difference = Math.abs(fromDay.diff(toDay, 'day'));

    this.removeAllByClassName(this.classNames.primary);
    this.removeAllByClassName(this.classNames.secondary);

    for (let i = 1; i <= difference; i++) {
      const dayElementID = `#${this.daysIdPrefix}`.concat(
        fromDay[achievementFunc](1, 'day').format(
          this.persianFormats.fullDashed,
        ),
      );

      const dayElement = calendar.querySelector(dayElementID);
      if (!dayElement) {
        continue;
      }

      dayElement.classList.add(this.classNames.inRange);

      if (isToDayAfterFromDay) {
        this.removeAllNextInRanges(dayElement);
        this.removeAllInRangesExceptPrimary(from, 'before');
        from.classList.add(this.classNames.primary);
        to.classList.add(this.classNames.secondary);
      } else {
        this.removeAllPrevInRanges(dayElement);
        this.removeAllInRangesExceptPrimary(from, 'after');
        from.classList.add(this.classNames.secondary);
        to.classList.add(this.classNames.primary);
      }
    }
  }

  removeAllNextInRanges(dayElement: Element): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    const day = moment(
      dayElement.id.replace(this.daysIdPrefix, ''),
      'jYYYY/jM/jD',
    );
    const nextElementID = `#${this.daysIdPrefix}`.concat(
      day.add(1, 'day').format(this.persianFormats.fullDashed),
    );

    const nextElement = calendar.querySelector(nextElementID);
    if (nextElement) {
      nextElement.classList.remove(this.classNames.inRange);
      this.removeAllNextInRanges(nextElement);
    }
  }

  removeAllPrevInRanges(dayElement: Element): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    const day = moment(
      dayElement.id.replace(this.daysIdPrefix, ''),
      'jYYYY/jM/jD',
    );
    const prevElementID = `#${this.daysIdPrefix}`.concat(
      day.subtract(1, 'day').format(this.persianFormats.fullDashed),
    );

    const prevElement = calendar.querySelector(prevElementID);
    if (prevElement) {
      prevElement.classList.remove(this.classNames.inRange);
      this.removeAllPrevInRanges(prevElement);
    }
  }

  removeAllInRangesExceptPrimary(
    dayElement: Element,
    position: 'before' | 'after',
  ): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    const element =
      position === 'before'
        ? dayElement.previousElementSibling
        : dayElement.nextElementSibling;

    if (element) {
      element.classList.remove(this.classNames.inRange);
      this.removeAllInRangesExceptPrimary(element, position);
    }
  }

  removeAllByClassName(className: string): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }
    calendar
      .querySelectorAll(`.${className}`)
      .forEach(inRange => inRange.classList.remove(className));
  }

  createDefaultRange(): void {
    const { current: calendar } = this.calendar;
    if (!this.state.fromDate || !calendar) {
      return;
    }

    if (this.state.toDate && this.state.fromDate) {
      const toDateID = this.state.toDate.format(this.persianFormats.fullDashed);
      const fromDateID = this.state.fromDate.format(
        this.persianFormats.fullDashed,
      );
      const toDateElement = calendar.querySelector(
        `#${this.daysIdPrefix}`.concat(toDateID),
      );
      const fromDateElement = calendar.querySelector(
        `#${this.daysIdPrefix}`.concat(fromDateID),
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
      const toDateID = `#${this.daysIdPrefix}`.concat(
        this.state.toDate.format(this.persianFormats.fullDashed),
      );
      const toDateElement = calendar.querySelector(toDateID);
      if (!toDateElement) {
        return;
      }
      this.handleCreateRange(toDateElement);
    } else {
      this.removeAllByClassName(this.classNames.inRange);
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
    this.removeAllByClassName(this.classNames.inRange);
  }

  selectDate(date): void {
    const selectedDate = moment(date, 'jYYYY/jM/jD');

    if (this.state.fromDate && this.state.toDate) {
      this.setState({
        toDate: null,
        fromDate: selectedDate,
      });
      this.removeAllByClassName(this.classNames.inRange);
    } else if (this.state.toDate) {
      this.setState({ fromDate: selectedDate });
    } else {
      this.setState({ toDate: selectedDate });
    }
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
    const firstDate = date[0];
    const secondDate = date[1];

    let from = date[0];
    let to = date[1];

    if (from.isAfter(to)) {
      from = secondDate;
      to = firstDate;
    }

    date = [from, to];

    this.setState({ selectedDate: date });
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

    if (this.state.selectedDate) {
      month = this.state.selectedDate[0].jMonth() + 1;
      year = this.state.selectedDate[0].jYear();
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
        isDialogOpen: true,
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
      this.setState({ isDialogOpen: false });
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
          disabled={this.props.disabled}
          className={`date-picker-input ${
            this.state.selectedDate ? '' : 'empty'
          }`}
          onClick={this.openDialog}
          {...{ [this.props.inputButtonType]: true }}
          {...{ [this.props.inputButtonSize]: true }}>
          <PersianNumber value={this.createTitle(true)} className="clickable" />
        </Button>
        <ReactModal
          ariaHideApp={false}
          isOpen={this.props.dialogOpen || this.state.isDialogOpen}
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
              onClick={() =>
                this.saveDate([this.state.fromDate, this.state.toDate])
              }>
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

export default RangeDatePicker;
