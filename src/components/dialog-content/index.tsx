import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface DialogContentProps {
  children?: JSX.Element;
  actions?: JSX.Element[];
  title: string;
  className?: string;
  primary?: boolean;
  secondary?: boolean;
}

class DialogContent extends React.Component<DialogContentProps, {}> {
  componentWillMount() {
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

  render() {
    const {
      className,
      title,
      primary,
      secondary,
      actions,
      children,
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
      <div className={componentClassNames}>
        <div className="dialog-header">
          <h2 className="dialog-title">{title}</h2>
        </div>
        {children && <div className="dialog-content">{children}</div>}
        <div className="dialog-actions">{actions}</div>
      </div>
    );
  }
}

export default DialogContent;
