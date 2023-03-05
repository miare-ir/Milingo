import * as React from 'react';

import * as classNames from 'classnames';

import { States } from '../file-input';
import './styles.scss';
import SubmitForm from './submit-form';

export interface ChatProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  id: number;
  handelSubmit?: (id: number, text: string) => void;
  isSending?: boolean;
  canSubmit?: boolean;
  canAttach?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  state?: States;
  files?: File[];
  forceDisplayError?: boolean;
  onChangeFiles?: (value: File[]) => void;
  onTryAgain?: (value: File[]) => void;
  validate?: (value: File[]) => boolean;
}

const Chat = ({
  id,
  handelSubmit,
  isSending,
  canSubmit,
  canAttach,
  children,
  footer,
  state,
  forceDisplayError,
  files,
  onChangeFiles,
  onTryAgain,
  validate,
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
          files={files}
          onChangeFiles={onChangeFiles}
          onTryAgain={onTryAgain}
          validate={validate}
          forceDisplayError={forceDisplayError}
        />
      )}
      {!canAttach && <div className="chat-footer">{footer}</div>}
    </div>
  );
};

export default Chat;
