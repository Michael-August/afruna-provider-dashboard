import React from 'react';
import { Field, useField } from 'formik';
import ReactFlagSelect from 'react-flags-select';

export const CustomFlagsSelect = ({ name, ...rest }: any) => {
  const [field, meta, helpers] = useField(name);

  return (
    <ReactFlagSelect
      className="shadow-md px-[23px] border border-[#D3D3D3] py-[16px] rounded-lg outline-0 focus:border-[1px] focus:border-[#FFDBB6]"
      selected={field.value}
      onSelect={val => {
        helpers.setValue(val);
      }}
      searchable={true}  // Add any other props you need
      {...rest}
    />
  );
};