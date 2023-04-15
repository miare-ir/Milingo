import * as React from 'react';
import { States } from '../file-input';
import './styles.scss';
export interface SubmitFormProps {
    id: number;
    isSending?: boolean;
    canAttach?: boolean;
    onSubmit: (id: number, message: string, attachment?: File) => void;
    onChangeFiles?: (value: File[]) => void;
    onTryAgain?: (value: File[]) => void;
    onFileCancelled?: (index?: number) => void;
    validate?: (value: File[]) => boolean;
    footer?: React.ReactNode;
    state?: States;
    forceDisplayError?: boolean;
    files?: File[];
    isClear?: boolean;
    validFileSize?: number;
    validFileFormat?: string[];
    errorInvalidSize?: string;
    errorInvalidFormat?: string;
}
declare const SubmitForm: ({ id, isSending, onSubmit, canAttach, onChangeFiles, onTryAgain, onFileCancelled, validate, validFileSize, validFileFormat, errorInvalidSize, errorInvalidFormat, footer, state, forceDisplayError, files, isClear, }: SubmitFormProps) => JSX.Element;
export default SubmitForm;
