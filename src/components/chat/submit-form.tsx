import * as React from 'react';

import sendIcon from '../../assets/icon/send.svg';
import disabledSendIcon from '../../assets/icon/disabledsend.svg';
import Button from '../button';
import Textarea from '../textarea';
import Loader from '../loader';
import './styles.scss';

export interface SubmitFormProps {
  id: number;
  isSending: boolean;
  onSubmit: (id: number, message: string) => void;
  resolve: (id: number) => void;
  resolveBtnTitle: string;
  isResolved: boolean;
}

const SubmitForm = ({
  id,
  isSending,
  onSubmit,
  resolve,
  resolveBtnTitle,
  isResolved,
}: SubmitFormProps): JSX.Element => {
  const [message, setMessage] = React.useState('');
  const isSendButtonDisabled = !message || isSending;

  const handleSubmitMessage = (
    event?: React.FormEvent<HTMLFormElement>,
  ): void => {
    event?.preventDefault();
    if (!isSendButtonDisabled) {
      onSubmit(id, message.trim());
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
  ): void => {
    setMessage(event.target.value);
  };

  const handelResolve = (): void => {
    resolve(id);
  };

  return (
    <form onSubmit={handleSubmitMessage} className="submit-form">
      <Textarea
        rows={1}
        disabled={isSending}
        value={message}
        placeholder="پیام خود را وارد کنید"
        onChange={handleTextareaChanges}
        onKeyDown={handleTextareaKeyDowns}
      />
      <div className="chat-footer">
        <Button
          type="submit"
          link
          tiny
          disabled={isSendButtonDisabled}
          className="send-button">
          {isSending ? <Loader /> : 'ارسال'}
          <img src={isSendButtonDisabled ? disabledSendIcon : sendIcon} />
        </Button>
        {!isResolved && (
          <Button
            link
            tiny
            disabled={isSending}
            onClick={handelResolve}
            className="resolve-button">
            {isSending ? <Loader /> : resolveBtnTitle}
          </Button>
        )}
      </div>
    </form>
  );
};

export default SubmitForm;
