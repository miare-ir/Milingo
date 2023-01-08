/// <reference types="react" />
/// <reference types="@emotion/core" />
import { Moment } from 'moment';
export declare const generateMonth: (mm: string, yyyy: string, generateDay: (day?: Moment, month?: "next" | "prev") => import("react").ReactNode) => JSX.Element[];
