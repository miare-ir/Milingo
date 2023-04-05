import * as React from 'react';
import './styles.scss';
export interface CollectionCardProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    hasSubset?: boolean;
    footer?: number | string;
    disabled?: boolean;
    disabledMessage?: string;
    selected?: boolean;
}
declare class CollectionCard extends React.Component<CollectionCardProps, {}> {
    render(): React.ReactNode;
}
export default CollectionCard;
