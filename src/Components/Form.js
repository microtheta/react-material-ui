import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	textField: {
		width: '100%'
	}
});

class FormExample extends React.Component {

	state={
		currency: ''
	}

	handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

	render() {
	const { classes } = this.props;

	return (
		<div className={classes.root}>
			<Grid container spacing={24}>
				<Grid item xs={12} sm={6}>
					<TextField
						id="standard-name"
						label="User Name"
						className={classes.textField}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id="standard-password"
						label="Password"
						type="password"
						className={classes.textField}
						margin="normal"
					/>
				</Grid>

				<Grid item xs={12} sm={4}>
					<TextField
						id="outlined-name"
						label="Name"
						className={classes.textField}
						margin="normal"
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} sm={4}>
					<TextField
						required
						id="outlined-required"
						label="Required"
						defaultValue="Hello World"
						className={classes.textField}
						margin="normal"
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} sm={4}>
					<TextField
						error
						required
						id="outlined-error"
						label="Error"
						defaultValue="123"
						className={classes.textField}
						margin="normal"
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} sm={4}>
					<TextField
						id="outlined-textarea"
						label="Multiline Placeholder"
						placeholder="Placeholder"
						multiline
						defaultValue={`some value
line 1`}
						className={classes.textField}
						margin="normal"
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} sm={4}>
					<TextField
						id="outlined-select-currency"
						select
						label="Select"
						value={this.state.currency}
          	onChange={this.handleChange('currency')}
						className={classes.textField}
						helperText="Please select your currency"
						margin="normal"
						variant="outlined"
					>
						{currencies.map(option => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={12} sm={4}>
				<TextField
					className={classes.textField}
					id="input-with-icon-textfield"
					label="Text field"
					helperText="Text field with Icon"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<AccountCircle />
							</InputAdornment>
						),
					}}
				/>
				</Grid>


			</Grid>
		</div>
	);
}
}

FormExample.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormExample);
