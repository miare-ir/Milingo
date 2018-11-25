import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface CheckboxProps extends React.HTMLProps<HTMLButtonElement> {}

export interface CheckboxState {
  checked: boolean;
}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
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

  handleChange = (e, toggle: boolean = false) => {
    e.preventDefault();
    e.stopPropagation();

    if (!this.props.disabled) {
      if (toggle) {
        this.setState({ checked: !this.state.checked });
      } else {
        this.setState({ checked: e.target.checked });
      }

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  };

  render() {
    const {
      children,
      disabled,
      className,
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
          {...props}
          onClick={e => {
            this.handleChange(e, true);

            if (this.props.onClick) {
              this.props.onClick(e);
            }
          }}>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
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
