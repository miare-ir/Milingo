import * as React from 'react';

import './styles.scss';

export interface ListProps extends React.HTMLProps<HTMLUListElement> {
  large?: boolean;
}

const List: React.FC<ListProps> = (props: ListProps) => (
  <ul className="list" {...props} />
);

export default List;
