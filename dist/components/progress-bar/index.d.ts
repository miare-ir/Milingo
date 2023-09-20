import { FC, HTMLAttributes, ReactNode } from 'react';
import './styles.scss';
export interface ProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    range: [number, number];
    current: number;
    title?: ReactNode;
    secondaryMode?: boolean;
}
export declare const ProgressBar: FC<ProgressBarProps>;
