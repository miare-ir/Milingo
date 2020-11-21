import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
}

class Radio extends React.Component<RadioProps, {}> {
  private radioButton: HTMLInputElement;

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (this.props.disabled) {
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render(): React.ReactNode {
    const {
      children,
      className,
      disabled,
      name,
      value,
      onChange,
      ...props
    }: RadioProps = this.props;

    const checkClassName = classNames('radio-btn', className, {
      disabled: this.props.disabled,
    });

    return (
      <div className={checkClassName} onClick={() => this.radioButton.click()}>
        <div className="radio-icon">
          <input
            type="radio"
            name={name}
            id={`${name}${value}`}
            value={value}
            onChange={this.handleChange}
            ref={node => (this.radioButton = node)}
            {...props}
          />
          <label htmlFor={`${name}${value}`} className="radio">
            <span className="icon" />
          </label>
        </div>
        <div className="children-div">{children}</div>
      </div>
    );
  }
}

export default Radio;
