import React from 'react';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Grid, Toolbar, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core';

// to use the theme func we need to call it like bellow then use it in our jss using
// theme.spacing(1) one is equv to 8px so if we need 16px we us 2 or 1,5 to get 12px.

const useStyles = makeStyles(theme => ({
	navRoot: {
		backgroundColor:'#fff',
		transform: 'translateZ(0)'
	},
	searchInput: {
		opaccity: '0,6',
		padding: `0px ${theme.spacing(1)}px`,
		fontSize: '0,6',
		"&:hover": {
			backgroundColor: '#f2f2f2'
		},
		"& .MuiSvgIcon-root": {
			marginRight: theme.spacing(1)
		}
	}
})) 

const NavBar = () =>{
	const classes = useStyles();
	return(
		<AppBar position="static" className={classes.navRoot}>
			<Toolbar>
				<Grid container alignItems='center'>
					<Grid item>
						<InputBase
							className={classes.searchInput}
							placeholder='Search' startAdornment={<SearchIcon fontSize='small'/>}
						/>	
					</Grid>
					<Grid item sm></Grid>
					<Grid item>
						<IconButton>
							<Badge badgeContent={4} color="secondary">
								<NotificationsActiveIcon fontSize='small'/>
							</Badge>
						</IconButton>
						<IconButton>
							<Badge badgeContent={3} color="primary">
								<ChatBubbleOutlineIcon fontSize='small' />
							</Badge>
						</IconButton>
						<IconButton>
							<PowerSettingsNewIcon fontSize='small'/>
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>

	)
};


export default NavBar;
