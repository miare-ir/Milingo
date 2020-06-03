import * as React from 'react';
import Tag from '.';

export default {
  title: 'Tag',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Normal = () => (
  <div>
    <Tag style={{ marginLeft: '16px' }}>برچسب</Tag>
    <Tag style={{ marginLeft: '16px' }} primary>
      برچسب
    </Tag>
    <Tag style={{ marginLeft: '16px' }} success>
      برچسب
    </Tag>
    <Tag style={{ marginLeft: '16px' }} warning>
      برچسب
    </Tag>
    <Tag alert>برچسب</Tag>
  </div>
);
