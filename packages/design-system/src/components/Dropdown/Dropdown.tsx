import React from 'react';
import classNames from 'classnames';
import useAutofocus from '../utilities/useAutoFocus';
import { FormFieldProps, FormLabel, useFormLabel } from '../FormLabel';

export type DropdownDefaultValue = number | string;
export interface DropdownOptions {
  label: React.ReactNode;
  value: number | string;
}
export type DropdownSize = 'small' | 'medium';
export type DropdownValue = number | string;
export type DropdownErrorPlacement = 'top' | 'bottom';

export interface BaseDropdownProps {
  /**
   * Adds `aria-label` attribute. When using `aria-label`, `label` should be empty string.
   */
  ariaLabel?: string;
  /**
   * Additional classes to be added to the root element.
   */
  className?: string;
  /**
   * Used to define custom dropdown options (i.e. option groups). When using the `children` prop, `options` should be an empty list.
   */
  children?: React.ReactNode;
  /**
   * Sets the initial selected state. Use this for an uncontrolled component;
   * otherwise, use the `value` property.
   */
  defaultValue?: DropdownDefaultValue;
  /**
   * Disables the entire field.
   */
  disabled?: boolean;
  errorMessage?: React.ReactNode;
  /**
   * Additional classes to be added to the error message
   */
  errorMessageClassName?: string;
  /**
   * Location of the error message relative to the field input
   */
  errorPlacement?: DropdownErrorPlacement;
  /**
   * Additional classes to be added to the select element
   */
  fieldClassName?: string;
  /**
   * Sets the focus on the select during the first mount
   */
  autoFocus?: boolean;
  /**
   * Additional hint text to display
   */
  hint?: React.ReactNode;
  /**
   * A unique ID to be used for the dropdown field. If one isn't provided, a unique ID will be generated.
   */
  id?: string;
  /**
   * Access a reference to the `select` element
   */
  inputRef?: (...args: any[]) => any;
  /**
   * Applies the "inverse" UI theme
   */
  inversed?: boolean;
  /**
   * Label for the field. If using `Dropdown` without a label, provide an empty string for `label` and use the `ariaLabel` prop instead.
   */
  label: React.ReactNode;
  /**
   * Additional classes to be added to the `FormLabel`.
   */
  labelClassName?: string;
  /**
   * The field's `name` attribute
   */
  name: string;
  /**
   * The list of options to be rendered. Provide an empty list if using custom options via the `children` prop.
   */
  options: DropdownOptions[];
  onBlur?: (...args: any[]) => any;
  onChange?: (...args: any[]) => any;
  /**
   * Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).
   */
  requirementLabel?: React.ReactNode;
  /**
   * If the component renders a select, set the max-width of the input either to `'small'` or `'medium'`.
   */
  size?: DropdownSize;
  /**
   * Sets the field's `value`. Use this in combination with `onChange`
   * for a controlled component; otherwise, set `defaultValue`.
   */
  value?: DropdownValue;
}

export type DropdownProps = BaseDropdownProps &
  Omit<React.ComponentPropsWithRef<'select'>, keyof BaseDropdownProps>;

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  if (process.env.NODE_ENV !== 'production') {
    // 'ariaLabel' is provided with a `label` prop that is not an empty string
    if (props.ariaLabel && (typeof props.label !== 'string' || props.label.length > 0)) {
      console.warn(
        `Cannot use 'ariaLabel' and 'label' React properties together in the <Dropdown> component. If the 'label' prop is used, it should be written for all users so that an 'ariaLabel' is not needed. The 'ariaLabel' prop is intended to be used only when the input is missing an input label (i.e when an empty string is provided for the 'label' prop)`
      );
    }
    // An empty string `label` is provided without a corresponding `ariaLabel` prop
    if (!props.ariaLabel && typeof props.label === 'string' && props.label.length === 0) {
      console.warn(
        `Please provide an 'ariaLabel' when using the <Dropdown> component without a 'label' prop.`
      );
    }
    if (props.children && props.options.length > 0) {
      console.warn(
        `Cannot use 'options' and 'children' React properties at the same time in the <Select> component. Please use 'children' for custom options and 'options' for general cases`
      );
    }
  }

  // Select specific props
  const { ariaLabel, children, fieldClassName, inversed, options, size, ...selectProps } = props;

  const optionElements =
    children ??
    options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));

  const { labelProps, fieldProps, wrapperProps, bottomError } = useFormLabel({
    ...selectProps,
    labelComponent: 'label',
    wrapperIsFieldset: true,
  });

  const selectClassNames = classNames(
    'ds-c-field',
    {
      'ds-c-field--error': props.errorMessage,
      'ds-c-field--inverse': inversed,
    },
    size && `ds-c-field--${size}`,
    fieldClassName
  );

  const ref = useAutofocus<HTMLSelectElement>(props.autoFocus);

  return (
    <div {...wrapperProps}>
      <FormLabel {...labelProps} />
      <select aria-label={ariaLabel} ref={ref} {...fieldProps} className={selectClassNames}>
        {optionElements}
      </select>
      {bottomError}
    </div>
  );
};

export default Dropdown;
