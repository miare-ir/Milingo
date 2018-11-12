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
    const componentClassNames = classNames(
      'dialog-content-wrapper',
      this.props.className,
      {
        primary: this.props.primary,
        secondary: this.props.secondary,
      },
    );

    return (
      <div className={componentClassNames}>
        <div className="dialog-header">
          <h2 className="dialog-title">{this.props.title}</h2>
        </div>
        {this.props.children && (
          <div className="dialog-content">{this.props.children}</div>
        )}
        <div className="dialog-actions">{this.props.actions}</div>
      </div>
    );
  }
}

export default DialogContent;
