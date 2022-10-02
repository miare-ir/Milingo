import * as React from 'react';

import Messages from '.';
import issues from '../accordion/fixtures/issue';

export default {
  title: 'Messages',

  decorators: [
    story => <div className="story-container messages-story">{story()}</div>,
  ],
};

export const Default = (): JSX.Element => {
  const issue = issues[0];
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Messages
      id={issue.id}
      title={issue.problem.title}
      description={issue.description}
      reporter_type={issue.reporter_type}
      username={
        issue.reported_by.first_name + ' ' + issue.reported_by.last_name
      }
      isOpen={isOpen}
      setOpen={() => setIsOpen(!isOpen)}>
      <p style={{ padding: '16px' }}>پیامی چیزی...</p>
    </Messages>
  );
};
