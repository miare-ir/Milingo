import * as React from 'react';
import './styles.scss';
export interface ColumnProps extends React.HTMLProps<HTMLDivElement> {
    innerRef?: string | ((node: any) => void);
    'mb-row'?: boolean;
    order?: number;
    'mb-order'?: number;
    grow?: number;
    'mb-grow'?: number;
    fullHeight?: boolean;
    'mb-fullWidth'?: boolean;
    align?: 'center';
    justify?: 'center' | 'space-between' | 'flex-end' | 'flex-start';
}
export declare const Column: React.FC<ColumnProps>;
export interface RowProps extends React.HTMLProps<HTMLDivElement> {
    innerRef?: string | ((node: any) => void);
    'mb-column'?: boolean;
    order?: number;
    'mb-order'?: number;
    grow?: number;
    'mb-grow'?: number;
    fullWidth?: boolean;
    'mb-fullWidth'?: boolean;
    align?: 'center';
    justify?: 'center' | 'space-between' | 'flex-end' | 'flex-start';
}
export declare const Row: React.FC<RowProps>;
