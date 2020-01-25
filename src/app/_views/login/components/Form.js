import React from "react";
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

import { withStyles } from '@material-ui/core/styles';

const useStyles = theme =>({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
});

class From extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    onSubmit(e){
        e.preventDefault();
        const { username, password } = this.state;
        const credential = {username, password};
        this.props.enviar.onLogin(credential);
    }
    render() {
        const { classes } = this.props;
        const { username, password} = this.state;
        const buttonClassname = clsx({
            [classes.buttonSuccess]: this.props.enviar.loading ,
        });
        return (
            <form className={classes.form} onSubmit={this.onSubmit}>
                <TextField  id="username"
                            name="username"
                            label="Cuenta"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="text"
                            value={username} onChange={this.handleChange}/>

                <TextField  variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password} onChange={this.handleChange}/>

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recuérdame"/>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={this.props.enviar.loading }
                    className={buttonClassname}>
                    Iniciar sesión
                </Button>
                {this.props.enviar.loading && <CircularProgress size={24} className={classes.buttonProgress} />}

                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            {"No tienes una cuenta? Regístrate"}
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="http://www.kplian.com/">
                            Powered by KPLIAN LTDA
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Box>
            </form>
        )
    }
}
export default withStyles(useStyles)(From);
