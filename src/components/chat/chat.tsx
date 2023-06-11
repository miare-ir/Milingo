import * as React from 'react';

import * as classNames from 'classnames';

import { States } from '../file-input';
import './styles.scss';
import SubmitForm from './submit-form';

export interface ChatProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  id: number;
  handelSubmit?: (id: number, text: string, attachment?: File) => void;
  isSending?: boolean;
  isClear?: boolean;
  canSubmit?: boolean;
  canAttach?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  state?: States;
  file?: File;
  forceDisplayError?: boolean;
  validFileSize?: number;
  validFileFormat?: string[];
  errorInvalidSize?: string;
  errorInvalidFormat?: string;
  onChangeFile?: (value: File) => void;
  onTryAgain?: (value: File) => void;
  onFileCancelled?: (index?: number) => void;
  validate?: (value: File) => boolean;
  message?: string;
}

const Chat = ({
  id,
  handelSubmit,
  isSending,
  isClear,
  canSubmit,
  canAttach,
  children,
  footer,
  state,
  forceDisplayError,
  file,
  validFileSize,
  validFileFormat,
  errorInvalidFormat,
  errorInvalidSize,
  onChangeFile,
  onTryAgain,
  onFileCancelled,
  validate,
  message,
  ...rest
}: ChatProps): JSX.Element => {
  const componentClassNames = classNames('chat-container', rest.className);

  return (
    <div {...rest} className={componentClassNames}>
      <div className="chat-content">{children}</div>
      {canSubmit && (
        <SubmitForm
          id={id}
          isSending={isSending}
          onSubmit={handelSubmit}
          canAttach={canAttach}
          footer={footer}
          state={state}
          file={file}
          onChangeFile={onChangeFile}
          onTryAgain={onTryAgain}
          onFileCancelled={onFileCancelled}
          validate={validate}
          forceDisplayError={forceDisplayError}
          isClear={isClear}
          errorInvalidSize={errorInvalidSize}
          errorInvalidFormat={errorInvalidFormat}
          validFileSize={validFileSize}
          validFileFormat={validFileFormat}
          preMessage={message}
        />
      )}
    </div>
  );
};

export default Chat;
