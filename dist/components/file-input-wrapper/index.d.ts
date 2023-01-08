import * as React from 'react';
import { ButtonProps } from '../button';
import { ImageProps } from '../image';
import { FileInputProps } from '../file-input';
import { UploadHintProps } from './upload-hint';
import { ModalProps } from '../modal';
import './styles.scss';
declare type FileType = 'image' | 'video';
export interface FileInputWrapperProps extends Omit<FileInputProps, 'ref'> {
    wrapperTitle?: string;
    imageProps?: ImageProps;
    videoProps?: React.HTMLAttributes<HTMLVideoElement>;
    description?: string;
    defaultFilePath?: string;
    uploadFileText?: string;
    buttonProps?: Omit<ButtonProps, 'ref' | 'children'>;
    maxFileSize?: number;
    fileName?: string;
    decreaseImageSizeSteps?: number;
    onFileChange?: (file: File) => void;
    uploaderType?: FileType;
    disabled?: boolean;
    hintModalProps?: ModalProps;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    hint?: Omit<UploadHintProps, 'isHintModalOpen' | 'setIsHintModalOpen' | 'onSelect'>;
}
declare const FileInputWrapper: React.FC<FileInputWrapperProps>;
export default FileInputWrapper;
