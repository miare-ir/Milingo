import * as React from 'react';
import { Moment } from 'moment';
import * as moment from 'moment-jalaali';
import * as classNames from 'classnames';
import * as ReactModal from 'react-modal';

import Button from '../button';
import PersianNumber from '../persian-number';
import { Column, Row } from '../flex';
import { generateMonth } from '../../common/utils/date-pickers';

import './styles.scss';
import Loader from '../../components/loader';

moment.loadPersian({ dialect: 'persian-modern' });

export interface DatePickerProps {
  title: string;
  onChangeDate: (date: moment.Moment) => void;
  defaultValue: moment.Moment;
  className?: string;
  isSelectable?: (day: Moment) => boolean;
  displayFormat?: (day: Moment) => string;
  dialogOpen?: boolean;
  openDialog?: () => void;
  closeDialog?: () => void;
  forceDatePickerOpen?: boolean;
  inputButtonSize?: 'small' | 'tiny' | 'regular' | 'large';
  disabled?: boolean;
  isInline?: boolean;
  submitButtonTitle?: string;
  isLoading?: boolean;
}

export interface DatePickerState {
  month: number;
  year: number;
  currentDate: moment.Moment;
  dialogOpen: boolean;
  savedDate: moment.Moment;
  forceDatePickerOpen?: boolean;
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

  static getDerivedStateFromProps(
    nextProps: DatePickerProps,
    prevState: DatePickerState,
  ): {} {
    if (
      typeof nextProps.defaultValue === 'undefined' ||
      nextProps.defaultValue === ''
    ) {
      return { savedDate: undefined };
    } else if (
      !moment(nextProps.defaultValue).isSame(prevState.savedDate, 'day')
    ) {
      return { savedDate: nextProps.defaultValue };
    }

    if (nextProps.forceDatePickerOpen) {
      return { forceDatePickerOpen: nextProps.forceDatePickerOpen };
    }

    return null;
  }

  componentDidUpdate(prevProps: DatePickerProps): void {
    if (!moment(prevProps.defaultValue).isSame(this.state.savedDate, 'day')) {
      this.saveDate(moment(this.state.savedDate));
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
      weeks.push(
        <div className="calendar-week" key={i}>
          {week}
        </div>,
      );
    }

    return <div className="calendar-month">{weeks}</div>;
  };

  generateDay = (day?: Moment, month?: 'next' | 'prev'): React.ReactNode => {
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

  resetDate(): void {
    const date = moment();
    this.setState({
      year: date.jYear(),
      month: date.jMonth() + 1,
      currentDate: date,
    });
  }

  selectDate(date): void {
    this.setState({ currentDate: moment(date, 'jYYYY/jM/jD') });
  }

  changeMonth(fn: 'add' | 'subtract'): void {
    const date = `${this.state.year}/${this.state.month}/1`;
    const parsedDate = moment(date, 'jYYYY/jM/jD')[fn](1, 'jMonth');

    this.setState({
      month: parsedDate.jMonth() + 1,
      year: parsedDate.jYear(),
    });
  }

  saveDate = (date): void => {
    this.setState({ savedDate: date });
    this.props.onChangeDate(date);
    this.closeDialog();
  };

  openDialog = (): void => {
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

  closeDialog = (): void => {
    if (this.props.closeDialog) {
      this.props.closeDialog();
    } else {
      this.setState({ dialogOpen: false });
    }
  };

  renderCalender(
    currentDate: string,
    currentYear: string,
    displayedDate: string,
  ): React.ReactNode {
    return (
      <>
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
        <div className={this.props.isInline ? 'calendar-inline' : 'calendar'}>
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
        {this.props.isInline ? (
          <div className="calendar-actions-inline">
            <Button
              className="today-btn"
              text
              small
              onClick={this.resetDate.bind(this)}>
              امروز
            </Button>
            <hr />
            <Button
              primary
              small
              disabled={this.props.disabled}
              onClick={() => this.saveDate(this.state.currentDate)}>
              {this.props.isLoading ? (
                <Loader />
              ) : (
                this.props.submitButtonTitle || 'تایید'
              )}
            </Button>
          </div>
        ) : (
          <div className="calendar-actions">
            <Button
              link
              small
              disabled={this.props.disabled}
              onClick={() => this.saveDate(this.state.currentDate)}>
              {this.props.isLoading ? (
                <Loader primary />
              ) : (
                this.props.submitButtonTitle || 'تایید'
              )}
            </Button>
            <Button link small onClick={this.closeDialog}>
              انصراف
            </Button>
            <Button link small onClick={this.resetDate.bind(this)}>
              امروز
            </Button>
          </div>
        )}
      </>
    );
  }

  render(): React.ReactNode {
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

    return this.props.isInline ? (
      <div className={`date-picker-container ${this.props.className}`}>
        <div className="date-picker">
          {this.renderCalender(currentDate, currentYear, displayedDate)}
        </div>
      </div>
    ) : (
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
          {this.renderCalender(currentDate, currentYear, displayedDate)}
        </ReactModal>
      </div>
    );
  }
}

export default DatePicker;
