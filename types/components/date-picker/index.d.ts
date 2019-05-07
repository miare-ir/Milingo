import * as React from 'react';
import { Moment } from 'moment';
import './styles.scss';
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
declare class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    static defaultProps: Partial<DatePickerProps>;
    constructor(props: any);
    componentWillReceiveProps(nextProps: DatePickerProps): void;
    generateMonth: (mm: any, yyyy: any) => JSX.Element;
    generateDay: (day?: Moment, month?: "next" | "prev") => JSX.Element;
    resetDate(): void;
    selectDate(date: any): void;
    changeMonth(fn: 'add' | 'subtract'): void;
    saveDate: (date: any) => void;
    openDialog: () => void;
    closeDialog: () => void;
    render(): JSX.Element;
}
export default DatePicker;
