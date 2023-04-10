import * as React from 'react';

import './styles.scss';

export interface TagLineProps {
  children?: string | React.ReactNode;
}

const TagLine: React.FC<TagLineProps> = (props: TagLineProps) => (
  <div className="date-line">{props.children}</div>
);

export default TagLine;
