import * as React from 'react';
interface DataTableProps extends React.HTMLProps<HTMLTableElement> {
    tagline?: string | React.ReactNode;
    children?: React.ReactNode;
}
declare class DataTable extends React.Component<DataTableProps, {}> {
    render(): JSX.Element;
}
export default DataTable;
