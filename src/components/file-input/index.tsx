import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  displayClear?: boolean;
  errorMessage?: string;
  forceDisplayError?: boolean;
  validate?: (value: boolean | string | number) => boolean;
  pre?: string;
  title?: string;
}

export interface InputState {
  touched: boolean;
  value: any;
}

class File extends React.Component<InputProps, InputState> {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
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
  }

  clear = () => {
    const valueType = typeof this.state.value;
    this.setState({ value: valueType === null });
  }

  render() {
    if (this.props.errorMessage && !this.props.validate) {
      throw new TypeError(
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
      ...props,
    } = this.props;

    const hasError = (
      errorMessage &&
      (forceDisplayError || this.state.touched) &&
      !validate(this.state.value)
    );

    const className = classNames('file-container', {
      error: hasError,
    });

    return (
      <div className={className}>
        <div className="file-div">
          <div className="file-name">
            <span>
              slamsdgsfgasfgsdfgsfdgsdfgsdfgsdfgsffgasfgsdfgsef
            </span>
            <i
              className="material-icons clear"
              onClick={this.clear}>
              close
            </i>
          </div>
          <label>
            افزودن فایل
            <input
              type='file'
              value={this.state.value}
              onInput={this.handleInput}
              {...props} />
          </label>
        </div>
        {hasError && (
          <span className="error">{errorMessage}</span>
        )}
      </div>
    );
  }
}

export default File;
