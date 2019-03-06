import * as React from 'react';
import './styles.scss';
export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
    name: string;
}
declare class Radio extends React.Component<RadioProps, {}> {
    private radioButton;
    handleChange: (e: any) => void;
    render(): JSX.Element;
}
export default Radio;
