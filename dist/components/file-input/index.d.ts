import * as React from 'react';
import './styles.scss';
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
    files?: File[];
    forceDisplayError?: boolean;
    onChangeFiles?: (value: File[]) => void;
    onTryAgain?: (files: File[]) => void;
    onFileCancelled?: (index?: number) => void;
    pre?: string;
    states?: StatesDictionary;
    title?: string;
    validate?: (value: File[]) => boolean;
    children?: string | React.ReactNode;
    tryAgainText?: string | React.ReactNode;
    inputRef?: React.RefObject<HTMLInputElement>;
    isClear?: boolean;
}
export interface FileInputState {
    touched: boolean;
    files: File[];
}
declare class FileInput extends React.Component<FileInputProps, FileInputState> {
    constructor(props: any);
    componentDidUpdate(prevProps: FileInputProps): void;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clear: (index?: number) => void;
    render(): React.ReactNode;
    private renderFiles;
}
export default FileInput;
