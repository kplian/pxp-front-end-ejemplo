import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

 class FormContent extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             id_persona: 0,
             ap_materno: '',
             ap_paterno: '',
             nombre:'',
             nombre_completo1:'',
             nombre_completo2:'',
             ci: '',
             correo: '',
             celular1: '',
             num_documento: '',
             telefono1: '',
             telefono2: '',
             celular2: '',
             extension: "jpg",
             tipo_documento: '',
             expedicion: ''
         };
         this.onSubmit = this.onSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);

     }
     handleChange(e) {
         const { name, value } = e.target;
         this.setState({ [name]: value });
     }
     onSubmit(e){
         e.preventDefault();
         const { nombre, ap_paterno, ap_materno, tipo_documento, ci} = this.state;
         const parametros = {
                                 ap_materno: ap_materno,
                                 ap_paterno: ap_paterno,
                                 nombre: nombre,
                                 nombre_completo1:'',
                                 nombre_completo2:'',
                                 ci: ci,
                                 correo: '',
                                 celular1: '',
                                 num_documento: '',
                                 telefono1: '',
                                 telefono2: '',
                                 celular2: '',
                                 extension: "jpg",
                                 tipo_documento: tipo_documento,
                                 expedicion: ''
         };
         this.props.enviar.onInsertar(parametros);

         e.target.reset();
     }
    render() {
        const { classes } = this.props;
        const { nombre, ap_paterno, ap_materno, tipo_documento, ci} = this.state;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={this.onSubmit}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            + Persona
                        </Button>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="nombre"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="nombre"
                                    label="Nombre"
                                    autoComplete="off"
                                    value={nombre} onChange={this.handleChange}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="ap_paterno"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="ap_paterno"
                                    label="Apellido Paterno"
                                    autoComplete="off"
                                    value={ap_paterno} onChange={this.handleChange}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="ap_materno"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="ap_materno"
                                    label="Apellido Materno"
                                    autoComplete="off"
                                    value={ap_materno} onChange={this.handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                    label="Tipo Documento"
                                    name="tipo_documento"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    labelId="tipo_documento-label"
                                    id="tipo_documento"
                                    autoComplete="off"
                                    value={tipo_documento}
                                    onChange={this.handleChange}>
                                    <MenuItem value={'documento_identidad'}>documento_identidad</MenuItem>
                                    <MenuItem value={'pasaporte'}>pasaporte</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="ci"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="ci"
                                    label="Codigo"
                                    autoComplete="off"
                                    value={ci} onChange={this.handleChange}/>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}
export default withStyles(useStyles)(FormContent);
