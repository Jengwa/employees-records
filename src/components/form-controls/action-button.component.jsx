import { Button, makeStyles } from '@material-ui/core';
import React from 'react'

const useActionButtonStyles = makeStyles(theme => ({
 root: {
   minWidth: 0,
   margin: theme.spacing(0.5)
 },
 secondary: {
   backgroundColor: theme.palette.secondary.light,
   "& .MuiButton-label": {
     color:theme.palette.secondary.main
   }
 },
 primary: {
  backgroundColor: theme.palette.primary.light,
  "& .MuiButton-label": {
    color:theme.palette.primary.main
  }
},
 
}))

export const ActionButon =(props) => {

  const {color, children, onClick} = props;
  const classes = useActionButtonStyles()
  return (
    <Button
      className={`${classes.root} ${classes[color]}`}
      onClick={onClick}
     
    >
      {children}
    </Button>
  )
}
