import * as React from 'react';

import sendIcon from '../../assets/icon/send.svg';
import disabledSendIcon from '../../assets/icon/disabled-send.svg';
import attachIcon from '../../assets/icon/attachment.svg';
import disabledAttachIcon from '../../assets/icon/attachment-disable.svg';
import usePrevious from '../../common/hooks/use-previous';
import Button from '../button';
import Textarea from '../textarea';
import AttachmentFile, { States } from './chat-attachment';
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
}

const SubmitForm = ({
  id,
  isSending,
  onSubmit,
  canAttach,
  onChangeFile,
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
  file,
  isClear = false,
}: SubmitFormProps): JSX.Element => {
  const [message, setMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isFileSelect, setIsFileSelect] = React.useState(!!file);
  const [touched, setTouched] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File>(null);
  const isSendButtonDisabled =
    (!message && !isFileSelect) ||
    isSending ||
    (!!state && !!state.message) ||
    !!errorMessage;
  const [attachment, setAttachment] = React.useState<File>(null);
  const prevFile = usePrevious(file);

  const isSizeInvalid = (file: File): boolean =>
    validFileSize && file.size > validFileSize;
  const isFormatInvalid = (file: File): boolean =>
    validFileFormat && !validFileFormat.some(format => file.type === format);

  const handleSubmitMessage = (
    event?: React.FormEvent<HTMLFormElement>,
  ): void => {
    event?.preventDefault();
    if (!isSendButtonDisabled) {
      onSubmit(id, message, attachment);
    }
  };

  React.useEffect(() => {
    if (isClear) {
      setAttachment(null);
      setIsFileSelect(false);
      setMessage('');
    }
  }, [isClear, attachment]);

  React.useEffect(()=>{
    if(prevFile !== file) {
      setSelectedFile(file)
    }
  },[file])

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

  const handleFileChange = (value: File): void => {
    if (value) {
      setIsFileSelect(true);
      if (isSizeInvalid(value)) {
        setErrorMessage(
          errorInvalidSize || 'حجم فایل ارسالی شما بیش از حد مجاز است.',
        );
      } else if (isFormatInvalid(value)) {
        setErrorMessage(errorInvalidFormat || 'فرمت فایل ارسالی مناسب نیست');
      } else {
        setErrorMessage('');
      }
    } else {
      setIsFileSelect(false);
    }
    setAttachment(value);
    if (onChangeFile) {
      onChangeFile(value);
    }
  };

  const handleValidate = (value: File): boolean => {
    if (isSizeInvalid(value) || isFormatInvalid(value)) {
      return false;
    }
    if (validate) {
      return validate(value);
    }
    return true;
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newFile = Array.from(event.target.files)[0];
    setTouched(true);
    setSelectedFile(newFile);
    handleFileChange(newFile);
  };

  return (
    <>
      <form onSubmit={handleSubmitMessage} className="submit-form">
        <div className='chat-actions'>
          {isFileSelect && selectedFile ? (<AttachmentFile 
            displayClear
            forceDisplayError={forceDisplayError}
            onChangeFile={handleFileChange}
            onFileCancelled={onFileCancelled}
            state={{ ...state, message: errorMessage || state?.message }}
            onTryAgain={onTryAgain}
            validate={handleValidate}
            isClear={isClear}
            touched={touched} disabled={!!message} file={selectedFile} setFile={setSelectedFile}></AttachmentFile>) : (
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
          <div className='chat-footer'>
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
            <div className='chat-footer-elements'>
              {canAttach && 
                <Button className='attach-button' disabled={!!message} primary link>
                  <img
                    className="send-icon"
                    src={message ? disabledAttachIcon : attachIcon}
                  />
                  <input
                    disabled={!!message}
                    type="file"
                    onChange={handleInput}
                    value=""
                  />
                </Button>
              }
              {footer}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SubmitForm;
