import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface CollectionProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

class Collection extends React.Component<CollectionProps, {}> {
  render(): React.ReactNode {
    const { className, children, title, ...props } = this.props;
    const componentClassName = classNames('collection-container', className);

    return (
      <div className={componentClassName} {...props}>
        <div className="header">{title}</div>
        <div className="collection">{children}</div>
      </div>
    );
  }
}

export default Collection;
