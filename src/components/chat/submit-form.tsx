import * as React from 'react';

import sendIcon from '../../assets/icon/send.svg';
import disabledSendIcon from '../../assets/icon/disabled-send.svg';
import Button from '../button';
import Textarea from '../textarea';
import './styles.scss';

export interface SubmitFormProps {
  id: number;
  isSending?: boolean;
  onSubmit: (id: number, message: string) => void;
}

const SubmitForm = ({
  id,
  isSending,
  onSubmit,
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
  ): void => setMessage(event.target.value);

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
      <Button
        type="submit"
        link
        tiny
        disabled={isSendButtonDisabled}
        className="send-button">
        <img src={isSendButtonDisabled ? disabledSendIcon : sendIcon} />
      </Button>
    </form>
  );
};

export default SubmitForm;
