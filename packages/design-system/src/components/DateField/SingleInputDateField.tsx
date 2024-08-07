import { useRef, useState } from 'react';
import type * as React from 'react';
import CustomDayPicker from './CustomDayPicker';
import classNames from 'classnames';
import cleanFieldProps from '../utilities/cleanFieldProps';
import describeField from '../utilities/describeField';
import { isMatch } from 'date-fns';
import mergeIds from '../utilities/mergeIds';
import useLabelMask from '../TextField/useLabelMask';
import useClickOutsideHandler from '../utilities/useClickOutsideHandler';
import usePressEscapeHandler from '../utilities/usePressEscapeHandler';
import useId from '../utilities/useId';
import { CalendarIcon } from '../Icons/CalendarIcon';
import { DATE_MASK } from '../TextField/useLabelMask';
import { Label } from '../Label';
import { TextInput } from '../TextField';
import { TextInputProps } from '../TextField/TextInput';
import { t } from '../i18n';
import { useLabelProps, UseLabelPropsProps } from '../Label/useLabelProps';
import { useHint, UseHintProps } from '../Hint/useHint';
import { useInlineError, UseInlineErrorProps } from '../InlineError/useInlineError';

interface BaseSingleInputDateFieldProps {
  /**
   * The `input` field's `name` attribute
   */
  name: string;
  /**
   * Called anytime any date input is blurred
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any;
  /**
   * Called anytime any date input is changed. This function is called with two arguments.
   * The first argument should be used to update whatever state your application uses to
   * supply back to this component's `value` prop in a _controlled component_ pattern.
   *
   * @param updatedValue - The input's new value
   * @param formattedValue - The input's new value with date formatting applied, included
   *   for convenience. Do not use this value as the component's `value` prop. An appropriate
   *   use for this value would be to run date-validation checks against it.
   */
  onChange?: (updatedValue: string, formattedValue: string) => any;
  /**
   * A unique ID for this element. A unique ID will be generated if one isn't provided.
   */
  id?: string;
  /**
   * Set to `true` to apply the "inverse" color scheme
   */
  inversed?: boolean;
  /**
   * Sets the input's `value`. Use in combination with an `onChange` handler to implement
   * a _controlled component_ pattern. This component expects the `value` to match
   * whatever string the user types (i.e., the first argument provided to your `onChange`
   * handler).
   */
  value?: string;
  /**
   * Sets the initial value. Use this for an uncontrolled component; otherwise,
   * use the `value` property.
   */
  defaultValue?: string;

  // From DayPicker
  // -------------------------
  /**
   * The initial month to show in the calendar picker. If not provided, defaults to the
   * month of the currently selected date.
   */
  defaultMonth?: Date;
  /**
   * Earliest day to start month navigation in the calendar picker.
   * (This does not restrict dates entered manually.)
   */
  fromDate?: Date;
  /**
   * Earliest month to start month navigation in the calendar picker.
   * (This does not restrict dates entered manually.)
   */
  fromMonth?: Date;
  /**
   * Earliest year to start month navigation in the calendar picker.
   * (This does not restrict dates entered manually.)
   */
  fromYear?: number;
  /**
   * Latest day to end month navigation in the calendar picker.
   * (This does not restrict dates entered manually.)
   */
  toDate?: Date;
  /**
   * Latest month to end month navigation in the calendar picker.
   * (This does not restrict dates entered manually.)
   */
  toMonth?: Date;
  /**
   * Latest year to end month navigation in the calendar picker.
   * (This does not restrict dates entered manually.)
   */
  toYear?: number;
}

export type SingleInputDateFieldProps = BaseSingleInputDateFieldProps &
  Omit<TextInputProps, keyof BaseSingleInputDateFieldProps | 'type'> &
  Omit<UseLabelPropsProps & UseHintProps & UseInlineErrorProps, 'id' | 'inversed'>;

/**
 * For information about how and when to use this component, refer to the
 * [Single Input Date Field](https://design.cms.gov/components/date-field/single-input-date-field/) and
 * [Calendar Picker](https://design.cms.gov/components/date-field/date-picker/) documentation pages.
 */
