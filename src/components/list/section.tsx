import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface ListSectionProps extends React.HTMLProps<HTMLUListElement> {
  large?: boolean;
  seperator?: boolean;
}

const ListSection: React.SFC<ListSectionProps> = ({
  large,
  seperator,
  ...props
}: ListSectionProps) => (
  <ul className={classNames('list-section', { large, seperator })} {...props} />
);

export default ListSection;
