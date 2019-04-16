import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  displayClear?: boolean;
  onClear?: () => void;
  errorMessage?: string;
  forceDisplayError?: boolean;
  validate?: (value: boolean | string | number) => boolean;
  pre?: string;
  title?: string;
  ltr?: boolean;
  extraTitle?: JSX.Element | string;
  small?: boolean;
}

export interface InputState {
  touched: boolean;
  value: any;
  isFocused: boolean;
}

class Input extends React.Component<InputProps, InputState> {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
      isFocused: false,
      value: props.value || '',
    };
  }

  componentWillReceiveProps(nextProps: InputProps) {
    if (
      nextProps.value !== this.props.value &&
      nextProps.value !== this.state.value
    ) {
      this.setState({ value: nextProps.value });
    }
  }

  handleInput = e => {
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

  clear = () => {
    const valueType = typeof this.state.value;

    this.setState({
      value: valueType === 'boolean' ? false : '',
      touched: false,
    });

    if (this.props.onClear) {
      this.props.onClear();
    }
  };

  handleFocus(e) {
    this.setState({ isFocused: true });

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  handleBlur(e) {
    this.setState({ isFocused: false });

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  render() {
    if (this.props.errorMessage && !this.props.validate) {
      console.warn(
        'Please provide either both errorMessage and ' +
          'validate or non of them.',
      );
    }

    const {
      errorMessage,
      forceDisplayError,
      validate,
      displayClear,
      title,
      pre,
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
            type={this.props.type || 'text'}
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
        </div>
        {hasError && <span className="error">{errorMessage}</span>}
      </div>
    );
  }
}

export default Input;
