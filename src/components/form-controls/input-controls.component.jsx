import React from 'react';
import { TextField } from '@material-ui/core';

 export const InputControls = (props) => {
   const {name, label, value, error=null, onChange, ...otherProps} = props;
  return (
    <div>
      <TextField 
        variant= 'outlined'
        name = {name}
        label={label}
        value={value}
        onChange= {onChange}
        {...otherProps}
        {...(error && {error: true, helperText: error})}
      />
    </div>
  )
}
