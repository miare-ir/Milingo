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

export interface DatePickerProps {
  title: string;
  onChangeDate: (date: any) => void;
  defaultValue: any;
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
  currentDate: any;
  dialogOpen: boolean;
  savedDate: any;
}

class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  public static defaultProps: Partial<DatePickerProps> = {
    className: '',
    dialogOpen: false,
    onChangeDate: () => {},
  };

  constructor(props) {
    super(props);

    const date = props.defaultValue ? moment(props.defaultValue) : moment();
    this.state = {
      month: date.jMonth() + 1,
      year: date.jYear(),
      currentDate: date,
      dialogOpen: false,
      savedDate: props.defaultValue ? date : undefined,
    };
  }

  componentWillReceiveProps(nextProps: DatePickerProps) {
    if (
      typeof nextProps.defaultValue === 'undefined' ||
      nextProps.defaultValue === ''
    ) {
      this.setState({ savedDate: undefined });
    } else if (
      !moment(nextProps.defaultValue).isSame(this.state.savedDate, 'day')
    ) {
      this.saveDate(moment(nextProps.defaultValue));
    }

    if (nextProps.forceDatePickerOpen) {
      this.openDialog();
    }
  }

  generateMonth = (mm, yyyy) => {
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
      weeks.push(
        <div className="calendar-week" key={i}>
          {week}
        </div>,
      );
    }
    return <div className="calendar-month">{weeks}</div>;
  };

  generateDay = (day?: Moment, month?: 'next' | 'prev') => {
    const isSelectable: boolean = !this.props.isSelectable
      ? day.isBefore(moment())
      : this.props.isSelectable(moment(day));

    const className = classNames('calendar-day', {
      'seem-disabled': !!month || !isSelectable,
      selected: day.isSame(this.state.currentDate, 'day'),
      clickable: isSelectable,
    });

    const onClick = !month
      ? this.selectDate.bind(this, day.format('jYYYY jMM jD'))
      : month === 'next'
      ? this.changeMonth.bind(this, 'add')
      : this.changeMonth.bind(this, 'subtract');

    return (
      <div
        onClick={isSelectable ? onClick : null}
        className={className}
        key={day.format('jYYYY-jMM-jD')}>
        <PersianNumber value={day.format('jD')} />
      </div>
    );
  };

  resetDate() {
    const date = moment();
    this.setState({
      year: date.jYear(),
      month: date.jMonth() + 1,
      currentDate: date,
    });
  }

  selectDate(date) {
    this.setState({ currentDate: moment(date, 'jYYYY/jM/jD') });
    this.saveDate(moment(date, 'jYYYY/jM/jD'));
  }

  changeMonth(fn: 'add' | 'subtract') {
    const date = `${this.state.year}/${this.state.month}/1`;
    const parsedDate = moment(date, 'jYYYY/jM/jD')[fn](1, 'jMonth');

    this.setState({
      month: parsedDate.jMonth() + 1,
      year: parsedDate.jYear(),
    });
  }

  saveDate = date => {
    this.setState({ savedDate: date });
    this.props.onChangeDate(date);
    this.closeDialog();
  };

  openDialog = () => {
    if (this.props.disabled) {
      return;
    }

    const date = this.props.defaultValue
      ? moment(this.props.defaultValue)
      : moment();
    let month = date.jMonth() + 1;
    let year = date.jYear();
    if (this.state.savedDate) {
      month = this.state.savedDate.jMonth() + 1;
      year = this.state.savedDate.jYear();
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
  };

  closeDialog = () => {
    if (this.props.closeDialog) {
      this.props.closeDialog();
    } else {
      this.setState({ dialogOpen: false });
    }
  };

  render() {
    const currentDate: string = this.state.currentDate.format('ddd jD jMMMM');
    const currentYear: string = this.state.currentDate.jYear();
    const year: number = this.state.year;
    const month: number = this.state.month;
    const displayedDate: string = moment(
      `${year}-${month}-1`,
      'jYYYY/jM/jD',
    ).format('jMMMM jYYYY');
    const savedDate: string = this.state.savedDate
      ? this.props.displayFormat
        ? this.props.displayFormat(moment(this.state.savedDate))
        : moment(this.state.savedDate).format('jYYYY/jMM/jDD')
      : this.props.title || 'انتخاب تاریخ';

    return (
      <div className={`date-picker-container ${this.props.className}`}>
        <Button
          ghost
          disabled={this.props.disabled}
          className={`date-picker-input ${this.state.savedDate ? '' : 'empty'}`}
          onClick={this.openDialog}
          {...{ [this.props.inputButtonSize]: true }}>
          <PersianNumber value={savedDate} className="clickable" />
        </Button>
        <ReactModal
          ariaHideApp={false}
          isOpen={this.props.dialogOpen || this.state.dialogOpen}
          onRequestClose={this.closeDialog}
          overlayClassName="milingo-date-picker-overlay"
          className="date-picker"
          contentLabel="Modal">
          <div className="calendar-info">
            <PersianNumber className="year" value={currentYear} />
            <PersianNumber className="month" value={currentDate} />
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
          <div className="calendar">
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
              onClick={() => this.saveDate(this.state.currentDate)}>
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
