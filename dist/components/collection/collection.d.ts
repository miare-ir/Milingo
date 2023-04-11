import * as React from 'react';
import './styles.scss';
export interface CollectionProps extends React.HTMLProps<HTMLDivElement> {
    title?: string;
    className?: string;
    children?: React.ReactNode;
}
declare class Collection extends React.Component<CollectionProps, {}> {
    render(): React.ReactNode;
}
export default Collection;
