import { Moment } from 'moment';
export declare const generateMonth: (mm: string, yyyy: string, generateDay: (day?: Moment, months?: 'next' | 'prev') => React.ReactNode) => JSX.Element[];
