import * as React from 'react';
import { States } from '../file-input';
import './styles.scss';
export interface ChatProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
    id: number;
    handelSubmit?: (id: number, text: string, attachment?: File) => void;
    isSending?: boolean;
    isClear?: boolean;
    canSubmit?: boolean;
    canAttach?: boolean;
    children?: React.ReactNode;
    chatContentFooter?: React.ReactNode;
    footer?: React.ReactNode;
    state?: States;
    file?: File;
    forceDisplayError?: boolean;
    validFileSize?: number;
    validFileFormat?: string[];
    errorInvalidSize?: string;
    errorInvalidFormat?: string;
    onChangeFile?: (value: File) => void;
    onTryAgain?: (value: File) => void;
    onFileCancelled?: (index?: number) => void;
    validate?: (value: File) => boolean;
    message?: string;
}
declare const Chat: ({ id, handelSubmit, isSending, isClear, canSubmit, canAttach, children, chatContentFooter, footer, state, forceDisplayError, file, validFileSize, validFileFormat, errorInvalidFormat, errorInvalidSize, onChangeFile, onTryAgain, onFileCancelled, validate, message, ...rest }: ChatProps) => JSX.Element;
export default Chat;
