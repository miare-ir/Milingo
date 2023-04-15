import * as React from 'react';
import { Moment } from 'moment';
import * as moment from 'moment-jalaali';
import './styles.scss';
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
declare class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    static defaultProps: Partial<DatePickerProps>;
    constructor(props: any);
    static getDerivedStateFromProps(nextProps: DatePickerProps, prevState: DatePickerState): {};
    componentDidUpdate(prevProps: DatePickerProps): void;
    generateMonth: (mm: any, yyyy: any) => React.ReactNode;
    generateDay: (day?: Moment, month?: 'next' | 'prev') => React.ReactNode;
    resetDate(): void;
    selectDate(date: any): void;
    changeMonth(fn: 'add' | 'subtract'): void;
    saveDate: (date: any) => void;
    openDialog: () => void;
    closeDialog: () => void;
    renderCalender(currentDate: string, currentYear: string, displayedDate: string): React.ReactNode;
    render(): React.ReactNode;
}
export default DatePicker;
