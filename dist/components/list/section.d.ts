import * as React from 'react';
import './styles.scss';
export interface ListSectionProps extends React.HTMLProps<HTMLUListElement> {
    large?: boolean;
    seperator?: boolean;
}
declare const ListSection: React.FC<ListSectionProps>;
export default ListSection;
