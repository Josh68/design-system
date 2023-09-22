import React from 'react';
import Autocomplete from './Autocomplete';
import TextField from '../TextField/TextField';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultItems = [{ id: 'kRf6c2fY', name: 'Cook County, IL' }];

function makeAutocomplete(customProps = {}) {
  const props = {
    items: defaultItems,
    children: <TextField label="autocomplete" name="autocomplete_field" />,
    id: 'static-id',
    ...customProps,
  };
  return render(<Autocomplete {...props} />);
}

function open() {
  const autocompleteField = screen.getByRole('combobox');
  userEvent.click(autocompleteField);
  userEvent.type(autocompleteField, 'c');
}

function expectMenuToBeOpen() {
  expect(screen.getByRole('listbox')).toBeInTheDocument();
}

function expectMenuToBeClosed() {
  expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
}

describe('Autocomplete', () => {
  it('renders a closed Autocomplete component', () => {
    const { container } = makeAutocomplete();

    const wrapperEl = container.querySelectorAll('.ds-c-autocomplete');
    expect(wrapperEl.length).toEqual(1);

    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-autocomplete', 'list');
    expect(input).toHaveAttribute('aria-controls');
    expect(input).toHaveAttribute('aria-expanded', 'false');
    expect(input).toHaveAttribute('role', 'combobox');
    expect(input).toHaveAttribute('type', 'text');

    const labelId = input.getAttribute('aria-labelledby');
    const label = container.querySelector(`#${labelId}`);
    expect(label).toBeInTheDocument();

    const menuEl = container.querySelector('.ds-c-autocomplete__menu-container');
    expect(menuEl).not.toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.classList).toContain('ds-c-autocomplete__clear-btn');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAccessibleName('Clear search to try again');
  });

  it('renders items', () => {
    makeAutocomplete();

    open();
    expectMenuToBeOpen();

    const items = screen.getByRole('option');
    expect(items).toBeInTheDocument();
    expect(items).toHaveTextContent('Cook County, IL');
  });

  it('renders items with children property', () => {
    const items = [
      {
        id: '1',
        name: 'Carrots (1)',
        children: (
          <>
            Carrots <strong>(1)</strong>
          </>
        ),
      },
      {
        id: '2',
        name: 'Cookies (3)',
        children: (
          <>
            Cookies <strong>(3)</strong>
          </>
        ),
      },
      {
        id: '3',
        name: 'Crackers (2)',
        children: (
          <>
            Crackers <strong>(2)</strong>
          </>
        ),
      },
      {
        id: '4',
        name: 'Search all snacks',
        children: <a href="https://duckduckgo.com/?q=snacks">Search all snacks</a>,
      },
    ];

    makeAutocomplete({ items });
    open();
    const ul = screen.getByRole('listbox');
    expect(ul).toMatchSnapshot();
  });

  it('generates ids when no id is provided', () => {
    makeAutocomplete({ id: undefined });
    open();
    const idRegex = /autocomplete--\d+/;
    expect(screen.getByRole('listbox').id).toMatch(idRegex);
    expect(screen.getByRole('combobox').id).toMatch(idRegex);
  });

  it('renders item with custom className', () => {
    const items = [
      { id: '1a', name: 'Normal item' },
      { id: '5b', name: 'Special item', className: 'custom-class' },
    ];
    makeAutocomplete({ items });

    open();
    expectMenuToBeOpen();

    const listItems = screen.queryAllByRole('option');
    expect(listItems[1]).toHaveClass('custom-class');
    expect(listItems).toMatchSnapshot();
  });

  it('renders Autocomplete component without items', () => {
    makeAutocomplete({ items: undefined });
    open();
    expectMenuToBeClosed();
  });

  it('renders Autocomplete component no results', () => {
    makeAutocomplete({ items: [] });
    open();
    expect(screen.queryByRole('listbox').children.length).toEqual(1);
    expect(screen.queryByRole('option')).toHaveTextContent('No results');
  });

  it('shows the menu when open', () => {
    makeAutocomplete();
    open();
    expectMenuToBeOpen();
  });

  it('opens the menu when focusing on an input that has text in it', () => {
    makeAutocomplete({
      children: <TextField label="autocomplete" name="autocomplete_field" value="abc" />,
    });
    const autocompleteField = screen.getByRole('combobox');
    autocompleteField.focus();
    expectMenuToBeOpen();
  });

  it('does not render a clear search button when clearSearchButton is set to false', () => {
    makeAutocomplete({ clearSearchButton: false });

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders custom class names', () => {
    const { container } = makeAutocomplete({ className: 'additional-class' });
    const child = container.querySelector('.ds-c-autocomplete');

    expect(child).toHaveClass('additional-class');
  });

  describe('default props', () => {
    it('defaults ariaClearLabel', () => {
      makeAutocomplete();
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      expect(button).toHaveAttribute('aria-label', 'Clear search to try again');
    });

    it('defaults clearInputText', () => {
      makeAutocomplete();
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      expect(button).toHaveTextContent('Clear search');
    });
  });

  it('should set the input value correctly when a listbox selection is clicked', () => {
    const onChange = jest.fn();
    makeAutocomplete({ onChange });
    const autocompleteField = screen.getByRole('combobox') as HTMLInputElement;
    userEvent.click(autocompleteField);
    userEvent.type(autocompleteField, 'c');

    const listboxItem = screen.getByRole('option');
    userEvent.click(listboxItem);

    expect(autocompleteField.value).toBe('Cook County, IL');
    expect(onChange).toHaveBeenCalledWith(defaultItems[0]);
  });

  it('should set the input value to empty when "Clear search" is clicked', () => {
    makeAutocomplete();
    const autocompleteField = screen.getByRole('combobox') as HTMLInputElement;
    userEvent.click(autocompleteField);
    userEvent.type(autocompleteField, 'c');

    const listboxItem = screen.getByRole('option');
    userEvent.click(listboxItem);

    const clearButton = screen.getByText('Clear search');
    userEvent.click(clearButton);

    expect(autocompleteField.value).toBe('');
  });

  it('should call onChange with null item when "Clear search" is clicked', () => {
    const onChange = jest.fn();
    makeAutocomplete({ onChange });
    const autocompleteField = screen.getByRole('combobox') as HTMLInputElement;
    userEvent.click(autocompleteField);
    userEvent.type(autocompleteField, 'c');

    const listboxItem = screen.getByRole('option');
    userEvent.click(listboxItem);

    const clearButton = screen.getByText('Clear search');
    userEvent.click(clearButton);

    expect(autocompleteField.value).toBe('');
    expect(onChange).toHaveBeenLastCalledWith(null);
  });

  it('should select list items by keyboard', () => {
    const onChange = jest.fn();
    makeAutocomplete({ onChange });
    const autocompleteField = screen.getByRole('combobox') as HTMLInputElement;
    userEvent.click(autocompleteField);
    userEvent.type(autocompleteField, 'c');
    userEvent.type(autocompleteField, '{arrowdown}');
    userEvent.type(autocompleteField, '{enter}');

    expect(autocompleteField.value).toBe('Cook County, IL');
    expect(onChange).toHaveBeenCalledWith(defaultItems[0]);
  });

  it('should not call onChange when an item was not selected', () => {
    const onChange = jest.fn();
    makeAutocomplete({ onChange });
    const autocompleteField = screen.getByRole('combobox') as HTMLInputElement;
    userEvent.click(autocompleteField);
    userEvent.type(autocompleteField, 'c');
    userEvent.type(autocompleteField, 'o');
    userEvent.type(autocompleteField, '{enter}');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should clear the input value by keyboard', () => {
    makeAutocomplete();
    const autocompleteField = screen.getByRole('combobox') as HTMLInputElement;
    autocompleteField.focus();
    userEvent.click(autocompleteField);
    userEvent.type(autocompleteField, 'c');
    userEvent.type(autocompleteField, '{arrowdown}');
    userEvent.type(autocompleteField, '{enter}');

    expect(autocompleteField.value).toBe('Cook County, IL');

    userEvent.tab();

    const clearButton = screen.getByText('Clear search');
    userEvent.click(clearButton);

    expect(autocompleteField.value).toBe('');
  });

  it('closes the listbox when ESC is pressed', () => {
    makeAutocomplete();
    const autocompleteField = screen.getByRole('combobox') as HTMLInputElement;
    userEvent.click(autocompleteField);
    userEvent.type(autocompleteField, 'c');

    expectMenuToBeOpen();

    expect(autocompleteField.value).toEqual('c');

    userEvent.type(autocompleteField, '{esc}');

    expectMenuToBeClosed();
  });

  it("calls child TextField's event handlers", () => {
    const props = {
      label: 'autocomplete',
      name: 'autocomplete_field',
      onFocus: jest.fn(),
      onChange: jest.fn(),
      onKeyDown: jest.fn(),
      // onTouchEnd : jest.fn(), Doesn't look like we can actually test onTouchEnd
      onBlur: jest.fn(),
    };
    makeAutocomplete({ children: <TextField {...props} /> });
    const field = screen.getByRole('combobox');
    userEvent.click(field);
    expect(props.onFocus).toHaveBeenCalledTimes(1);
    userEvent.type(field, 'c');
    expect(props.onKeyDown).toHaveBeenCalledTimes(1);
    expect(props.onChange).toHaveBeenCalledTimes(1);
    userEvent.tab();
    expect(props.onBlur).toHaveBeenCalledTimes(1);
  });
});
