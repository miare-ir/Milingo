import * as React from 'react';
export interface ThProps extends React.HTMLProps<HTMLTableHeaderCellElement> {
    children?: React.ReactNode;
}
declare const Th: React.SFC<ThProps>;
export default Th;
