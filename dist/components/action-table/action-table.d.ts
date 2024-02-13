import * as React from 'react';
import './styles.scss';
export interface ActionTableProps extends React.HTMLProps<HTMLDivElement> {
    title?: string;
}
declare const ActionTable: React.FC<ActionTableProps>;
export default ActionTable;
