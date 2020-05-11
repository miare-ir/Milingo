import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export type CheckboxProps = React.HTMLProps<HTMLInputElement>;

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

  componentWillReceiveProps(nextProps: CheckboxProps) {
    if (
      typeof nextProps.checked !== 'undefined' &&
      this.state.checked !== nextProps.checked
    ) {
      this.setState({ checked: nextProps.checked });
    }
  }

  handleChange = e => {
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
      ...props
    }: CheckboxProps = this.props;

    const checkClassName = classNames('checkbox', className, {
      checked: this.state.checked,
      disabled: this.props.disabled,
    });

    return (
      <div className="checkbox-container">
        <button
          className={checkClassName}
          onClick={e => {
            this.checkboxElement.click();
          }}>
          <input
            type="checkbox"
            checked={this.state.checked}
            value={!!this.state.checked + ''}
            onChange={this.handleChange}
            ref={input => (this.checkboxElement = input)}
            {...props}
          />
          <span className="check">
            <span className="icon material-icons">check</span>
          </span>
          {children && <label htmlFor={props.id}>{children}</label>}
        </button>
      </div>
    );
  }
}

export default Checkbox;
