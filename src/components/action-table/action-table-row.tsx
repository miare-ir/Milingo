import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

import Button from '../button';
import './styles.scss';

export interface Action {
  title: string;
  name: string;
  className?: string;
  extraProps?: object;
}

export interface ActionTableRowProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  actions?: Action[];
  id: string;
  icon?: string;
  onAction?: (name: string, id: string) => void;
}

export interface ActionTableRowStates {
  isOpen: boolean;
  mounted: boolean;
}

class ActionTableRow extends React.Component<
  ActionTableRowProps,
  ActionTableRowStates
> {
  constructor(props) {
    super(props);

    this.toggleIsOpen = this.toggleIsOpen.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.state = { isOpen: false, mounted: true };
  }

  toggleIsOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  handleDocumentClick(event) {
    if (this.state.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        if (this.state.isOpen) {
          this.setState({ isOpen: false });
        }
      }
    }
  }

  renderButtonActions() {
    return (
      <div className="button-action-wrapper">
        {this.props.actions.map(action => (
          <Button
            key={action.name}
            tiny
            {...action.extraProps}
            onClick={() =>
              this.props.onAction &&
              this.props.onAction(action.name, this.props.id)
            }>
            {action.title}
          </Button>
        ))}
      </div>
    );
  }

  renderMenuActions() {
    return (
      <div>
        <Button tiny ghost onClick={this.toggleIsOpen}>
          <span className="material-icons">more_horiz</span>
        </Button>
        {this.state.isOpen && (
          <div className="menu-action-list">
            {this.props.actions.map(action => (
              <div
                className={classNames('menu-action-item', action.className)}
                onClick={() =>
                  this.props.onAction &&
                  this.props.onAction(action.name, this.props.id)
                }>
                {action.title}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  render() {
    const { className, title, icon } = this.props;
    const componentClassName = classNames('action-table-row', className);

    return (
      <div className={componentClassName}>
        <div className="title-wrapper">
          {icon && <span className="icon material-icons">{icon}</span>}
          <div className="row-title">{title}</div>
        </div>
        <div className="button-action">{this.renderButtonActions()}</div>
        <div className="menu-action">{this.renderMenuActions()}</div>
      </div>
    );
  }
}

export default ActionTableRow;