import * as React from 'react';
import './styles.scss';
export interface GroupButtonProps extends React.HTMLProps<HTMLDivElement> {
}
interface GroupButtonState {
    selected: string;
}
declare class GroupButtonComponent extends React.Component<GroupButtonProps, GroupButtonState> {
    constructor(props: any);
    render(): JSX.Element;
}
export default GroupButtonComponent;
