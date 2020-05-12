import * as React from 'react';
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
  title?: string;
  extraTitle?: JSX.Element;
  actions?: Action[];
  id: string;
  object?: any;
  icon?: string;
  disable?: boolean;
  description?: string | JSX.Element;
  onAction?: (name: string, id: string, object?: any) => void;
}

export interface ActionTableRowStates {
  isOpen: boolean;
  mounted: boolean;
}

class ActionTableRow extends React.Component<
  ActionTableRowProps,
  ActionTableRowStates
> {
  private node: HTMLElement;

  constructor(props) {
    super(props);

    this.toggleIsOpen = this.toggleIsOpen.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.state = { isOpen: false, mounted: true };
  }

  toggleIsOpen(): void {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount(): void {
    document.addEventListener(
      'click',
      this.handleDocumentClick.bind(this),
      false,
    );
    document.addEventListener(
      'touchend',
      this.handleDocumentClick.bind(this),
      false,
    );
  }

  componentWillUnmount(): void {
    this.setState({ mounted: false });
    document.removeEventListener(
      'click',
      this.handleDocumentClick.bind(this),
      false,
    );
    document.removeEventListener(
      'touchend',
      this.handleDocumentClick.bind(this),
      false,
    );
  }

  handleDocumentClick(event): void {
    if (
      this.state.mounted &&
      this.state.isOpen &&
      !this.node.contains(event.target)
    ) {
      this.setState({ isOpen: false });
    }
  }

  renderButtonActions(): React.ReactNode {
    return (
      <div className="button-action-wrapper">
        {this.props.actions &&
          this.props.actions.map(action => (
            <Button
              key={action.name}
              tiny
              {...action.extraProps}
              onClick={() =>
                this.props.onAction &&
                this.props.onAction(
                  action.name,
                  this.props.id,
                  this.props.object,
                )
              }>
              {action.title}
            </Button>
          ))}
      </div>
    );
  }

  renderMenuActions(): React.ReactNode {
    return (
      <div>
        <Button tiny ghost onClick={this.toggleIsOpen.bind(this)}>
          <span className="material-icons">more_horiz</span>
        </Button>
        {this.state.isOpen && (
          <div className="menu-action-list">
            {this.props.actions &&
              this.props.actions.map(action => (
                <div
                  key={action.name}
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

  render(): React.ReactNode {
    const {
      className,
      title,
      icon,
      disable,
      onAction,
      object,
      extraTitle,
      description,
      ...props
    } = this.props;
    const componentClassName = classNames('action-table-row', className, {
      disable,
    });

    return (
      <div
        className={componentClassName}
        {...props}
        ref={node => (this.node = node)}>
        <div className="title-wrapper">
          {icon && <span className="icon material-icons">{icon}</span>}
          <div className="row-title">{extraTitle ? extraTitle : title}</div>
        </div>
        {!disable && description && (
          <span className="row-dsc">{description}</span>
        )}
        {!disable && (
          <div>
            <div className="button-action">{this.renderButtonActions()}</div>
            <div className="menu-action">{this.renderMenuActions()}</div>
          </div>
        )}
      </div>
    );
  }
}

export default ActionTableRow;
