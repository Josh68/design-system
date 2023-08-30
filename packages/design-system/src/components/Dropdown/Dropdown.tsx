import React, { RefObject, useMemo, useRef } from 'react';
import classNames from 'classnames';
import mergeRefs from '../utilities/mergeRefs';
import useAutofocus from '../utilities/useAutoFocus';
import { FormFieldProps, FormLabel, useFormLabel } from '../FormLabel';
import { SvgIcon } from '../Icons';
import { isOptGroup, parseChildren, validateProps } from './utils';
import { Item, ListState, Section, useSelectState } from 'react-stately';
import { HiddenSelect, useButton, useSelect } from 'react-aria';
import DropdownMenu from './DropdownMenu';
import useClickOutsideHandler from '../utilities/useClickOutsideHandler';
import useId from '../utilities/useId';

const caretIcon = (
  <path d="M212.7 148.7c6.2-6.2 16.4-6.2 22.6 0l160 160c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 182.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160z" />
);

export type DropdownSize = 'small' | 'medium';
export type DropdownValue = number | string;

export interface DropdownChangeObject {
  target: { value: string };
  currentTarget: { value: string };
}

export interface DropdownOption extends React.HTMLAttributes<'option'> {
  label: string;
  value: DropdownValue;
}
export interface DropdownOptGroup extends React.HTMLAttributes<'optgroup'> {
  label: string;
  options: DropdownOption[];
}

export interface BaseDropdownProps extends Omit<FormFieldProps, 'id'> {
  /**
   * Sets the initial selected state. Use this for an uncontrolled component;
   * otherwise, use the `value` property.
   */
  defaultValue?: DropdownValue;
  /**
   * Disables the entire field.
   */
  disabled?: boolean;
  /**
   * Additional classes to be added to the dropdown button element
   */
  fieldClassName?: string;
  /**
   * Sets the focus on the button during the first mount
   */
  autoFocus?: boolean;
  /**
   * A unique ID to be used for the `button` element. If one isn't provided, a unique ID will be generated.  /**
   * Additional hint text to display
   */
  id?: string;
  /**
   * Access a reference to the `button` element
   */
  inputRef?: (...args: any[]) => any;
  /**
   * Applies the "inverse" UI theme
   */
  inversed?: boolean;
  /**
   * The field's `name` attribute
   */
  name: string;
  onBlur?: (...args: any[]) => any;
  onChange?: (change: DropdownChangeObject) => any;
  /**
   * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
   */
  requirementLabel?: React.ReactNode;
  /**
   * Sets the max-width of the input either to `'small'` or `'medium'`.
   */
  size?: DropdownSize;
  /**
   * Sets the field's `value`. Use this in combination with `onChange`
   * for a controlled component; otherwise, set `defaultValue`.
   */
  value?: DropdownValue;
}

type OptionsOrChildren =
  | {
      children?: undefined;
      /**
       * The list of options to be rendered. Each item must have a `label` and `value`.
       */
      options: Array<DropdownOption | DropdownOptGroup>;
    }
  | {
      /**
       * Used to define custom dropdown options (i.e. option groups). Alternative to `options` prop.
       */
      children: React.ReactNode;
      options?: undefined;
    };

export type DropdownProps = BaseDropdownProps &
  OptionsOrChildren &
  Omit<React.ComponentPropsWithRef<'button'>, keyof BaseDropdownProps>;

/**
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/dropdown/).
 */
