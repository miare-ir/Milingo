import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface DialogContentProps extends React.HTMLProps<HTMLDivElement> {
  onClose?: () => void;
  children?: React.ReactNode;
  actions?: JSX.Element | JSX.Element[];
  title: string;
  titleDescription?: string;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
}

class DialogContent extends React.Component<DialogContentProps, {}> {
  componentDidMount(): void {
    if (this.props.primary && this.props.secondary) {
      throw new Error(
        "Dialog content component can't receive primary and secondary props at same time ",
      );
    }

    if (!this.props.primary && !this.props.secondary) {
      throw new Error(
        'Dialog content component needs one of primary or secondary props',
      );
    }
  }

  render(): React.ReactNode {
    const {
      className,
      title,
      primary,
      secondary,
      actions,
      children,
      onClose,
      titleDescription,
      ...props
    } = this.props;
    const componentClassNames = classNames(
      'dialog-content-wrapper',
      className,
      {
        primary: primary,
        secondary: secondary,
      },
    );

    return (
      <div className={componentClassNames} {...props}>
        <div className="dialog-header" key="title">
          <h2 className="dialog-title">
            <span onClick={onClose} className="material-icons">
              close
            </span>
            <span>{title}</span>
            <span className="dialog-title-description">{titleDescription}</span>
          </h2>
        </div>
        {children && (
          <div className="dialog-content" key="content">
            {children}
          </div>
        )}
        <div className="dialog-actions" key="footer">
          {actions}
        </div>
      </div>
    );
  }
}

export default DialogContent;
