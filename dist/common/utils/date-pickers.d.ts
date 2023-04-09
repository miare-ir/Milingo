import { Moment } from 'moment';
export declare const generateMonth: (mm: string, yyyy: string, generateDay: (day?: Moment, month?: 'next' | 'prev') => React.ReactNode) => JSX.Element[];
