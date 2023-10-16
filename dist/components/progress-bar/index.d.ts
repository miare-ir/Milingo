import * as React from 'react';
import './styles.scss';
export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    range: [number, number];
    current: number;
    title?: React.ReactNode;
    secondaryMode?: boolean;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
