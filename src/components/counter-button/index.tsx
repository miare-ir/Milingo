import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface CounterButtonProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onCountUpdate?: (newCount: number) => {};
  acceptNegative?: boolean;
  startValue?: number;
}

export interface CounterButtonStates {
  count: number;
}

class CounterButton extends React.Component<
  CounterButtonProps,
  CounterButtonStates
> {
  state = {
    count: 1,
  };

  componentDidMount() {
    if (this.props.startValue) {
      this.setState({ count: this.props.startValue });
    }
  }

  updateCount(count) {
    this.setState({ count });
    if (this.props.onCountUpdate) {
      this.props.onCountUpdate(count);
    }
  }

  handleDecrease() {
    if (!this.props.acceptNegative && this.state.count === 0) {
      return;
    }

    const count = this.state.count - 1;
    this.updateCount(count);

    if (this.props.onDecrease) {
      this.props.onDecrease();
    }
  }

  handleIncrease() {
    const count = this.state.count + 1;
    this.updateCount(count);

    if (this.props.onIncrease) {
      this.props.onIncrease();
    }
  }

  render() {
    const { className, ...props } = this.props;
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
