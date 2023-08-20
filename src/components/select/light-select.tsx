import * as React from 'react';
import * as classNames from 'classnames';

import arrowIcon from '../../assets/icon/arrow-drop-down.svg';

import './light-select.scss';

export interface Option {
  label: string;
  value: string | number;
  className?: string;
}

export interface LightSelectProps {
  name?: string;
  options: Option[];
  className?: string;
  disabled?: boolean;
  onChange?: (arg: Option) => void;
  onFocus?: (arg: boolean) => void;
  value?: Option;
  placeholder?: string;
  showedItem?: number;
}


const DEFAULT_PLACEHOLDER_STRING = 'انتخاب ...';

const LightSelectComponent = ({ name, options, className, disabled, onChange, onFocus, value, placeholder, showedItem }: LightSelectProps): JSX.Element => {
  let selectElement: HTMLSelectElement;
  let node: HTMLElement;
  const defaultValue: Option = {
    label:
      typeof placeholder === 'undefined'
        ? DEFAULT_PLACEHOLDER_STRING
        : placeholder,
    value: '',
  }
  const [selected, setSelected] = React.useState(value || defaultValue);
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(true);

  const handleDocumentClick = (event): void => {
    if (mounted) {
      if (!node?.contains(event.target)) {
        if (isOpen) {
          setIsOpen(false);
        }
      }
    }
  }

  React.useEffect(() => {
    document.addEventListener(
      'click',
      handleDocumentClick,
      false,
    );
    document.addEventListener(
      'touchend',
      handleDocumentClick,
      false,
    );
    selectElement.value = value && (value.value as string);

    return () => {
      setMounted(false);
      document.removeEventListener(
        'click',
        handleDocumentClick,
        false,
      );
      document.removeEventListener(
        'touchend',
        handleDocumentClick,
        false,
      );
    }
  }, [])

  React.useEffect(() => {
    if(value && value.value !== selected.value) {
      setSelected({ value: value.value, label: value.label });
      selectElement.value = value.value as string; 
    } else if(!value) {
      setSelected(defaultValue);
    }
  },[value]);


  const handleMouseDown = (event): void => {
    (window.document.activeElement as HTMLInputElement)?.blur();

    if (onFocus && typeof onFocus === 'function') {
      onFocus(isOpen);
    }
    if (event.type === 'mousedown' && event.button !== 0) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();

    if (!disabled) {
      setIsOpen(!isOpen);
    }
  }

  const setValue = (value: string | number, label: string): void => {
    setSelected({
      value,
      label,
    })
    setIsOpen(false);
    handleChange({ value, label});
    selectElement.value = value as string;
  }

  const handleChange = (changedSelected: Option): void => {
    if (changedSelected !== selected && onChange) {
      onChange(changedSelected);
    }
  }

  const renderOption = (option): React.ReactNode => {
    const optionClass = classNames('select-option', {
      [option.className]: !!option.className,
      'is-selected': option.value === selected.value,
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
        onMouseDown={() => setValue(value, label)}
        onClick={() => setValue(value, label)}>
        {label}
      </div>
    );
  }

  const renderSelectsOption = (): React.ReactNode =>  {
    if (!options) {
      return null;
    }

    return options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  }

  const buildMenu = (): React.ReactNode =>  {
    const ops = options && options.map(option => renderOption(option));

    return ops && ops.length ? (
      ops
    ) : (
      <div className={`select-no-results`}>گزینه پیدا نشد!</div>
    );
  }

  const placeHolderValue =
    typeof selected === 'string'
      ? selected
      : selected.label;

  const selectClass = classNames('light-select-root', className, {
    'is-open': isOpen,
  });

  const controlClass = classNames('select-control', {
    'select-disabled': disabled,
  });

  const menu = isOpen ? (
    <div
      className="select-menu"
      style={showedItem && { maxHeight: 24 * showedItem - 8}}>
      {buildMenu()}
    </div>
  ) : null;

  return (
    <div className={selectClass} ref={node => node}>
      <div
        tabIndex={0}
        className={controlClass}
        onMouseDown={handleMouseDown}
        onTouchEnd={handleMouseDown}>
        <div className="select-placeholder">{placeHolderValue}</div>
        <div className="select-arrow">
          <img src={arrowIcon} className="arrow-icon" />
        </div>
      </div>
      {menu}
      <select
        name={name}
        ref={select => (selectElement = select)}
        hidden>
        <option value="null">default</option>
        {renderSelectsOption()}
      </select>
    </div>
  );
}

export default LightSelectComponent;
