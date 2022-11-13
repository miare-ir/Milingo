import * as React from 'react';

import * as classnames from 'classnames';

import Button, { ButtonProps } from '../button';
import Image, { ImageProps } from '../image';
import Loader from '../loader';
import FileInput, { FileInputProps } from '../file-input';
import UploadHint, { UploadHintProps } from './upload-hint';

import Img from '../../common/utils/image';

import './styles.scss';

export interface FileInputWrapperProps extends Omit<FileInputProps, 'ref'> {
  wrapperTitle?: string;
  imageProps?: ImageProps;
  description?: string;
  image?: string;
  uploadFileText?: string;
  buttonProps?: Omit<ButtonProps, 'ref' | 'children'>;
  maxFileSize?: number;
  fileName?: string;
  decreaseImageSizeSteps?: number;
  onRemoveImage?: () => void;
  onImageChange?: (image: File) => void;
  disabled?: boolean;
  hint?: Omit<
    UploadHintProps,
    'isHintModalOpen' | 'setIsHintModalOpen' | 'onSelect'
  >;
}

const FileInputWrapper: React.FC<FileInputWrapperProps> = ({
  wrapperTitle,
  description,
  hint,
  image,
  buttonProps,
  uploadFileText = 'بارگذاری عکس',
  maxFileSize = 10 * 1000 * 1000, // 10 Mb
  decreaseImageSizeSteps = 500,
  onRemoveImage,
  onImageChange,
  fileName,
  disabled,
  imageProps,
  ...fileInputProps
}: FileInputWrapperProps): JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [isHintModalOpen, setIsHintModalOpen] = React.useState(false);
  const [isResizing, setIsResizing] = React.useState(false);
  const [imagePath, setImagePath] = React.useState<string | null>(image);
  const [imageName, setImageName] = React.useState(fileName);

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

  const resizeImage = (files: File[]): void => {
    if (files[0]) {
      setIsResizing(true);
      setIsHintModalOpen(false);
      Img.decreaseToFixedWeight(
        files[0],
        maxFileSize,
        decreaseImageSizeSteps,
      ).then(compressed => {
        setIsResizing(false);
        setImagePath(compressed.image);
        onImageChange?.(compressed.file);
        setImageName(compressed.file.name);
      });
    }
  };

  const removeImage = (): void => {
    setImagePath(null);
    onRemoveImage?.();
  };

  return (
    <>
      {hint && (
        <UploadHint
          {...hint}
          isHintModalOpen={isHintModalOpen}
          setIsHintModalOpen={setIsHintModalOpen}
          onSelect={openFileDialog}
        />
      )}

      <div className="file-input-wrapper">
        {wrapperTitle && <h4 className="wrapper-title">{wrapperTitle}</h4>}
        {description && <h4 className="wrapper-description">{description}</h4>}

        <div className="uploader-container">
          {imagePath && !progressState.loading ? (
            <div className="image-preview">
              <Image {...imageProps} src={imagePath} className="image" />

              <div className="image-info">
                <p className="image-name">{imageName}</p>
                <span
                  onClick={removeImage}
                  className="material-icons remove-image-button">
                  close
                </span>
              </div>
            </div>
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
              onClick={openFileDialog}>
              {isResizing ? <Loader primary /> : imagePath ? 'تغییر' : 'انتخاب'}
            </Button>
          )}

          <FileInput
            {...fileInputProps}
            className={fileInputClasses}
            files={[new File([''], fileName)]}
            inputRef={inputRef}
            onChangeFiles={resizeImage}
          />
        </div>
      </div>
    </>
  );
};

export default FileInputWrapper;
