import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

import './styles.scss';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  displayClear?: boolean;
  onClear?: () => void;
  errorMessage?: string;
  forceDisplayError?: boolean;
  validate?: (value: string | string[] | number) => boolean;
  pre?: string;
  icon?: string;
  title?: string;
  ltr?: boolean;
  extraTitle?: JSX.Element | string;
  small?: boolean;
}

export interface InputState {
  touched: boolean;
  value: string | string[] | number;
  isFocused: boolean;
  type: string;
}

const validInputTypes: string[] = ['text', 'number', 'tel'];

class Input extends React.Component<InputProps, InputState> {
  static propTypes = {
    type: PropTypes.oneOf(validInputTypes),
  };

  constructor(props) {
    super(props);

    this.state = {
      touched: false,
      isFocused: false,
      value: props.value || '',
      type: this.props.type || 'text',
    };
  }

  static getDerivedStateFromProps(
    nextProps: InputProps,
    prevState: InputState,
  ): {} {
    if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    }
    return null;
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value !== this.state.value) {
      if (!this.state.touched) {
        this.setState({ touched: true, value: e.target.value });
      } else {
        this.setState({ value: e.target.value });
      }
    }

    if (this.props.onInput) {
      this.props.onInput(e);
    }
  };

  clear = (): void => {
    this.setState({
      value: '',
      touched: false,
    });

    if (this.props.onClear) {
      this.props.onClear();
    }
  };

  handleFocus(e): void {
    this.setState({ isFocused: true });

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  handleBlur(e): void {
    this.setState({ isFocused: false });

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  render(): React.ReactNode {
    if (this.props.errorMessage && !this.props.validate) {
      console.warn(
        'Please provide either both errorMessage and ' +
          'validate or non of them.',
      );
    }

    if (!validInputTypes.includes(this.state.type)) {
      return '';
    }

    const {
      errorMessage,
      forceDisplayError,
      validate,
      displayClear,
      title,
      pre,
      icon,
      ltr,
      onClear,
      className,
      extraTitle,
      small,
      onBlur,
      onFocus,
      disabled,
      ...props
    } = this.props;

    const hasError =
      errorMessage &&
      (forceDisplayError ||
        (this.state.touched && !validate(this.state.value)));

    const componentClassName = classNames('field-container', className, {
      error: hasError,
      small,
      ltr,
    });

    const inputContainerClass = classNames('input-container', {
      focused: this.state.isFocused,
      disabled: this.props.disabled,
    });

    return (
      <div className={componentClassName}>
        <div className="title">
          {extraTitle ? (
            extraTitle
          ) : title ? (
            <label htmlFor={this.props.id || ''}>{title}</label>
          ) : null}
        </div>
        <div className={inputContainerClass}>
          <input
            type={this.state.type}
            value={this.state.value}
            onInput={this.handleInput}
            disabled={disabled}
            onFocus={e => {
              this.handleFocus(e);
            }}
            onBlur={e => {
              this.handleBlur(e);
            }}
            {...props}
          />
          {pre && <pre>{pre}</pre>}
          {!pre && !!this.state.value && displayClear && !disabled && (
            <i className="material-icons clear" onClick={this.clear}>
              add_circle
            </i>
          )}
          {!pre && icon && (
            <span className="icon">
              <img src={icon} alt="" />
            </span>
          )}
        </div>
        {hasError && <span className="error">{errorMessage}</span>}
      </div>
    );
  }
}

export default Input;
