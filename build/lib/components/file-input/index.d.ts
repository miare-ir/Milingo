import * as React from 'react';
import './styles.scss';
export interface FileDictionary {
    [key: string]: File | number;
}
export interface States {
    tryAgain?: boolean;
    message?: string;
    index?: number;
    loading?: boolean;
    progress?: number;
}
export interface StatesDictionary {
    [key: number]: States;
}
export interface FileInputProps extends React.HTMLProps<HTMLInputElement> {
    displayClear?: boolean;
    files?: FileDictionary;
    forceDisplayError?: boolean;
    onChangeFiles?: (value: any) => void;
    onTryAgain?: (files: FileDictionary) => void;
    pre?: string;
    states?: StatesDictionary;
    title?: string;
    validate?: (value: any) => boolean;
    children?: string;
    tryAgainText?: string;
}
export interface FileInputState {
    touched: boolean;
    files: FileDictionary;
}
declare class FileInput extends React.Component<FileInputProps, FileInputState> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: FileInputProps): void;
    handleInput: (e: any) => void;
    clear: (index: any) => void;
    private renderFiles;
    render(): JSX.Element;
}
export default FileInput;
