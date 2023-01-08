import * as React from 'react';
export interface TdProps extends React.HTMLProps<HTMLTableDataCellElement> {
    children?: React.ReactNode;
}
declare const Td: React.SFC<TdProps>;
export default Td;
