import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface CounterButtonProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

class CounterButton extends React.Component<CounterButtonProps, {}> {
  handleDecrease() {
    if (this.props.onDecrease) {
      this.props.onDecrease();
    }
  }

  handleIncrease() {
    if (this.props.onIncrease) {
      this.props.onIncrease();
    }
  }

  render() {
    const { className, onIncrease, onDecrease, ...props } = this.props;

    const componentClassname = classNames('counter-button-wrapper', className);

    return (
      <div className={componentClassname} {...props}>
        <div
          className="button-wrapper"
          onClick={this.handleIncrease.bind(this)}>
          <span className="icon material-icons">add</span>
        </div>
        <div
          className="button-wrapper"
          onClick={this.handleDecrease.bind(this)}>
          <span className="icon material-icons">remove</span>
        </div>
      </div>
    );
  }
}

export default CounterButton;
