import * as React from 'react';
import './styles.scss';
export interface ListProps extends React.HTMLProps<HTMLUListElement> {
    large?: boolean;
}
declare const List: React.SFC<ListProps>;
export default List;
