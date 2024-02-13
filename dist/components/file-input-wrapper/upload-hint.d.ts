import * as React from 'react';
import { ModalProps } from '../modal';
export interface UploadHintProps {
    children?: React.ReactNode;
    title?: string;
    cancelText?: string;
    selectText?: string;
    isHintModalOpen: boolean;
    setIsHintModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onSelect: () => void;
    modalProps?: ModalProps;
}
declare const UploadHint: React.FC<UploadHintProps>;
export default UploadHint;
