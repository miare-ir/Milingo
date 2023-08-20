import * as React from 'react';
import * as classNames from 'classnames';

import arrowIcon from '../../assets/icon/arrow-white.svg';

import './select.scss';

export interface Option {
  label: string;
  value: string | number;
  className?: string;
}

export interface SelectProps {
  name?: string;
  options: Option[];
  className?: string;
  disabled?: boolean;
  onChange?: (arg: Option) => void;
  onFocus?: (arg: boolean) => void;
  value?: Option;
  placeholder?: string;
  showedItem?: number;
  errorMessage?: string;
  errorMessagePosition?: 'top' | 'bottom';
  forceDisplayError?: boolean;
  validate?: () => boolean;
}

interface SelectState {
  selected: Option;
  isOpen: boolean;
  mounted: boolean;
}

const DEFAULT_PLACEHOLDER_STRING = 'انتخاب ...';

class SelectComponent extends React.Component<SelectProps, SelectState> {
  private selectElement: HTMLSelectElement;
  private node: HTMLElement;

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

  UNSAFE_componentWillReceiveProps(newProps: SelectProps): void {
    if (newProps.value && newProps.value.value !== this.state.selected.value) {
      this.setState({
        selected: { value: newProps.value.value, label: newProps.value.label },
      });
      this.selectElement.value = newProps.value.value as string;
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
    this.selectElement.value =
      this.props.value && (this.props.value.value as string);
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

  handleMouseDown(event): void {
    (window.document.activeElement as HTMLInputElement)?.blur();

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

  setValue(value, label): void {
    const newState = {
      selected: {
        value,
        label,
      },
      isOpen: false,
    };

    this.setState(newState);
    this.handleChange(newState);
    this.selectElement.value = value;
  }

  handleChange(newState): void {
    if (newState.selected !== this.state.selected && this.props.onChange) {
      this.props.onChange(newState.selected);
    }
  }

  renderOption(option): React.ReactNode {
    const optionClass = classNames('select-option', {
      [option.className]: !!option.className,
      'is-selected': option.value === this.state.selected.value,
    });

    let value = option.value;
    if (typeof value === 'undefined') {
      value = option.label || option;
    }
    const label = option.label || option.value || option;

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

  renderSelectsOption(): React.ReactNode {
    if (!this.props.options) {
      return null;
    }

    return this.props.options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  }

  buildMenu(): React.ReactNode {
    const { options } = this.props;
    const ops = options && options.map(option => this.renderOption(option));

    return ops && ops.length ? (
      ops
    ) : (
      <div className={`select-noresults`}>گزینه پیدا نشد!</div>
    );
  }

  handleDocumentClick(event): void {
    if (this.state.mounted) {
      if (!this.node?.contains(event.target)) {
        if (this.state.isOpen) {
          this.setState({ isOpen: false });
        }
      }
    }
  }

  render(): React.ReactNode {
    const { className, showedItem, errorMessage, errorMessagePosition } =
      this.props;

    const placeHolderValue =
      typeof this.state.selected === 'string'
        ? this.state.selected
        : this.state.selected.label;

    const selectClass = classNames('select-root', className, {
      'is-open': this.state.isOpen,
    });

    const controlClass = classNames('select-control', {
      'select-disabled': this.props.disabled,
    });

    const menu = this.state.isOpen ? (
      <div
        className="select-menu"
        style={showedItem && { maxHeight: 40 * showedItem + 16 }}>
        {this.buildMenu()}
      </div>
    ) : null;

    return (
      <div className={selectClass} ref={node => (this.node = node)}>
        {errorMessage &&
          (!errorMessagePosition || errorMessagePosition === 'top') && (
            <span className="error top">{errorMessage}</span>
          )}
        <div
          tabIndex={0}
          className={controlClass}
          onMouseDown={this.handleMouseDown.bind(this)}
          onTouchEnd={this.handleMouseDown.bind(this)}>
          <div className="select-placeholder">{placeHolderValue}</div>
          <div className="select-arrow">
            <img src={arrowIcon} className="arrow-icon" />
          </div>
        </div>
        {menu}
        <select
          name={this.props.name}
          ref={select => (this.selectElement = select)}
          hidden>
          <option value="null">default</option>
          {this.renderSelectsOption()}
        </select>

        {errorMessage && errorMessagePosition === 'bottom' && (
          <span className="error bottom">{errorMessage}</span>
        )}
      </div>
    );
  }
}

export default SelectComponent;
