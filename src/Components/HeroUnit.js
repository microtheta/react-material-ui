import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Image from '../images/header_back-1.jpg';


const styles = theme => ({
	heroUnit: {
		backgroundColor: theme.palette.background.paper,
		backgroundImage: `url(${Image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	heroContent: {
		maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
		color: theme.palette.background.paper
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4,
	}
});

function Hero(props) {
	const { classes } = props;

	return (
		<div className={classes.heroUnit}>
			<div className={classes.heroContent}>
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					Welcome to my page
        </Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
					Something short and leading about the collection below—its contents, the creator, etc.
					Make it short and sweet, but not too short so folks don&apos;t simply skip over it
					entirely.
				</Typography>
				<div className={classes.heroButtons}>
					<Grid container spacing={16} justify="center">
						<Grid item>
							<Button variant="contained" color="primary">
								Call to action
							</Button>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

Hero.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
