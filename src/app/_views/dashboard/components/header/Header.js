import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './HeaderStyle'
function ComponentHeader(props) {
    const { classes, onDrawerToggle } = props;
    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Hidden smUp>
                            <Grid item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    className={classes.menuButton}>
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item xs />
                        <Grid item>
                            <Link className={classes.link} href="#" variant="body2">
                                Go to docs
                            </Link>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" className={classes.iconButtonAvatar}>
                                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar component="div"
                    className={classes.secondaryBar}
                    color="primary"
                    position="static"
                    elevation={0}>
                    <Toolbar>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item xs>
                                <Typography color="inherit" variant="h5" component="h1">
                                   Persona
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
            </AppBar>

        </React.Fragment>
    );
}

ComponentHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(ComponentHeader);