const SingleInputDateField = (props: SingleInputDateFieldProps) => {
  const {
    className,
    onChange,
    defaultMonth,
    fromDate,
    fromMonth,
    fromYear,
    toDate,
    toMonth,
    toYear,
    ...remainingProps
  } = props;
  const withPicker =
    (fromDate != null || fromMonth != null || Number.isInteger(fromYear)) &&
    (toDate != null || toMonth != null || Number.isInteger(toYear));
  const [pickerVisible, setPickerVisible] = useState(false);
  const id = useId('date-field--', props.id);
  const isControlled = remainingProps.value !== undefined;
  const [internalValueState, setInternalValueState] = useState(remainingProps.defaultValue);
  const value = isControlled ? remainingProps.value : internalValueState;

  // Set up change handlers
  const handleInputChange = (event) => {
    const updatedValue = event.currentTarget.value;
    if (onChange) {
      onChange(updatedValue, DATE_MASK(updatedValue, true));
    }
    if (!isControlled) {
      setInternalValueState(updatedValue);
    }
  };

  const handlePickerChange = (date: Date) => {
    const updatedValue = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const maskedValue = DATE_MASK(updatedValue);
    if (onChange) {
      onChange(maskedValue, DATE_MASK(updatedValue, true));
    }
    if (!isControlled) {
      setInternalValueState(maskedValue);
    }
    setPickerVisible(false);
    inputRef.current?.focus();
  };

  // Collect all the props and elements for the input and its labels
  const { errorId, topError, bottomError, invalid } = useInlineError({ ...props, id });
  const { hintId, hintElement } = useHint({ ...props, id });
  const labelProps = useLabelProps({ ...props, id });
  const inputRef = useRef<HTMLInputElement>();
  const { labelMask, inputProps } = useLabelMask(DATE_MASK, {
    ...cleanFieldProps(remainingProps),
    value,
    id,
    onChange: handleInputChange,
    type: 'text',
    inputRef: (el) => {
      inputRef.current = el;
    },
    'aria-invalid': invalid,
    'aria-describedby': describeField({ ...props, errorId, hintId }),
  });

  // Handle alternate ways of closing the day picker
  const dayPickerRef = useRef();
  const calendarButtonRef = useRef();
  useClickOutsideHandler([dayPickerRef, calendarButtonRef], () => setPickerVisible(false));
  usePressEscapeHandler(dayPickerRef, () => {
    setPickerVisible(false);
    inputRef.current?.focus();
  });

  // Validate the date string (value) and make date null if it's invalid. We don't want to pass
  // a bizarre date to DayPicker like `new Date('01/02')`, which is interpreted as `Jan 02, 2001`
  const dateString = DATE_MASK(props.value, true);
  const validDateString = isMatch(dateString, 'MM/dd/yyyy');
  const date = validDateString ? new Date(dateString) : null;

  return (
    <div
      className={classNames(
        'ds-c-single-input-date-field',
        withPicker && 'ds-c-single-input-date-field--with-picker',
        className
      )}
    >
      <Label {...labelProps} fieldId={id} />
      {hintElement}
      {topError}
      {labelMask}
      <div className="ds-c-single-input-date-field__field-wrapper">
        <TextInput {...inputProps} />
        {withPicker && (
          <button
            className="ds-c-single-input-date-field__button"
            onClick={() => setPickerVisible(!pickerVisible)}
            type="button"
            ref={calendarButtonRef}
            aria-describedby={mergeIds(labelProps.id, hintId)}
          >
            <CalendarIcon
              ariaHidden={false}
              title={t(pickerVisible ? 'singleInputDateField.close' : 'singleInputDateField.open')}
              id={`${id}__icon`}
            />
          </button>
        )}
      </div>
      {pickerVisible && (
        <div ref={dayPickerRef} role="dialog">
          <CustomDayPicker
            selected={date}
            onSelect={handlePickerChange}
            defaultMonth={date ?? defaultMonth}
            {...{
              fromDate,
              fromMonth,
              fromYear,
              toDate,
              toMonth,
              toYear,
            }}
          />
        </div>
      )}
      {bottomError}
    </div>
  );
};

export default SingleInputDateField;
