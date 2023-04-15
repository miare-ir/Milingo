import * as React from 'react';
import { States } from '../file-input';
import './styles.scss';
export interface ChatProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
    id: number;
    handelSubmit?: (id: number, text: string) => void;
    isSending?: boolean;
    isClear?: boolean;
    canSubmit?: boolean;
    canAttach?: boolean;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    state?: States;
    files?: File[];
    forceDisplayError?: boolean;
    validFileSize?: number;
    validFileFormat?: string[];
    errorInvalidSize?: string;
    errorInvalidFormat?: string;
    onChangeFiles?: (value: File[]) => void;
    onTryAgain?: (value: File[]) => void;
    onFileCancelled?: (index?: number) => void;
    validate?: (value: File[]) => boolean;
}
declare const Chat: ({ id, handelSubmit, isSending, isClear, canSubmit, canAttach, children, footer, state, forceDisplayError, files, validFileSize, validFileFormat, errorInvalidFormat, errorInvalidSize, onChangeFiles, onTryAgain, onFileCancelled, validate, ...rest }: ChatProps) => JSX.Element;
export default Chat;
