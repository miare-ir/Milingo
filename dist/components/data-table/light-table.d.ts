import * as React from 'react';
export interface LightTableProps extends React.HTMLProps<HTMLTableElement> {
    children?: React.ReactNode;
}
declare const LightTable: React.FC<LightTableProps>;
export default LightTable;
