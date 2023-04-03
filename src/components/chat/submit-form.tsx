import * as React from 'react';

import sendIcon from '../../assets/icon/send.svg';
import disabledSendIcon from '../../assets/icon/disabled-send.svg';
import attachIcon from '../../assets/icon/attachment.svg';
import ReloadIcon from '../../assets/icon/reload.svg';
import Button from '../button';
import Textarea from '../textarea';
import FileInput, { States } from '../file-input';
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

const SubmitForm = ({
  id,
  isSending,
  onSubmit,
  canAttach,
  onChangeFiles,
  onTryAgain,
  onFileCancelled,
  validate,
  validFileSize,
  validFileFormat,
  errorInvalidSize,
  errorInvalidFormat,
  footer,
  state,
  forceDisplayError,
  files,
  isClear = false,
}: SubmitFormProps): JSX.Element => {
  const [message, setMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isFileSelect, setIsFileSelect] = React.useState(files?.length > 0);
  const isSendButtonDisabled =
    (!message && !isFileSelect) ||
    isSending ||
    (!!state && !!state.message) ||
    !!errorMessage;
  const [attachment, setAttachment] = React.useState(null);

  const isSizeInvalid = (file: File): boolean =>
    validFileSize && file.size > validFileSize;
  const isFormatInvalid = (file: File): boolean =>
    validFileFormat && !validFileFormat.some(format => file.type === format);

  const handleSubmitMessage = (
    event?: React.FormEvent<HTMLFormElement>,
  ): void => {
    event?.preventDefault();
    if (!isSendButtonDisabled) {
      onSubmit(id, message.trim(), attachment);
    }
  };

  React.useEffect(() => {
    if (isClear) {
      setAttachment(null);
      setIsFileSelect(false);
      setMessage('');
    }
  }, [isClear, attachment]);

  const handleTextareaKeyDowns = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ): void => {
    if (
      (event.ctrlKey && event.key === 'Enter') ||
      (event.shiftKey && event.key === 'Enter')
    ) {
      handleSubmitMessage();
    }
  };

  const handleTextareaChanges = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => setMessage(event.target.value);

  const handleFileChange = (value: File[]): void => {
    if (value.length > 0) {
      setIsFileSelect(true);
      if (isSizeInvalid(value[0])) {
        setErrorMessage(
          errorInvalidSize || 'حجم فایل ارسالی شما بیش از حد مجاز است.',
        );
      } else if (isFormatInvalid(value[0])) {
        setErrorMessage(errorInvalidFormat || 'فرمت فایل ارسالی مناسب نیست');
      } else {
        setErrorMessage('');
      }
    } else {
      setIsFileSelect(false);
    }
    setAttachment(value);
    if (onChangeFiles) {
      onChangeFiles(value);
    }
  };

  const handleValidate = (value: File[]): boolean => {
    if (isSizeInvalid(value[0]) || isFormatInvalid(value[0])) {
      return false;
    }
    if (validate) {
      return validate(value);
    }
    return true;
  };

  const renderTryAgainIcon = (): JSX.Element => (
    <img className="reload-icon" src={ReloadIcon} />
  );

  return (
    <>
      <form onSubmit={handleSubmitMessage} className="submit-form">
        {!isFileSelect && (
          <Textarea
            autoFocus
            rows={1}
            disabled={isSending}
            value={message}
            placeholder="پیام خود را وارد کنید"
            onChange={handleTextareaChanges}
            onKeyDown={handleTextareaKeyDowns}
          />
        )}
        <Button
          type="submit"
          link
          tiny
          disabled={isSendButtonDisabled}
          className="send-button">
          <img
            className="send-icon"
            src={isSendButtonDisabled ? disabledSendIcon : sendIcon}
          />
        </Button>
      </form>
      {canAttach && (
        <div className="chat-footer">
          {footer}
          <FileInput
            displayClear
            forceDisplayError={forceDisplayError}
            files={files}
            onChangeFiles={handleFileChange}
            onFileCancelled={onFileCancelled}
            states={{ 0: { ...state, message: errorMessage || state.message } }}
            onTryAgain={onTryAgain}
            validate={handleValidate}
            accept={validFileFormat && String(validFileFormat)}
            isClear={isClear}
            tryAgainText={renderTryAgainIcon()}>
            <img className="attach-icon" src={attachIcon} />
          </FileInput>
        </div>
      )}
    </>
  );
};

export default SubmitForm;
