import * as React from 'react';
import * as classNames from 'classnames';
import Button from '../button'

import './styles.scss';

export interface FileProps extends React.HTMLProps<HTMLInputElement> {
  displayClear?: boolean;
  errorMessage?: string;
  forceDisplayError?: boolean;
  validate?: (value: any) => boolean;
  pre?: string;
  title?: string;
  files: any;
}

export interface FileState {
  touched: boolean;
  files: any;
}

class File extends React.Component<FileProps, FileState> {

  constructor(props) {
    super(props);

    this.state = {
      touched: false,
      files: props.files || [],
    };
  }

  componentWillReceiveProps(nextProps: FileProps) {
    if (
      nextProps.files !== this.props.files &&
      nextProps.files !== this.state.files
    ) {
      this.setState({ files: nextProps.files });
    }
  }

  handleInput = e => {
    if (e.target.files[0]) {
      let newFilesArray = [ ...this.state.files];

      if(this.props.multiple){
        for(let file of e.target.files ){
          newFilesArray.push( file );
        }
      } else {
        newFilesArray = [ e.target.files[0] ];
      }

      if (!this.state.touched) {
        this.setState({ touched: true, files: newFilesArray });
      } else {
        this.setState({ files: newFilesArray });
      }
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  clear = (index) => {
    const filesArray = [ ...this.state.files];
    filesArray.splice(index, 1)
    this.setState({ files: filesArray });
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
      !validate(this.state.files)
    );

    const className = classNames('file-container', {
      error: hasError,
      multiple: this.props.multiple
    });

    const mappedFile = this.state.files.map( (file, index)=>(
      <div className="file-name-container">
        <div className="file-name" key={file.name + file.size}>
          <span>
            { file.name }
          </span>
          <i
            className="material-icons clear"
            onClick={ () => this.clear(index) }>
            close
          </i>
        </div>
        {hasError && (
            <span className="error">حجم فایل شما بیشتر از حد مجاز است</span>
          )}
      </div>
    ))

    return (
      <div className={className}>
        <div className="file-div">
          { this.state.files.length > 0 && mappedFile}
          <Button primary>
            افزودن فایل
            <input
              type='file'
              onChange={this.handleInput}
              {...props} />
          </Button>

        </div>
      </div>
    );
  }
}

export default File;
