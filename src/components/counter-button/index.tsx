import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface CounterButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
}

class CounterButton extends React.Component<CounterButtonProps, {}> {
  render() {
    const { className } = this.props;
    const componentClassname = classNames('counter-button-wrapper', className);
    return (
      <div className={componentClassname}>
        <div className="button-wrapper">
          <span className="icon material-icons">add</span>
        </div>
        <div className="button-wrapper">
          <span className="icon material-icons">remove</span>
        </div>
      </div>
    );
  }
}

export default CounterButton;
