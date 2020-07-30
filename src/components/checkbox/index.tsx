import * as React from 'react';
import * as classNames from 'classnames';

import Loader from '../loader';

import './styles.scss';

export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  loading?: boolean;
}

export interface CheckboxState {
  checked: boolean;
}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  private checkboxElement: HTMLElement;

  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked || false,
    };
  }

  static getDerivedStateFromProps(
    nextProps: CheckboxProps,
    prevState: CheckboxState,
  ): {} {
    if (
      typeof nextProps.checked !== 'undefined' &&
      nextProps.checked !== prevState.checked
    ) {
      return { checked: nextProps.checked };
    }
    return null;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    if (!this.props.disabled) {
      this.setState({ checked: e.target.checked });

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  };

  render(): React.ReactNode {
    const {
      children,
      disabled,
      className,
      onChange,
      checked,
      loading,
      ...props
    }: CheckboxProps = this.props;

    const checkClassName = classNames('checkbox', className, {
      checked: this.state.checked,
      disabled: this.props.disabled,
    });

    return (
      <div
        className="checkbox-container"
        onClick={e => {
          this.checkboxElement.click();
        }}>
        <button className={checkClassName}>
          <input
            type="checkbox"
            checked={this.state.checked}
            value={!!this.state.checked + ''}
            onChange={this.handleChange}
            ref={input => (this.checkboxElement = input)}
            {...props}
          />
          <span className="check">
            {this.props.loading ? (
              <Loader disabled />
            ) : (
              <span className="icon material-icons">check</span>
            )}
          </span>
          {children && <label htmlFor={props.id}>{children}</label>}
        </button>
      </div>
    );
  }
}

export default Checkbox;
