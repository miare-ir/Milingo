import * as React from 'react';

import './styles.scss';

export interface ListTitleProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
}

const ListTitle: React.FC<ListTitleProps> = ({
  title,
  children,
  ...props
}: ListTitleProps) => (
  <div className="list-title" {...props}>
    {title ? title : children}
  </div>
);

export default ListTitle;
