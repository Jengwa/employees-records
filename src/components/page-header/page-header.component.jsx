
import React from 'react'
import { Card, makeStyles, Paper, Typography } from '@material-ui/core';

// the elavation atribute is to elavate the the page see the materialUi docs for more details.
// the square attribuete is to make sure all the corners dosent have the default round corners 
// typography component is use to display text such as header of the page.

const usePageHeaderStyles = makeStyles(theme =>({
  root: {
    backgroundColor: '#fdfdff'

  },
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(2),
    color: '#3c44b1'
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: '0.6'
    }
  }

}))

const PageHeader = ({title,subTitle, icon}) => {
  const classes = usePageHeaderStyles();
  return (
   <Paper elevation={0} square className= {classes.root}>
    <div className={classes.pageHeader}>
      <Card className={classes.pageIcon}>
        {icon}
      </Card>
      <div className= {classes.pageTitle}>
        <Typography 
          variant='h6'
          component='div'
        >
        {title}
        </Typography>
        <Typography 
          variant='subtitle2'
          component='div'
        >
          {subTitle}
        </Typography>
      </div>
    </div>
   </Paper>
  )
}
export default PageHeader;