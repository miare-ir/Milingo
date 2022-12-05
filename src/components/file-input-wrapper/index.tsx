import * as React from 'react';

import * as classnames from 'classnames';

import Button, { ButtonProps } from '../button';
import Image, { ImageProps } from '../image';
import Loader from '../loader';
import FileInput, { FileInputProps } from '../file-input';
import UploadHint, { UploadHintProps } from './upload-hint';
import { ModalProps } from '../modal';

import Img from '../../common/utils/image';

import './styles.scss';

type FileType = 'image' | 'video';

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
  hint?: Omit<
    UploadHintProps,
    'isHintModalOpen' | 'setIsHintModalOpen' | 'onSelect'
  >;
}

const FileInputWrapper: React.FC<FileInputWrapperProps> = ({
  wrapperTitle,
  description,
  hint,
  defaultFilePath,
  videoProps,
  buttonProps,
  uploadFileText = 'بارگذاری عکس',
  maxFileSize = 10 * 1000 * 1000, // 10 Mb
  decreaseImageSizeSteps = 500,
  onFileChange,
  fileName,
  disabled,
  imageProps,
  uploaderType = 'image',
  hintModalProps,
  containerProps,
  ...fileInputProps
}: FileInputWrapperProps): JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [isHintModalOpen, setIsHintModalOpen] = React.useState(false);
  const [isResizing, setIsResizing] = React.useState(false);
  const [filePath, setFilePath] = React.useState<string | null>(
    defaultFilePath,
  );
  const [previewFileName, setPreviewFileName] = React.useState(fileName);

  const progressState = fileInputProps?.states?.[0] || {
    loading: false,
    progress: 0,
  };

  const fileInputClasses = classnames('uploader-input', {
    visible: !isResizing && progressState.loading,
  });

  const openFileDialog = (): void => {
    if (hint && !isHintModalOpen) {
      setIsHintModalOpen(true);
    } else {
      inputRef.current?.click();
    }
  };

  const handleImage = (file: File): void => {
    setIsResizing(true);
    setIsHintModalOpen(false);
    Img.decreaseToFixedWeight(file, maxFileSize, decreaseImageSizeSteps).then(
      compressed => {
        setIsResizing(false);
        setFilePath(compressed.image);
        onFileChange?.(compressed.file);
        setPreviewFileName(compressed.file.name);
      },
    );
  };

  const handleVideo = (file: File): void => {
    setIsHintModalOpen(false);
    onFileChange?.(file);
  };

  const getFileType = (file: File): FileType =>
    file.type.split('/')[0] as FileType;

  const handleOnFileChange = (files: File[]): void => {
    const file = files[0];
    if (file) {
      const type = getFileType(file);

      switch (type) {
        case 'image': {
          return handleImage(file);
        }
        case 'video': {
          return handleVideo(file);
        }
      }
    }
  };

  React.useEffect(() => {
    setFilePath(defaultFilePath);
  }, [defaultFilePath]);

  React.useEffect(() => {
    setPreviewFileName(fileName);
  }, [fileName]);

  const renderPreview = (): React.ReactNode => {
    switch (uploaderType) {
      case 'image': {
        return (
          <div className="previewer image-preview">
            <Image {...imageProps} src={filePath} className="image" />
            <div className="image-info">
              <p className="image-name">{previewFileName}</p>
            </div>
          </div>
        );
      }

      case 'video': {
        return (
          <div className="previewer video-preview">
            <video className="video" controls {...videoProps} src={filePath} />
          </div>
        );
      }
    }
  };

  return (
    <>
      {hint && (
        <UploadHint
          {...hint}
          isHintModalOpen={isHintModalOpen}
          setIsHintModalOpen={setIsHintModalOpen}
          onSelect={openFileDialog}
          modalProps={hintModalProps}
        />
      )}

      <div
        {...containerProps}
        className={`file-input-wrapper ${containerProps?.className ?? ''}`}>
        {wrapperTitle && <h4 className="wrapper-title">{wrapperTitle}</h4>}
        {description && <h4 className="wrapper-description">{description}</h4>}

        <div className="uploader-container">
          {filePath && !progressState.loading ? (
            renderPreview()
          ) : (
            <div className="uploader-description">
              <span className="material-icons upload-icon">cloud_upload</span>
              <p className="uploader-title">{uploadFileText}</p>
            </div>
          )}

          {!progressState.loading && (
            <Button
              {...buttonProps}
              className="uploader-button"
              disabled={isResizing || disabled}
              type="button"
              onClick={openFileDialog}>
              {isResizing ? <Loader primary /> : filePath ? 'تغییر' : 'انتخاب'}
            </Button>
          )}

          <FileInput
            {...fileInputProps}
            className={fileInputClasses}
            files={[new File([''], fileName)]}
            inputRef={inputRef}
            onChangeFiles={handleOnFileChange}
          />
        </div>
      </div>
    </>
  );
};

export default FileInputWrapper;
