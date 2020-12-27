import React from 'react'
import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import { ActionButon } from '../form-controls/action-button.component';
import CloseIcon from '@material-ui/icons/Close';

const usePopUpStyles = makeStyles(theme => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
  },
  dialogTitle: {
    padding: '0px'
  }
}))

export const PopUp = (props) => {

  const { title, children, openPopUp, setOpenPopUp } = props;
  const classes = usePopUpStyles();

  return (

    <Dialog open={openPopUp} maxWidth='md' classes={{paper :classes.dialogWrapper}}>
      <DialogTitle className={classes.dialogTitle}>
        <div style={{display: 'flex'}}>
          <Typography variant='h6' component='div' style={{flexGrow:1}}>
            {title}
          </Typography>
          <ActionButon
            color= 'secondary'
            onClick={() => setOpenPopUp(false)}
          >  
            <CloseIcon />
          </ActionButon>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  )
}
