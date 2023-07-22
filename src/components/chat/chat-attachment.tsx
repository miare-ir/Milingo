import * as React from 'react';
import * as classNames from 'classnames';

import showIcon from '../../assets/icon/show.svg';
import usePrevious from '../../common/hooks/use-previous';
import Modal from '../modal';

import './styles.scss';

export interface States {
  tryAgain?: boolean;
  message?: string;
  index?: number;
  loading?: boolean;
  progress?: number;
}

export interface AttachmentFileProps {
  displayClear?: boolean;
  file?: File;
  setFile: (file: File) => void;
  forceDisplayError?: boolean;
  onChangeFile?: (value?: File) => void;
  onTryAgain?: (files: File) => void;
  onFileCancelled?: (index?: number) => void;
  state?: States;
  validate?: (value: File) => boolean;
  isClear?: boolean;
  touched: boolean;
  disabled?: boolean;
}

const AttachmentFile: React.FC<AttachmentFileProps> = (
  props: AttachmentFileProps,
) => {
  const prevIsClear = usePrevious(props.isClear);
  const [isOpen, toggleModal] = React.useState<boolean>(false);

  const clear = (): void => {
    if (props.disabled) {
      return;
    }
    props.setFile(null);
    if (props.onChangeFile) {
      props.onChangeFile();
    }
    if (props.onFileCancelled) {
      props.onFileCancelled();
    }
  };

  React.useEffect(() => {
    if (prevIsClear !== props.isClear) {
      if (props.isClear) {
        clear();
      }
    }
  }, [props.isClear]);

  React.useEffect(() => {}, [isOpen]);

  if (props.state && props.state.message && !props.validate) {
    throw new TypeError(
      'Please provide either both errorMessage and ' +
        'validate or non of them.',
    );
  }

  const hasError =
    (props.forceDisplayError || props.touched) &&
    props.validate &&
    !props.validate(props.file);

  const errorMessage = props.state.tryAgain ? (
    <>
      <span>{props.state?.message}</span>
      <span onClick={() => props.onTryAgain(props.file)} className="try-again">
        {'(بارگزاری مجدد)'}
      </span>
    </>
  ) : (
    <p>{props.state?.message}</p>
  );

  const className = classNames('file-name-container', {
    'error-state': hasError,
    'try-again-state': props.state && props.state.tryAgain,
  });

  return (
    <div className={className} key={props.file.name + props.file.size}>
      <div className="file-name">
        <div className="file-name-text">
          {props.state &&
            !props.state.progress &&
            !hasError &&
            !props.state.tryAgain && (
              <img
                src={showIcon}
                className="show-icon"
                onClick={() => toggleModal(true)}
              />
            )}
          <p>{props.file.name}</p>
        </div>
        {props.displayClear && (
          <i className="material-icons clear" onClick={() => clear()}>
            close
          </i>
        )}
        {props.state && props.state.progress ? (
          <div className="loading-container">
            <div
              className="loading"
              style={{
                width: `${props.state.progress}%`,
                borderRadius: props.state.progress > 98 ? '8px' : '',
              }}
            />
          </div>
        ) : null}
      </div>
      {hasError && props.state && props.state.message && (
        <div className="error">{errorMessage}</div>
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => toggleModal(false)}
        className="milingo-image-modal">
        <img src={URL.createObjectURL(props.file)} />
      </Modal>
    </div>
  );
};

export default AttachmentFile;
