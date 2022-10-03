import * as React from 'react';

import Messages from '.';
import issues from '../accordion/fixtures/issue';
import Message from './message';

export default {
  title: 'Messages',

  decorators: [
    story => <div className="story-container messages-story">{story()}</div>,
  ],
};

export const Default = (): JSX.Element => {
  const issue = issues[0];
  const [isOpen, setIsOpen] = React.useState(true);

  const handelSubmitMessage = (id: number, message: string): void => {
    alert(`پیام ${message} برای ایدی ${id} ارسال شد`);
  };

  return (
    <Messages
      id={issue.id}
      title={issue.problem.title}
      reporter_type={issue.reporter_type}
      username={
        issue.reported_by.first_name + ' ' + issue.reported_by.last_name
      }
      isOpen={isOpen}
      resolveBtnTitle={'رسیدگی شد'}
      setOpen={() => setIsOpen(!isOpen)}
      onSubmitMessage={handelSubmitMessage}
      isSendingMessage={false}
      canSubmitMessage={true}
      isResolved={false}>
      {issue.messages.map((message, index) => (
        <Message
          id={index}
          key={index}
          message={message.message}
          isRight={message.sender_type === 'staff'}
          created_at={message.created_at}
        />
      ))}
    </Messages>
  );
};

export const WithoutSubmitMessage = (): JSX.Element => {
  const issue = issues[0];
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Messages
      id={issue.id}
      title={issue.problem.title}
      reporter_type={issue.reporter_type}
      username={
        issue.reported_by.first_name + ' ' + issue.reported_by.last_name
      }
      isOpen={isOpen}
      setOpen={() => setIsOpen(!isOpen)}
      canSubmitMessage={false}
      isResolved={false}>
      {issue.messages.map((message, index) => (
        <Message
          id={index}
          key={index}
          message={message.message}
          isRight={message.sender_type === 'staff'}
          created_at={message.created_at}
        />
      ))}
    </Messages>
  );
};

export const WithoutHeader = (): JSX.Element => {
  const issue = issues[0];
  const [isOpen, setIsOpen] = React.useState(true);

  const handelSubmitMessage = (id: number, message: string): void => {
    alert(`پیام ${message} برای ایدی ${id} ارسال شد`);
  };

  return (
    <Messages
      id={issue.id}
      title={issue.problem.title}
      isOpen={isOpen}
      setOpen={() => setIsOpen(!isOpen)}
      isSendingMessage={false}
      resolveBtnTitle={'رسیدگی شد'}
      onSubmitMessage={handelSubmitMessage}
      canSubmitMessage={true}
      isResolved={true}>
      {issue.messages.map((message, index) => (
        <Message
          id={index}
          key={index}
          message={message.message}
          isRight={message.sender_type === 'staff'}
          created_at={message.created_at}
        />
      ))}
    </Messages>
  );
};
