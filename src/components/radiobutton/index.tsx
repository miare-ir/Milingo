import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {}

class Radio extends React.Component<RadioProps> {
  private radioButton: HTMLInputElement;
  handleChange = e => {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.onClick) {
      this.props.onChange(e);
    }
  };

  render() {
    const {
      children,
      className,
      disabled,
      name,
      ...props
    }: RadioProps = this.props;

    const checkClassName = classNames('radio-btn', className, {
      checked: this.props.checked,
      disabled: this.props.disabled,
    });

    return (
      <div className={checkClassName}>
        <input
          type="radio"
          name={name}
          checked={props.checked}
          onChange={this.handleChange}
          disabled={this.props.disabled}
          ref={node => (this.radioButton = node)}
        />
        <span className="radio">
          <span className="icon" />
        </span>
        <div className="children-div" onClick={() => this.radioButton.click()}>
          {children}
        </div>
      </div>
    );
  }
}

export default Radio;
