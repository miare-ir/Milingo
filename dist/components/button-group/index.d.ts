import * as React from 'react';
import './styles.scss';
export type GroupButtonProps = React.HTMLProps<HTMLDivElement>;
interface GroupButtonState {
    selected: string;
}
declare class GroupButtonComponent extends React.Component<GroupButtonProps, GroupButtonState> {
    constructor(props: any);
    render(): React.ReactNode;
}
export default GroupButtonComponent;
