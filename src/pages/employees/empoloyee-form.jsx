import React, { useEffect } from 'react';
import {  Grid } from '@material-ui/core';

import {useForm, Form} from '../../components/custom-form/useForm';
import { InputControls } from '../../components/form-controls/input-controls.component';
import { RadioGroupControls } from '../../components/form-controls/radio-group.component';
import { SelectControls } from '../../components/form-controls/select-controls.component';
import * as employeeService from '../../services/employeeService';
import { CheckBoxControls } from '../../components/form-controls/checkbox-controls.component';
import { DatePickerControls } from '../../components/form-controls/date-picker,component';
import { CustomButtonControl } from '../../components/form-controls/button-controls.component';

const genderItems = [
  {
    id:'male', 
    title: 'Male'
  },
  {
    id:'female', 
    title: 'Female'
  },
  {
    id:'other', 
    title: 'Other'
  }
]

const initialValues = {
  id: 0,
  fullName: '', 
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hiredDate: new Date(),
  isPermanent: false
}



const EmployeeForm = (props) => {
  const {addOrEdit,recordForEdit} = props;

  const validate = (fieldValues = values) => {
    let temp = {...errors};
    if('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName? '': 'Your name is required';
    if('email' in fieldValues)
      temp.email = (/$^|.*@.*..*/).test(fieldValues.email)? '': 'Please enter valid email address';
    if('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9? '': 'Phone number must have 10 numbers';
    if('departmentId' in fieldValues)
      temp.departmentId = fieldValues.departmentId.length!==0? '': 'This field is required';
    setErrors({
      ...temp
    });
    if(fieldValues === values)
      return Object.values(temp).every(x => x === "")
  }
  
  const {
    values,
    setValues,
    errors,
    setErrors, 
    handleInputChange,
    resetForm
  } = useForm(initialValues, true, validate)

  const handleSubmit = event => {
    event.preventDefault()
    if(validate()){
      addOrEdit(values,resetForm)
      
    }
  }

  useEffect(() => {
    if(recordForEdit != null)
      setValues({
        ...recordForEdit
      })
    
  }, [recordForEdit,setValues])

  return (  
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <InputControls 
            variant= 'outlined'
            name = 'fullName'
            label='Full Name'
            value={values.fullName}
            error={errors.fullName}
            onChange= {handleInputChange}
          />
          <InputControls
            variant= 'outlined'
            name= 'email'
            label='Email'
            value={values.email}
            error={errors.email}
            onChange = {handleInputChange}
          />
          <InputControls
            variant= 'outlined'
            name= 'mobile'
            label='Mobile'
            value={values.mobile}
            error={errors.mobile}
            onChange = {handleInputChange}
          />
          <InputControls
            variant= 'outlined'
            name= 'city'
            label='City'
            value={values.city}
            onChange = {handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
        <RadioGroupControls 
          name='gender'
          label= 'Gender'
          value={values.gender}
          onChange = {handleInputChange}
          items= {genderItems}
        />

        <SelectControls 
          name='departmentId'
          label='Department'
          value={values.departmentId}
          onChange={handleInputChange}
          error={errors.departmentId}
          options= {employeeService.getDepartmentCollections()}
        />

        <DatePickerControls 
         name='hiredDate'
         label='Date Started'
         value={values.hiredDate}
         onChange={handleInputChange}
        />

        <CheckBoxControls 
          name='isPermanent'
          label='Permanent Employee'
          value={values.isPermanent}
          onChange={handleInputChange}
        />

        <div>
          <CustomButtonControl
            type='submit'
            text='Submit'
          />
          <CustomButtonControl
            type='reset'
            color='default'
            text='Reset'
            onClick= {resetForm}
          />
        </div>
          
        </Grid>
      </Grid>
    </Form>
    
  )
}
export default EmployeeForm;