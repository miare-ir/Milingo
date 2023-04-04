import * as React from 'react';
export interface TrProps extends React.HTMLProps<HTMLTableRowElement> {
    children?: React.ReactNode;
}
declare const Tr: React.SFC<TrProps>;
export default Tr;
