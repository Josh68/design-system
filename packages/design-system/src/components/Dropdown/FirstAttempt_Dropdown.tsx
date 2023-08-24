import React, { useMemo, useRef } from 'react';
import classNames from 'classnames';
import useAutofocus from '../utilities/useAutoFocus';
// import type { AriaSelectProps } from "@react-types/select";
import { FormFieldProps, FormLabel, useFormLabel } from '../FormLabel';
import { HiddenSelect, useSelect } from '@react-aria/select';
import { Item, Section } from '@react-stately/collections';
import { useSelectState } from '@react-stately/select';
import { useButton } from '@react-aria/button';
import { isOptGroupArray, parseChildren, validateProps } from './utils';
import { uniqueId } from 'lodash';
import { ListBox } from './ListBox';

// const props: AriaSelectProps<object> = {} as any;
// props.

export type DropdownSize = 'small' | 'medium';
export type DropdownValue = number | string;

// export interface DropdownChangeObject extends UseSelectStateChangeOptions<any> {
//   target: { value: string };
//   currentTarget: { value: string };
// }

export interface DropdownOption extends React.HTMLAttributes<'option'> {
  label: string;
  value: DropdownValue;
}
export interface DropdownOptGroup extends React.HTMLAttributes<'optgroup'> {
  label: string;
  options: DropdownOption[];
}
interface InternalItem extends React.HTMLAttributes<'option' | 'optgroup'> {
  label: string;
  value?: number | string;
  isOptGroup?: boolean;
}
const itemToString = (item: InternalItem) => item.label;

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
  onChange?: any; //(change: DropdownChangeObject) => any;
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
      options: DropdownOption[] | DropdownOptGroup[];
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

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  validateProps(props);

  const id = useRef(props.id ?? uniqueId('dropdown__button--')).current;
  const labelId = useRef(props.labelId ?? uniqueId('dropdown__label--')).current;
  const menuId = useRef(uniqueId('dropdown__menu--')).current;

  // Draw out certain props that we don't want to pass through as attributes
  const {
    autoFocus,
    children,
    fieldClassName,
    name,
    onChange,
    options,
    size,
    defaultValue,
    value,
    ...extraProps
  } = props;

  // Turn our options or optgroups into a flat array of selectable items that
  // we can pass to the Downshift `useSelect` hook. Even though the group
  // headings are not selectable, Downshift wants to know about them. I've
  // tried excluding them from the list we give to Downshift, but then the
  // highlighted index sticks on the last hovered selectable item when hovering
  // over a group heading, and it doesn't look very good.
  const optionsOrOptGroups = options ?? parseChildren(children);
  const items: InternalItem[] = useMemo(
    () =>
      !isOptGroupArray(optionsOrOptGroups)
        ? optionsOrOptGroups
        : optionsOrOptGroups.reduce((internalItems, optGroup) => {
            internalItems.push({
              label: optGroup.label,
              isOptGroup: true,
            });
            internalItems.push(...optGroup.options);
            return internalItems;
          }, [] as InternalItem[]),
    [options, children]
  );

  let controlledSelectedItem;
  let defaultSelectedItem;
  if (value !== undefined) {
    // Controlled component
    controlledSelectedItem = items.find((item) => value === item.value);
    if (!controlledSelectedItem) {
      throw new Error(`Could not find option matching value: ${value}`);
    }
  } else {
    defaultSelectedItem =
      defaultValue !== undefined
        ? items.find((item) => defaultValue === item.value)
        : items.filter((item) => !item.isOptGroup)[0];
    if (!defaultSelectedItem) {
      throw new Error('Dropdown component could not determine a default selected option');
    }
  }

  // const {
  //   isOpen,
  //   selectedItem,
  //   getToggleButtonProps,
  //   getMenuProps,
  //   getItemProps,
  //   highlightedIndex,
  // } = useSelect({
  //   defaultSelectedItem,
  //   selectedItem: controlledSelectedItem,
  //   toggleButtonId: id,
  //   labelId,
  //   menuId,
  //   items,
  //   itemToString,
  //   onSelectedItemChange:
  //     onChange &&
  //     ((changes: UseSelectStateChangeOptions<any>) => {
  //       // Try to support the old API that passed an event object
  //       const target = { value: changes.selectedItem.value };
  //       onChange({
  //         ...changes,
  //         target,
  //         currentTarget: target,
  //       });
  //     }),
  // });

  const state = useSelectState({
    ...props,
    children: [
      <Item key="red panda">Red Panda</Item>,
      <Item key="cat">Cat</Item>,
      <Item key="dog">Dog</Item>,
      <Item key="aardvark">Aardvark</Item>,
      <Item key="kangaroo">Kangaroo</Item>,
      <Item key="snake">Snake</Item>,
    ],
    onSelectionChange: (value: string) => {
      // state.setFocused(true);

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
  const triggerRef = useAutofocus<HTMLButtonElement>(props.autoFocus);

  // const { labelProps, triggerProps, valueProps, menuProps } = useSelect(

  // const { labelProps, fieldProps, wrapperProps, bottomError } = useFormLabel({
  const { bottomError, ...formLabelProps } = useFormLabel({
    ...extraProps,
    id,
    labelId,
    className: classNames(
      'ds-c-dropdown',
      state.isOpen && 'ds-c-dropdown--open',
      size && `ds-c-field--${size}`
    ),
    labelComponent: 'label',
    wrapperIsFieldset: false,
  });

  // We don't want to pass these down to the button
  delete formLabelProps.fieldProps.errorMessage;
  delete formLabelProps.fieldProps.errorId;
  delete formLabelProps.fieldProps.inversed;

  const ariaSelectProps = useSelect({ ...props, ...formLabelProps.fieldProps }, state, triggerRef);

  const triggerProps = {
    ...useButton(ariaSelectProps.triggerProps, triggerRef).buttonProps,
    className: classNames(
      'ds-c-dropdown__button',
      'ds-c-field',
      props.errorMessage && 'ds-c-field--error',
      props.inversed && 'ds-c-field--inverse',
      fieldClassName
    ),
  };

  // const oldbuttonProps = {
  //   // ...triggerProps,
  //   // ...fieldProps,
  //   ref: useAutofocus<HTMLButtonElement>(props.autoFocus),
  //   className: classNames(
  //     'ds-c-dropdown__button',
  //     'ds-c-field',
  //     props.errorMessage && 'ds-c-field--error',
  //     props.inversed && 'ds-c-field--inverse',
  //     fieldClassName
  //   ),
  //   'aria-labelledby': `${id} ${labelId}`,
  // });

  // const menuProps = getMenuProps({
  //   className: classNames(
  //     'ds-c-dropdown__menu',
  //     isOptGroupArray(optionsOrOptGroups) && 'ds-c-dropdown__menu--grouped'
  //   ),
  // });

  // const menuContent = items.map((item, index) => {
  //   const { value, label, isOptGroup, className, ...extraAttrs } = item;
  //   return (
  //     <li
  //       key={value ?? label}
  //       className={classNames(
  //         className,
  //         isOptGroup ? 'ds-c-dropdown__item-group' : 'ds-c-dropdown__item',
  //         highlightedIndex === index && 'ds-c-dropdown__item--highlighted',
  //         selectedItem === item && 'ds-c-dropdown__item--selected'
  //       )}
  //       {...extraAttrs}
  //       {...getItemProps({
  //         item,
  //         index,
  //         disabled: isOptGroup,
  //         role: isOptGroup ? 'group' : undefined,
  //       })}
  //     >
  //       {item.label}
  //     </li>
  //   );
  // });

  // console.log(formLabelProps.fieldProps, ariaSelectProps.triggerProps, triggerProps)
  console.log(state);
  return (
    <div {...formLabelProps.wrapperProps}>
      <FormLabel {...formLabelProps.labelProps} {...ariaSelectProps.labelProps} fieldId={id} />
      <HiddenSelect state={state} triggerRef={triggerRef} label={props.label} name={name} />
      <button {...triggerProps} ref={triggerRef}>
        {'Hello world'}
      </button>
      <div className="ds-c-dropdown__menu-container" hidden={!state.isOpen}>
        <ListBox {...ariaSelectProps.menuProps} state={state} />
      </div>
      {bottomError}
    </div>
  );
};

export default Dropdown;
