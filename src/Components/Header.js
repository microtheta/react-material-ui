import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import BrandIcon from '@material-ui/icons/AcUnit';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
	grow: {
		flexGrow: 1,
	},
	icon: {
		marginRight: theme.spacing.unit,
	}
});

class Header extends React.Component {

	state = {
		anchorEl: null,
	};


	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		return (
			<AppBar position="sticky">
				<Toolbar>
					<BrandIcon fontSize="large" className={classes.icon} />

					<Typography variant="h6" color="inherit" noWrap className={classes.grow}>
						WELCOME
          </Typography>

					<div>
						<IconButton
							aria-owns={open ? 'menu-appbar' : undefined}
							aria-haspopup="true"
							onClick={this.handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={open}
							onClose={this.handleClose}
						>
							<MenuItem onClick={this.handleClose}>Profile</MenuItem>
							<MenuItem onClick={this.handleClose}>My account</MenuItem>
						</Menu>
						<Button color="inherit">Help</Button>
					</div>

				</Toolbar>
			</AppBar>
		)
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
