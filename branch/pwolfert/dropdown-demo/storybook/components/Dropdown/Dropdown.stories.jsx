import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    children: { control: false },
    options: { control: false },
    requirementLabel: { control: 'text' },
  },
};

const dropdownOptions = ["Confederated Tribes and Bands of the Yakama Nation",
"Confederated Tribes of the Chehalis Reservation",
"Confederated Tribes of the Colville Reservation",
"Cowlitz Indian Tribe",
"Hoh Indian Tribe (formerly the Hoh Indian Tribe of the Hoh Indian Reservation)",
"Jamestown S'Klallam Tribe",
"Kalispel Indian Community of the Kalispel Reservation",
"Lower Elwha Tribal Community (formerly the Lower Elwha Tribal Community of the Lower Elwha Reservation)",
"Lummi Tribe of the Lummi Reservation",
"Makah Indian Tribe of the Makah Indian Reservation",
"Muckleshoot Indian Tribe (formerly the Muckleshoot Indian Tribe of the Muckleshoot Reservation)",
"Nisqually Indian Tribe (formerly the Nisqually Indian Tribe of the Nisqually Reservation)",
"Nooksack Indian Tribe",
"Port Gamble S'Klallam Tribe (formerly the Port Gamble Band of S'Klallam Indians)",
"Puyallup Tribe of the Puyallup Reservation",
"Quileute Tribe of the Quileute Reservation",
"Quinault Indian Nation (formerly the Quinault Tribe of the Quinault Reservation)",
"Samish Indian Nation (formerly the Samish Indian Tribe)",
"Sauk-Suiattle Indian Tribe",
"Shoalwater Bay Indian Tribe of the Shoalwater Bay Indian Reservation (previously listed as Shoalwater Bay Tribe of the Shoalwater BayIndian Reservation, Washington)",
"Skokomish Indian Tribe (formerly the Skokomish Indian Tribe of the Skokomish Reservation)",
"Snoqualmie Indian Tribe (previously listed as Snoqualmie Tribe, Washington)",
"Spokane Tribe of the Spokane Reservation",
"Squaxin Island Tribe of the Squaxin Island Reservation",
"Stillaguamish Tribe of Indians of Washington (previously listed as Stillaguamish Tribe of Washington)",
"Suquamish Indian Tribe of the Port Madison Reservation",
"Swinomish Indian Tribal Community (previously listed as Swinomish Indians of the Swinomish Reservation of Washington)",
"Tulalip Tribes of Washington",
"Upper Skagit Indian Tribe"].map(tribeName => ({ label: tribeName, value: tribeName }));

const optGroupData = (
  <>
    <optgroup label="Option group">
      <option value="1-1">Option 1</option>
      <option value="1-2">Option 2</option>
      <option value="1-3">Option 3</option>
    </optgroup>
    <optgroup label="More option groups">
      <option value="2-1">Option 4</option>
      <option value="2-2">Option 5</option>
      <option value="2-3">Option 6</option>
    </optgroup>
  </>
);

const Template = (args) => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  options: dropdownOptions,
  label: 'Dropdown example',
  name: 'dropdown_field',
};

export const WithError = Template.bind({});
WithError.args = {
  options: dropdownOptions,
  errorMessage: 'Example error message',
  hint: 'Helpful hint text',
  label: 'Error example',
  name: 'error_dropdown_field',
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: dropdownOptions,
  label: 'Disabled example',
  disabled: true,
  name: 'disabled_dropdown_field',
};

export const OptionGroup = Template.bind({});
OptionGroup.args = {
  options: [],
  defaultValue: '1-1',
  label: 'Option group example',
  name: 'custom_dropdown_field',
  children: optGroupData,
};

export const InverseOption = Template.bind({});
InverseOption.args = {
  options: dropdownOptions,
  errorMessage: 'Example error message',
  hint: 'Helpful hint text',
  label: 'Inverse example',
  name: 'inverse_dropdown_field',
  inversed: true,
};
InverseOption.parameters = {
  baseInverse: true,
};
