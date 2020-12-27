import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';

 export const useForm = (initialValues, validateOnChange= false, validate) => {
   const [values, setValues ] = useState(initialValues);
   const [errors, setErrors ] = useState({});

   const handleInputChange = (e) => {
    const { name,value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
    if(validateOnChange)
    validate({[name]: value})

  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }
  return {
    values,
    setValues,
    errors, 
    setErrors,
    handleInputChange,
    resetForm
  }
 
};

const useFormStyles = makeStyles(theme => ({
  root: {
    "& .MuiFormControl-root": {
      width: '80%',
      margin: theme.spacing(2)
    }
  }
}));

export const Form = (props) => {
  const {children, ...otherProps} = props;
  const classes = useFormStyles();
  return (
    <form className= { classes.root} autoComplete='off' {...otherProps}>
      {props.children}
    </form>
  )
    
}
