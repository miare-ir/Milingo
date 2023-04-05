import * as React from 'react';
export interface ThProps extends React.HTMLProps<HTMLTableHeaderCellElement> {
    children?: React.ReactNode;
}
declare const Th: React.FC<ThProps>;
export default Th;
