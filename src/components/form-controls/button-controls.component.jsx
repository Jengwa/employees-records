import React from 'react'
import {Button as MuiButton, makeStyles} from '@material-ui/core';

const useButtonsStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  },
  label:{
    textTransform: 'none'
  }
}))

export const CustomButtonControl = (props) => {
  const {text, size, color, variant, onClick, ...otherProps} = props;
  const classes = useButtonsStyles();
  return (
    <MuiButton classes = {{root: classes.root, label: classes.label}}
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...otherProps}
      
    >
      {text}
    </MuiButton>
  )
}
