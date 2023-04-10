import * as React from 'react';
export interface TdProps extends React.HTMLProps<HTMLTableDataCellElement> {
    children?: React.ReactNode;
}
declare const Td: React.FC<TdProps>;
export default Td;
