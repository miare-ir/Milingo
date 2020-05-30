import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface InputProps extends React.HTMLProps<HTMLTextAreaElement> {
  errorMessage?: string;
  forceDisplayError?: boolean;
  validate?: (value: string) => boolean;
  title?: string;
  className?: string;
  value?: string;
}

export interface InputState {
  touched: boolean;
  value: string;
}

class Textarea extends React.Component<InputProps, InputState> {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
      value: props.value || '',
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: InputProps): void {
    if (
      nextProps.value !== this.props.value &&
      nextProps.value !== this.state.value
    ) {
      this.setState({ value: nextProps.value });
    }
  }

  handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (e.target.value !== this.state.value) {
      if (!this.state.touched) {
        this.setState({ touched: true, value: e.target.value });
      } else {
        this.setState({ value: e.target.value });
      }
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render(): React.ReactNode {
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
      title,
      className,
      ...props
    } = this.props;

    const hasError =
      errorMessage &&
      (forceDisplayError || this.state.touched) &&
      !validate(this.state.value);

    const componentClassName = classNames('textarea-container', className, {
      error: hasError,
    });

    return (
      <div className={componentClassName}>
        {title && <label htmlFor={props.id || ''}>{title}</label>}
        <textarea
          cols={this.props.cols}
          rows={this.props.rows}
          value={this.state.value}
          onChange={this.handleInput}
          {...props}
        />
        {hasError && <span className="error">{errorMessage}</span>}
      </div>
    );
  }
}

export default Textarea;
