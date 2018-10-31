import * as React from 'react';

import './styles.scss';

export interface ToolbarProps {
  avatar: JSX.Element;
  title?: string;
  description: string;
  items?: (React.HTMLProps<HTMLDivElement> & {
    title: string;
    icon: string | JSX.Element;
  })[];
}

const Toolbal: React.SFC<ToolbarProps> = (props: ToolbarProps) => {
  return (
    <div className="toolbar">
      {props.avatar && <div className="toolbar-avatar">{props.avatar}</div>}
      <div className="toolbar-info">
        {props.title && <h3 className="toolbar-title">{props.title}</h3>}
        <h4 className="toolbar-description">{props.description}</h4>
      </div>
      {props.items && (
        <div className="toolbar-items">
          {props.items.map(({ icon, title, ...itemProps }) => (
            <div className="toolbar-item" {...itemProps}>
              {typeof icon === 'string' ? (
                <i className="material-icons toolbar-item-icon">{icon}</i>
              ) : (
                icon
              )}
              <h5 className="toolbar-item-title">{title}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Toolbal;
