import * as React from 'react';
export interface DataTableProps extends React.HTMLProps<HTMLTableElement> {
    tagline?: string | React.ReactNode;
    children?: React.ReactNode;
}
declare class DataTable extends React.Component<DataTableProps, {}> {
    render(): React.ReactNode;
}
export default DataTable;
