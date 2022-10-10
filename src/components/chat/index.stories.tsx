import * as React from 'react';

import issues from '../../common/fixtures/issue';
import Message from './message';
import Chat from '.';

export default {
  title: 'Chat',

  decorators: [
    story => <div className="story-container chat-story">{story()}</div>,
  ],
};

const issue = issues[0];
const handelSubmitMessage = (id: number, message: string): void => {
  alert(`پیام ${message} برای ایدی ${id} ارسال شد`);
};

const handelResolve = (id: number): void => {
  alert(`ایشیو ${id} بسته شد`);
};

export const Default = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Chat
      chatId={issue.id}
      title={issue.problem.title}
      reporter_type={issue.reporter_type}
      username={
        issue.reported_by.first_name + ' ' + issue.reported_by.last_name
      }
      isOpen={isOpen}
      resolveBtnTitle={'رسیدگی شد'}
      setIsOpen={() => setIsOpen(!isOpen)}
      onSubmitMessage={handelSubmitMessage}
      isSendingMessage={false}
      canSubmitMessage
      hasHeader
      isResolved={false}
      resolve={handelResolve}>
      {issue.messages.map(({ message, id, sender_type, created_at }) => (
        <Message
          id={id}
          key={id}
          message={message}
          isRight={sender_type !== 'staff'}
          created_at={created_at}
        />
      ))}
    </Chat>
  );
};

export const WithoutMessage = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Chat
      chatId={issue.id}
      title={issue.problem.title}
      reporter_type={issue.reporter_type}
      username={
        issue.reported_by.first_name + ' ' + issue.reported_by.last_name
      }
      isOpen={isOpen}
      resolveBtnTitle={'رسیدگی شد'}
      setIsOpen={() => setIsOpen(!isOpen)}
      onSubmitMessage={handelSubmitMessage}
      isSendingMessage={false}
      canSubmitMessage
      hasHeader
      isResolved={false}
      resolve={handelResolve}>
      {[].map(({ message, id, sender_type, created_at }) => (
        <Message
          id={id}
          key={id}
          message={message}
          isRight={sender_type !== 'staff'}
          created_at={created_at}
        />
      ))}
    </Chat>
  );
};

export const WithoutSubmitMessage = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Chat
      chatId={issue.id}
      title={issue.problem.title}
      reporter_type={issue.reporter_type}
      username={
        issue.reported_by.first_name + ' ' + issue.reported_by.last_name
      }
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      canSubmitMessage={false}
      hasHeader
      isResolved={false}>
      {issue.messages.map(({ message, id, sender_type, created_at }) => (
        <Message
          id={id}
          key={id}
          message={message}
          isRight={sender_type === 'staff'}
          created_at={created_at}
        />
      ))}
    </Chat>
  );
};

export const WithoutHeader = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Chat
      chatId={issue.id}
      title={issue.problem.title}
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      isSendingMessage={false}
      resolveBtnTitle={'رسیدگی شد'}
      onSubmitMessage={handelSubmitMessage}
      isResolved>
      {issue.messages.map(({ message, id, sender_type, created_at }) => (
        <Message
          id={id}
          key={id}
          message={message}
          isRight={sender_type === 'staff'}
          created_at={created_at}
        />
      ))}
    </Chat>
  );
};
