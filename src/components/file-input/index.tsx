import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../button';

import './styles.scss';

export interface FileDictionary {
  [key: string]: File | number;
}

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
  files?: FileDictionary;
  forceDisplayError?: boolean;
  onChangeFiles?: (value: any) => void;
  onTryAgain?: (files: FileDictionary) => void;
  pre?: string;
  states?: StatesDictionary;
  title?: string;
  validate?: (value: any) => boolean;
  children?: string;
  tryAgainText?: string;
}

export interface FileInputState {
  touched: boolean;
  files: FileDictionary;
}

class FileInput extends React.Component<FileInputProps, FileInputState> {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
      files: props.files || null,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: FileInputProps) {
    this.setState({ files: nextProps.files });
  }

  handleInput = e => {
    this.setState({ touched: true, files: e.target.files });

    if (this.props.onChangeFiles) {
      this.props.onChangeFiles(e.target.files);
    }
  };

  clear = index => {
    let files = { ...this.state.files };
    if (index) {
      delete files[index];
      Object.keys(files).length === 0
        ? (files = null)
        : (files.length = Object.keys(files).length);
    }

    if (this.props.onChangeFiles) {
      this.props.onChangeFiles(files);
    }

    this.setState({ files });
  };

  private renderFiles = (state: States, file, index: string) => {
    if (index === 'length') {
      return null;
    }

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
            <i
              className="material-icons clear"
              onClick={() => this.clear(index)}>
              close
            </i>
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
            Object.keys(files).map(key =>
              this.renderFiles(states && states[key], files[key], key),
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
}

export default FileInput;
