import * as React from 'react';
import { States } from './chat-attachment';
import './styles.scss';
export interface SubmitFormProps {
    id: number;
    isSending?: boolean;
    canAttach?: boolean;
    onSubmit: (id: number, message: string, attachment?: File) => void;
    onChangeFile?: (value: File) => void;
    onTryAgain?: (value: File) => void;
    onFileCancelled?: (index?: number) => void;
    validate?: (value: File) => boolean;
    footer?: React.ReactNode;
    state?: States;
    forceDisplayError?: boolean;
    file?: File;
    isClear?: boolean;
    validFileSize?: number;
    validFileFormat?: string[];
    errorInvalidSize?: string;
    errorInvalidFormat?: string;
    preMessage?: string;
}
declare const SubmitForm: ({ id, isSending, onSubmit, canAttach, onChangeFile, onTryAgain, onFileCancelled, validate, validFileSize, validFileFormat, errorInvalidSize, errorInvalidFormat, footer, state, forceDisplayError, file, isClear, preMessage, }: SubmitFormProps) => JSX.Element;
export default SubmitForm;
