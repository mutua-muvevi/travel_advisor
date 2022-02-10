import React from "react";
import {Autocomplete} from "@react-google-maps/api"
import {
	AppBar,
	Typography,
	Toolbar,
	InputBase,
	Box
} from "@material-ui/core";
import useStyles from './styles.js';
import SearchIcon from "@material-ui/icons/Search"

const Header = () => {
	const classes = useStyles()

	return (
		<AppBar position="static">
			<Toolbar className={classes.toolbar}>
				<Typography variant="h5" className={classes.title}>
					Travel Advisory
				</Typography>
				<Box display="flex">
					<Typography variant="h6" className={classes.title}>
						Explore New Places
					</Typography>
					{/* <Autocomplete> */}
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase 
								placeholder="Search…" 
								classes={{ root: classes.inputRoot, input: classes.inputInput }} />
						</div>
					{/* </Autocomplete> */}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header