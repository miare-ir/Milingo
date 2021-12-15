import * as React from 'react';

import './styles.scss';

export interface ToggleButtonProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  onToggle: () => void;
  disabled?: boolean;
  loading?: boolean;
  checked: boolean;
  large?: boolean;
  classNames?: string;
}

const ToggleButton = (props: ToggleButtonProps): JSX.Element => (
  <div className="toggle-button-container">
    <label
      className={`toggle-button ${props.classNames || ''} ${
        props.large ? 'large' : ''
      }`}
      htmlFor={props.name}>
      <input
        disabled={props.disabled || props.loading}
        className={`${props.loading ? 'loading' : ''}`}
        type="checkbox"
        name={props.name}
        id={props.name}
        checked={props.checked}
        onChange={props.onToggle}
      />
      <div className="slider" />
    </label>

    {props.label && (
      <p className={`label ${props.large ? 'large' : ''}`}>{props.label}</p>
    )}
  </div>
);

export default ToggleButton;
