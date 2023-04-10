import * as React from 'react';

import './styles.scss';

export type ListFooterProps = React.HTMLProps<HTMLDivElement>;

const ListFooter: React.FC<ListFooterProps> = (props: ListFooterProps) => (
  <div className="list-footer" {...props} />
);

export default ListFooter;
