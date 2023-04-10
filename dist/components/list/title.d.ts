import * as React from 'react';
import './styles.scss';
export interface ListTitleProps extends React.HTMLProps<HTMLDivElement> {
    title?: string;
}
declare const ListTitle: React.SFC<ListTitleProps>;
export default ListTitle;
