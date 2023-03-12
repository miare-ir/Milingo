import * as React from 'react';

import sendIcon from '../../assets/icon/send.svg';
import disabledSendIcon from '../../assets/icon/disabled-send.svg';
import attachIcon from '../../assets/icon/attachment.svg';
import ReloadIcon from '../../assets/icon/reload.svg';
import usePrevious from '../../common/use-previous';
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
  validate?: (value: File[]) => boolean;
  footer?: React.ReactNode;
  state?: States;
  forceDisplayError?: boolean;
  files?: File[];
}

const SubmitForm = ({
  id,
  isSending,
  onSubmit,
  canAttach,
  onChangeFiles,
  onTryAgain,
  validate,
  footer,
  state,
  forceDisplayError,
  files,
}: SubmitFormProps): JSX.Element => {
  const [message, setMessage] = React.useState('');
  const [isFileSelect, setIsFileSelect] = React.useState(files?.length > 0);
  const prevIsSending = usePrevious(isSending);
  const isSendButtonDisabled =
    (!message && !isFileSelect) || isSending || forceDisplayError;
  const [attachment, setAttachment] = React.useState(null);

  React.useEffect(() => {
    if (prevIsSending && !isSending) {
      setMessage('');
      setIsFileSelect(false);
    }
  }, [isSending]);

  const handleSubmitMessage = (
    event?: React.FormEvent<HTMLFormElement>,
  ): void => {
    event?.preventDefault();
    if (!isSendButtonDisabled) {
      onSubmit(id, message.trim(), attachment);
    }
  };

  const handleTextareaKeyDowns = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ): void => {
    if (event.ctrlKey && event.key === 'Enter') {
      handleSubmitMessage();
    }
  };

  const handleTextareaChanges = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => setMessage(event.target.value);

  const handleFileChange = (value: File[]): void => {
    if (value.length > 0) {
      setIsFileSelect(true);
    } else {
      setIsFileSelect(false);
    }
    setAttachment(value);
    if (onChangeFiles) {
      onChangeFiles(value);
    }
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
            displayClear={!isSending}
            forceDisplayError={forceDisplayError}
            files={files}
            onChangeFiles={handleFileChange}
            states={{ 0: state }}
            onTryAgain={onTryAgain}
            disabled={isSending}
            validate={validate}
            accept="image/*"
            isClear={!isFileSelect}
            tryAgainText={renderTryAgainIcon()}>
            <img className="attach-icon" src={attachIcon} />
          </FileInput>
        </div>
      )}
    </>
  );
};

export default SubmitForm;
