import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {}

class Radio extends React.Component<RadioProps> {

  handleChange = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.onClick) {
      this.props.onChange(e);
    }

  }

  render () {
    const {
      children,
      disabled,
      name,
      ...props,
    }: RadioProps = this.props;

    const checkClassName = classNames('radio-btn', {
      checked: this.props.checked,
      disabled: this.props.disabled,
    });

    return (
      <div className="radio-container">
        <div className={checkClassName}>
          <input
            type="radio"
            name={name}
            checked={props.checked}
            onChange={this.handleChange}
            disabled={this.props.disabled}
            />
          <span className="radio">
            <span className="icon"></span>
          </span>
          {children && (
            <label htmlFor={props.id}>{children}</label>
          )}
        </div>
      </div>
    );
  }
}

export default Radio;
