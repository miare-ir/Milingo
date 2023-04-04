import * as React from 'react';
import './styles.scss';
export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
    name: string;
}
declare class Radio extends React.Component<RadioProps, {}> {
    private radioButton;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): React.ReactNode;
}
export default Radio;
