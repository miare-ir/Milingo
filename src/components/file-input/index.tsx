import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../button';

import './styles.scss';

export interface FileDictionary {
  [key: string]: File | number;
}

export interface FileInputProps extends React.HTMLProps<HTMLInputElement> {
  displayClear?: boolean;
  errorMessage?: string;
  forceDisplayError?: boolean;
  validate?: (value: any) => boolean;
  pre?: string;
  title?: string;
  files?: FileDictionary;
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

  componentWillReceiveProps(nextProps: FileInputProps) {
    this.setState({ files: nextProps.files });
  }

  handleInput = e => {
    this.setState({ touched: true, files: e.target.files });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  clear = index => {
    const files = { ...this.state.files };
    if (index) {
      delete files[index];
      files.length = Object.keys(files).length;
    }
    this.setState({ files });
  }

  private renderFiles = (hasError, file, index) => {
    if (index === 'length') {
      return null;
    }

    return (
      <div className="file-name-container" key={file.name + file.size}>
        <div className="file-name">
          <span>
            {file.name}
          </span>
          <i
            className="material-icons clear"
            onClick={() => this.clear(index)}>
            close
          </i>
        </div>
        {hasError && (
          <span className="error">حجم فایل شما بیشتر از حد مجاز است</span>
        )}
      </div>
    );
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

    const { files } = this.state;

    const hasError = (
      errorMessage &&
      (forceDisplayError || this.state.touched) &&
      !validate(this.state.files)
    );

    const className = classNames('file-container', {
      error: hasError,
      multiple: this.props.multiple,
    });

    return (
      <div className={className}>
        <div className="file-div">
          {files && files.length > 0 && (
            Object.keys(files).map(key => {
              return this.renderFiles(hasError, files[key], key);
            })
          )}
          <Button primary>
            {'افزودن فایل'}
            <input
              type="file"
              onChange={this.handleInput}
              {...props} />
          </Button>
        </div>
      </div>
    );
  }
}

export default FileInput;
