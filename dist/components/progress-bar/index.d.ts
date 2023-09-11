import { FC, HTMLAttributes, ReactNode } from 'react';
import './styles.scss';
export interface ProgressBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    primaryColor: string;
    secondaryColor: string;
    range: [number, number];
    current: number;
    title?: ReactNode;
}
export declare const ProgressBar: FC<ProgressBarProps>;