export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  validateProps(props);

  // TODO: Figure out a nice way to apply these to the appropriate elements, since
  // react-aria doesn't have any props for specifying these through their API, and
  // they randomly generate the ids.
  const id = useId('dropdown__button--', props.id);
  const labelId = props.labelId ?? `${id}__label`;
  const buttonContentId = `${id}__button-content`;
  const menuId = `${id}__menu`;

  // Draw out certain props that we don't want to pass through as attributes
  const {
    autoFocus,
    children,
    className,
    fieldClassName,
    onChange,
    options,
    size,
    defaultValue,
    value,
    inputRef,
    ...extraProps
  } = props;

  const optionsAndGroups = options ?? parseChildren(children);

  const renderReactStatelyItem = (item: DropdownOption) => {
    const { label, value, ...extraAttrs } = item;
    return (
      <Item {...extraAttrs} key={value}>
        {label}
      </Item>
    );
  };

  const reactStatelyItems = optionsAndGroups.map((item) => {
    if (isOptGroup(item)) {
      const { label, options, ...extraAttrs } = item;
      return (
        <Section {...extraAttrs} key={label} title={label}>
          {options.map(renderReactStatelyItem)}
        </Section>
      );
    } else {
      return renderReactStatelyItem(item);
    }
  });

  let fallbackValue = defaultValue;
  if (fallbackValue === undefined) {
    const firstOption = optionsAndGroups.find((optOrGroup) =>
      !isOptGroup(optOrGroup) ? true : optOrGroup.options[0]
    ) as DropdownOption;
    if (firstOption) {
      fallbackValue = firstOption.value;
    } else {
      console.warn('Dropdown component could not determine a default selected option');
    }
  }

  const state = useSelectState({
    ...props,
    children: reactStatelyItems,
    selectedKey: value ?? fallbackValue,
    onSelectionChange: (value: string) => {
      state.setFocused(true);
      // TODO: Get it to not fire an onBlur event when a selection is made

      if (onChange) {
        // Try to support the old API that passed an event object
        const target = { value };
        onChange({
          target,
          currentTarget: target,
        });
      }
    },
  });
  // ((changes: UseSelectStateChangeOptions<any>) => {
  //   // Try to support the old API that passed an event object
  //   const target = { value: changes.selectedItem.value };
  //   onChange({
  //     ...changes,
  //     target,
  //     currentTarget: target,
  //   });

  const useFormLabelProps = useFormLabel({
    ...extraProps,
    id,
    labelId,
    className: classNames('ds-c-dropdown', className, state.isOpen && 'ds-c-dropdown--open'),
    labelComponent: 'label',
    wrapperIsFieldset: false,
  });

  // We don't want to pass these down to the button
  delete useFormLabelProps.fieldProps.errorMessage;
  delete useFormLabelProps.fieldProps.errorId;
  delete useFormLabelProps.fieldProps.inversed;
  delete useFormLabelProps.fieldProps.onBlur;

  const triggerRef = useRef<HTMLButtonElement>();
  const useSelectProps = useSelect(props, state, triggerRef);
  const useButtonProps = useButton(useSelectProps.triggerProps, triggerRef);

  const buttonProps = {
    ...useButtonProps.buttonProps,
    ...useFormLabelProps.fieldProps,
    className: classNames(
      'ds-c-dropdown__button',
      'ds-c-field',
      props.errorMessage && 'ds-c-field--error',
      props.inversed && 'ds-c-field--inverse',
      size && `ds-c-field--${size}`,
      fieldClassName
    ),
    ref: mergeRefs([triggerRef, inputRef, useAutofocus<HTMLButtonElement>(props.autoFocus)]),
    'aria-controls': menuId,
    'aria-labelledby': `${buttonContentId} ${labelId}`,
  };

  const labelProps = {
    ...useSelectProps.labelProps,
    ...useFormLabelProps.labelProps,
    fieldId: useFormLabelProps.fieldProps.id,
  };

  const wrapperRef = useRef<HTMLDivElement>();
  useClickOutsideHandler([wrapperRef], () => {
    state.setOpen(false);
  });

  return (
    <div {...useFormLabelProps.wrapperProps} ref={wrapperRef}>
      <FormLabel {...labelProps} />
      <HiddenSelect
        isDisabled={props.disabled}
        state={state}
        triggerRef={triggerRef}
        label={props.label}
        name={props.name}
      />
      <button {...buttonProps}>
        <span id={buttonContentId} className="ds-u-truncate">
          {state.selectedItem ? state.selectedItem.rendered : ''}
        </span>
        <span className="ds-c-dropdown__caret">
          <SvgIcon
            title="expanded indicator icon"
            viewBox="0 0 448 512"
            className="ds-u-font-size--sm"
          >
            {caretIcon}
          </SvgIcon>
        </span>
      </button>
      {state.isOpen && (
        <DropdownMenu
          {...useSelectProps.menuProps}
          className={classNames('ds-c-dropdown__menu-container', size && `ds-c-field--${size}`)}
          labelId={labelId}
          menuId={menuId}
          rootId={id}
          state={state}
          triggerRef={triggerRef}
        />
      )}
      {useFormLabelProps.bottomError}
    </div>
  );
};

export default Dropdown;
