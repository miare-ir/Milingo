import * as React from 'react';
import { Moment } from 'moment';
import * as moment from 'moment-jalaali';
import { ButtonProps } from '../button';
import './styles.scss';
export declare type DateRange = [moment.Moment, moment.Moment?];
export interface RangeDatePickerProps {
    title: string;
    onChangeDate: (date: DateRange) => void;
    defaultValue?: DateRange;
    className?: string;
    isSelectable?: (day: Moment) => boolean;
    isActive?: (day: Moment) => boolean;
    displayFormat?: (day: Moment) => string;
    isDialogOpen?: boolean;
    openDialog?: () => void;
    closeDialog?: () => void;
    forceDatePickerOpen?: boolean;
    disabled?: boolean;
    buttonProps?: Omit<ButtonProps, 'children' | 'ref'>;
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
declare class RangeDatePicker extends React.Component<RangeDatePickerProps, RangeDatePickerState> {
    static defaultProps: Partial<RangeDatePickerProps>;
    calendar: React.RefObject<HTMLDivElement>;
    persianFormats: {
        fullDashed: string;
        fullSlashed: string;
        fullSpaced: string;
    };
    classNames: {
        inRange: string;
        primary: string;
        secondary: string;
        selected: string;
        disabled: string;
        inactive: string;
    };
    daysIdPrefix: string;
    constructor(props: RangeDatePickerProps);
    componentDidUpdate(prevProps: RangeDatePickerProps, prevState: Readonly<RangeDatePickerState>): void;
    generateMonth: (mm: any, yyyy: any) => React.ReactNode;
    onMouseOverDays: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>, month?: "next" | "prev") => void;
    onMouseLeaveDays: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    generateDay: (day?: Moment, month?: "next" | "prev") => React.ReactNode;
    getDashedDateDetail(date: string): {
        year: number;
        month: number;
        day: number;
    };
    handleCreateRange(toDayElement: Element): void;
    createRange(from: Element | 'start' | 'end', to: Element | 'start' | 'end'): void;
    removeAllNextInRanges(dayElement: Element): void;
    removeAllPrevInRanges(dayElement: Element): void;
    removeAllInRangesExceptPrimary(dayElement: Element, position: 'before' | 'after'): void;
    removeAllByClassName(className: string): void;
    createDefaultRange(): void;
    resetDate(): void;
    selectDate(date: any): void;
    changeMonth(fn: 'add' | 'subtract'): void;
    saveDate: (date: DateRange) => void;
    openDialog: () => void;
    closeDialog: () => void;
    createTitle(range: DateRange, lessContent?: boolean): string;
    render(): React.ReactNode;
}
export default RangeDatePicker;
