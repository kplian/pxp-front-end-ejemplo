import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from './LoginStyle'
// import Alerts from "./components/Alerts";
import From from "./components/Form";
import {userService} from "../../_services/LoginService";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        userService.onSalir();
        this.state = {
            submitted: false,
            loading: false,
            error: ''
        };
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin(datos){
        this.setState({ submitted: true });
        if (!(datos.username && datos.password)) {
            return;
        }
        this.setState({ loading: true });
        userService.onLogin(datos.username,datos.password)
            .then(
                user => {
                    // user.ROOT.error
                    // user.ROOT.detalle.mensaje
                    console.log(user);
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(from);
                },
                error => this.setState({ error, loading: false })
            );
    }
    render(){
        const { classes } = this.props;
        const { loading } = this.state;
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            PXP
                        </Typography>

                        <From enviar={{
                            onLogin: this.onLogin,
                            loading: loading
                        }}/>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(useStyles)(LoginPage);