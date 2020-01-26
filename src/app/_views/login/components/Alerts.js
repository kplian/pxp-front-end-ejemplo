import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));
export default function Alerts(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Alert severity= "error">
                <AlertTitle>Error</AlertTitle>
                {props.mensaje}
            </Alert>
        </div>
    );
}
