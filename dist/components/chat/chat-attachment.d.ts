import * as React from 'react';
import './styles.scss';
export interface States {
    tryAgain?: boolean;
    message?: string;
    index?: number;
    loading?: boolean;
    progress?: number;
}
export interface AttachmentFileProps {
    displayClear?: boolean;
    file?: File;
    setFile: (file: File) => void;
    forceDisplayError?: boolean;
    onChangeFile?: (value?: File) => void;
    onTryAgain?: (files: File) => void;
    onFileCancelled?: (index?: number) => void;
    state?: States;
    validate?: (value: File) => boolean;
    isClear?: boolean;
    touched: boolean;
    disabled?: boolean;
}
declare const AttachmentFile: React.FC<AttachmentFileProps>;
export default AttachmentFile;
