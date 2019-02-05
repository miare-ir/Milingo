import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface GroupButtonProps extends React.HTMLProps<HTMLDivElement> {}

interface GroupButtonState {
  selected: string;
}

class GroupButtonComponent extends React.Component<
  GroupButtonProps,
  GroupButtonState
> {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, children, ...props } = this.props;
    const buttonGroupClass = classNames('button-group-container', className);

    return (
      <div className={buttonGroupClass} {...props}>
        {children}
      </div>
    );
  }
}

export default GroupButtonComponent;
