import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Header from '../Components/Header';
import HeroUnit from '../Components/HeroUnit';
import CardDemo from '../Components/Card';
import Tabs from '../Components/Tabs';
import FAQ from '../Components/FAQ';
import Subscribe from '../Components/Subscribe';

const styles = theme => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [1, 2, 3];

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>

      <Header />

      <main>
       	<HeroUnit />

				<div className={classNames(classes.layout, classes.cardGrid)}>
					<Grid container spacing={40}>
					{cards.map(card => (
						<Grid item key={card} sm={12} md={6} lg={4}>
							<CardDemo image={require(`../images/card-${card}.jpg`)} />
						</Grid>
					))}
					</Grid>
				</div>

				<FAQ />

				<Tabs />

      </main>

      {/* Footer */}

			<footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
					<Subscribe />
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					Dialogue example!<br/>
          Something here to give the footer a purpose!
        </Typography>
      </footer>

      {/* End footer */}
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
