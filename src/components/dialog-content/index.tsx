import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface DialogContentProps {
  children?: JSX.Element;
  actions?: JSX.Element[];
  title: string;
  className?: string;
}

class DialogContent extends React.Component<DialogContentProps, void> {
  render() {
    return (
      <div
        className={classNames('dialog-content-wrapper', this.props.className)}>
        <div className="dialog-header">
          <h2 className="dialog-title">{this.props.title}</h2>
        </div>
        {this.props.children && (
          <div className="dialog-content">{this.props.children}</div>
        )}
        <div className="dialog-actions">
          {this.props.actions}
        </div>
      </div>
    );
  }
}

export default DialogContent;
