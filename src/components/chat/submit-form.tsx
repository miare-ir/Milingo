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

const SubmitForm = (props: SubmitFormProps): JSX.Element => {
  const [message, setMessage] = React.useState('');
  const isSendButtonDisabled = !message || props.isSending;

  const handleSubmitMessage = (
    event?: React.FormEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();
    if (!isSendButtonDisabled) {
      props.onSubmit?.(props.id, message.trim());
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
    props.resolve(props.id);
  };

  return (
    <form onSubmit={handleSubmitMessage} className="submit-form">
      <Textarea
        rows={1}
        disabled={props.isSending}
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
          {props.isSending ? <Loader /> : 'ارسال'}
          <img src={isSendButtonDisabled ? disabledSendIcon : sendIcon} />
        </Button>
        {!props.isResolved && (
          <Button
            link
            tiny
            disabled={props?.isSending}
            onClick={handelResolve}
            className="resolve-button">
            {props.isSending ? <Loader /> : props.resolveBtnTitle}
          </Button>
        )}
      </div>
    </form>
  );
};

export default SubmitForm;
