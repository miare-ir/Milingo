import * as React from 'react';

import Accordion from '.';
import List from './list';
import issues from './fixtures/issue';

export default {
  title: 'Accordion',

  decorators: [
    story => <div className="story-container accordion-story">{story()}</div>,
  ],
};

export const Default = (): JSX.Element => (
  <Accordion title={'تیتر'}>
    <p style={{ padding: '16px' }}>پیامی چیزی...</p>
  </Accordion>
);

export const AccordionList = (): JSX.Element => (
  <Accordion className="issue-accordion" title={'لیست ایشیو ها'} count={3}>
    {issues.map(issue => (
      <List
        key={issue.id}
        id={issue.id}
        title={issue.problem.title}
        description={issue.description}
        timer={33}
        isResolved={!!issue.resolved_at}
        reporter_type={issue.reporter_type}></List>
    ))}
  </Accordion>
);
