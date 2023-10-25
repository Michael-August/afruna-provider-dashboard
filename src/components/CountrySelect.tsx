import React from 'react';
import Select from 'react-select';
import countryList from 'country-flag-icons';

const CountrySelect = ({ value, onChange }: any) => {
  const options = countryList({ useFlagIcons: true }).getData();

  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
    />
  );
};

export default CountrySelect;