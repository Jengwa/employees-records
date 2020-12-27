import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { CustomButtonControl } from './button-controls.component';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const useDialogStyles = makeStyles(theme => ({
  dialog: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
  },
  dialogContent: {
    textAlign: 'center'
  },
  dialogActionBtns: {
    justifyContent: 'center'
  },
  titleContent: {
    textAlign: 'center'
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      cursor: 'default'
    },
    "&, MuiSvgIcon.root": {
      fontSize: '8rem'
    }
  }
}))

export const ConfirmDialog = (props) => {
  const { confirmDialog, setConfirmDialog} = props;
  const classes = useDialogStyles();
;  return (
    <Dialog open={confirmDialog.isOpen} classes= {{paper: classes.dialog}}>
      <DialogTitle className={classes.titleContent}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocationIcon fontSize= 'large'/>
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant='h6'>
          {confirmDialog.title}
        </Typography>
        <Typography variant='subtitle2'>
        {confirmDialog.subTitle}
      </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActionBtns}>
        <CustomButtonControl 
          text= 'No'
          color='default'
          onClick= {() => setConfirmDialog({ ...confirmDialog, isOpen: false})}
        />
        <CustomButtonControl 
        text= 'Yes'
        color='Secondary'
        onClick={confirmDialog.onConfirm}
      />
      </DialogActions>
    </Dialog>
  )
}
