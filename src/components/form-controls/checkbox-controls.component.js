import React from 'react';
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';


export const CheckBoxControls = (props) => {
  const {  name, label, value, onChange } = props;

  const convertDefaltEventProps = (name,value) => ({
    target: {
      name,
      value
    }
  });

  return (
    <FormControl>
      <FormControlLabel 
        control=
        {<MuiCheckbox 
          name={name}
          checked={value}
          color='primary'
          onChange={e => onChange(convertDefaltEventProps(name, e.target.checked))} 
        />} 
      label={label}
      />
    </FormControl>
  )
}