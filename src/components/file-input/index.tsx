import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../button';

import './styles.scss';

export interface States {
  tryAgain?: boolean;
  message?: string;
  index?: number;
  loading?: boolean;
  progress?: number;
}

export interface StatesDictionary {
  [key: number]: States;
}

export interface FileInputProps extends React.HTMLProps<HTMLInputElement> {
  displayClear?: boolean;
  files?: File[];
  forceDisplayError?: boolean;
  onChangeFiles?: (value: File[]) => void;
  onTryAgain?: (files: File[]) => void;
  pre?: string;
  states?: StatesDictionary;
  title?: string;
  validate?: (value: File[]) => boolean;
  children?: string;
  tryAgainText?: string;
}

export interface FileInputState {
  touched: boolean;
  files: File[];
}

class FileInput extends React.Component<FileInputProps, FileInputState> {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
      files: props.files || null,
    };
  }

  componentDidUpdate(prevProps: FileInputProps): void {
    if (prevProps.files !== this.props.files) {
      this.setState({ files: prevProps.files });
    }
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newFiles = Array.from(e.target.files);

    this.setState({
      touched: true,
      files: this.props.multiple ? this.state.files.concat(newFiles) : newFiles,
    });

    if (this.props.onChangeFiles) {
      this.props.onChangeFiles(
        this.props.multiple ? this.state.files.concat(newFiles) : newFiles,
      );
    }
  };

  clear = (index: number): void => {
    if (this.props.disabled) {
      return;
    }

    this.setState({
      files: this.state.files.filter((_, filterIndex) => index !== filterIndex),
    });

    if (this.props.onChangeFiles) {
      this.props.onChangeFiles(
        this.state.files.filter((_, filterIndex) => index !== filterIndex),
      );
    }
  };

  render(): React.ReactNode {
    const {
      forceDisplayError,
      validate,
      displayClear,
      title,
      pre,
      disabled,
      states,
      children,
      className,
      onChangeFiles,
      ...props
    } = this.props;

    const { files } = this.state;

    const componentClassName = classNames('file-container', className, {
      multiple: this.props.multiple,
    });

    return (
      <div className={componentClassName}>
        <div className="file-div">
          {files &&
            files.length > 0 &&
            files.map((file, index) =>
              this.renderFiles(states && states[index], file, index),
            )}
          <Button disabled={disabled} primary>
            {children ? children : 'افزودن فایل'}
            <input
              disabled={disabled}
              type="file"
              onChange={this.handleInput}
              value=""
              {...props}
            />
          </Button>
        </div>
      </div>
    );
  }

  private renderFiles = (
    state: States,
    file,
    index: number,
  ): React.ReactNode => {
    if (state && state.message && !this.props.validate) {
      throw new TypeError(
        'Please provide either both errorMessage and ' +
          'validate or non of them.',
      );
    }

    const hasError =
      (this.props.forceDisplayError || this.state.touched) &&
      this.props.validate &&
      !this.props.validate(this.state.files);

    const className = classNames('file-name-container', {
      'error-state': hasError,
      'try-again-state': state && state.tryAgain,
    });
    return (
      <div className={className} key={file.name + file.size}>
        <div className="file-name">
          <div className="file-name-text">
            <p>{file.name}</p>
            {this.props.displayClear && (
              <i
                className="material-icons clear"
                onClick={() => this.clear(index)}>
                close
              </i>
            )}
          </div>
          {state && state.tryAgain && (
            <div
              onClick={() => this.props.onTryAgain(this.state.files)}
              className="try-again">
              {this.props.tryAgainText ? this.props.tryAgainText : 'تلاش مجدد'}
            </div>
          )}
          {state && state.progress ? (
            <div className="loading-container">
              <div
                className="loading"
                style={{ width: `${state.progress}%` }}
              />
            </div>
          ) : null}
        </div>
        {hasError && state && state.message && (
          <span className="error">{state.message}</span>
        )}
      </div>
    );
  };
}

export default FileInput;
