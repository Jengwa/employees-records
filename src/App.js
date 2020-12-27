import React from 'react';
import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import SideMenu from './components/side-menu/side-menu.component';
import NavBar from './components/nav-bar/nav-bar.component';
import Employees from './pages/employees/employees.component';

// the cssBaseline is used to import all the default behaviour of the browser such as border box = box

//the way that we overight default themes of material ui themes and then enclose all,
//the returned properties with the ThemeProvider element.

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)'
        }
      }
    },
    props: {
      MuiIconButton: {
        disableRipple: true
      }
    }
  }
})

const useAppStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})
const App = () => {
  const classes = useAppStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <NavBar />
        
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
