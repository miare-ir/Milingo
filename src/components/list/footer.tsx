import * as React from 'react';

import './styles.scss';

export interface ListFooterProps extends React.HTMLProps<HTMLDivElement> {}

const ListFooter: React.SFC<ListFooterProps> = (props: ListFooterProps) => (
  <div className="list-footer" {...props} />
);

export default ListFooter;
