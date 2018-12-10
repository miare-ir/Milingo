import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

import './styles.scss';

export interface Option {
  label: string;
  value: string;
  className?: string;
}

interface DropdownProps {
  options: (Option | string)[];
  baseClassName?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (arg: Option) => void;
  onFocus?: (arg: boolean) => void;
  value?: Option;
  placeholder?: string;
}

interface DropdownState {
  selected: Option;
  isOpen: boolean;
  mounted: boolean;
}

const DEFAULT_PLACEHOLDER_STRING = 'انتخاب ...';

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.value || {
        label:
          typeof props.placeholder === 'undefined'
            ? DEFAULT_PLACEHOLDER_STRING
            : props.placeholder,
        value: '',
      },
      isOpen: false,
      mounted: true,
    };

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.value && newProps.value !== this.state.selected) {
      this.setState({ selected: newProps.value });
    } else if (!newProps.value) {
      this.setState({
        selected: {
          label:
            typeof newProps.placeholder === 'undefined'
              ? DEFAULT_PLACEHOLDER_STRING
              : newProps.placeholder,
          value: '',
        },
      });
    }
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

  handleMouseDown(event) {
    if (this.props.onFocus && typeof this.props.onFocus === 'function') {
      this.props.onFocus(this.state.isOpen);
    }
    if (event.type === 'mousedown' && event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();

    if (!this.props.disabled) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }

  setValue(value, label) {
    const newState = {
      selected: {
        value,
        label,
      },
      isOpen: false,
    };
    this.setState(newState);
    this.handleChange(newState);
  }

  handleChange(newState) {
    if (newState.selected !== this.state.selected && this.props.onChange) {
      this.props.onChange(newState.selected);
    }
  }

  renderOption(option) {
    const optionClass = classNames('dropdown-option', {
      [option.className]: !!option.className,
      'is-selected': option.value === this.state.selected.value,
    });

    let value = option.value;
    if (typeof value === 'undefined') {
      value = option.label || option;
    }
    let label = option.label || option.value || option;

    return (
      <div
        key={value}
        className={optionClass}
        onMouseDown={this.setValue.bind(this, value, label)}
        onClick={this.setValue.bind(this, value, label)}>
        {label}
      </div>
    );
  }

  buildMenu() {
    let { options } = this.props;
    let ops = options.map(option => {
      return this.renderOption(option);
    });

    return ops.length ? (
      ops
    ) : (
      <div className={`dropdown-noresults`}>گزینه پیدا نشد!</div>
    );
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

  render() {
    const { className } = this.props;

    const placeHolderValue =
      typeof this.state.selected === 'string'
        ? this.state.selected
        : this.state.selected.label;

    const dropdownClass = classNames('dropdown-root', {
      [className]: !!className,
      'is-open': this.state.isOpen,
    });
    const controlClass = classNames('dropdown-control', {
      'dropdown-disabled': this.props.disabled,
    });
    const menu = this.state.isOpen ? (
      <div className="dropdown-menu">{this.buildMenu()}</div>
    ) : null;

    return (
      <div className={dropdownClass}>
        <div
          className={controlClass}
          onMouseDown={this.handleMouseDown.bind(this)}
          onTouchEnd={this.handleMouseDown.bind(this)}>
          <div className="dropdown-placeholder">{placeHolderValue}</div>
          <div className="dropdown-arrow" />
        </div>
        {menu}
      </div>
    );
  }
}

export default Dropdown;
