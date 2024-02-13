import * as React from 'react';
import './styles.scss';
export interface ToggleButtonProps extends React.HTMLProps<HTMLInputElement> {
    name: string;
    onToggle: () => void;
    label?: string;
    disabled?: boolean;
    loading?: boolean;
    checked: boolean;
    large?: boolean;
    ltr?: boolean;
    classNames?: string;
}
declare const ToggleButton: (props: ToggleButtonProps) => JSX.Element;
export default ToggleButton;
