import * as React from 'react';

import Accordion from '.';

export default {
  title: 'Accordion',

  decorators: [
    story => <div className="story-container accordion-story">{story()}</div>,
  ],
};

export const AccordionDefault = (): JSX.Element => (
  <Accordion title={'لیست ایشیو ها'} count={1}>
    <p>پیامی چیزی...</p>
  </Accordion>
);

AccordionDefault.story = {
  name: 'Default',
};
