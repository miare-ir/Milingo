import * as React from 'react';
import * as PropTypes from 'prop-types';

import './styles.scss';

export interface ToggleButtonProps extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  onToggle: () => void;
  disabled?: boolean;
  loading?: boolean;
  checked: boolean;
  large?: boolean;
  ltr?: boolean;
  classNames?: string;
}

const ToggleButton = (props: ToggleButtonProps): JSX.Element => {
  const handleOnToggle = (): void => {
    if (!(props.loading || props.disabled)) {
      props.onToggle();
    }
  };

  return (
    <div className={`toggle-button-container ${props.ltr ? 'ltr' : ''}`}>
      <label
        className={`toggle-button ${props.classNames || ''} ${
          props.large ? 'large' : ''
        }`}
        htmlFor={props.name}>
        <input
          disabled={props.disabled}
          className={`${props.loading ? 'loading' : ''}`}
          type="checkbox"
          name={props.name}
          id={props.name}
          checked={props.checked}
        />
        <div onClick={handleOnToggle} className="slider" />
      </label>
      {props.label && (
        <p
          className={`label ${props.large ? 'large' : ''} ${
            props.ltr ? 'ltr' : ''
          }`}>
          {props.label}
        </p>
      )}
    </div>
  );
};

ToggleButton.propTypes = {
  large: PropTypes.bool,
  ltr: PropTypes.bool,
  label: PropTypes.string,
};

export default ToggleButton;
