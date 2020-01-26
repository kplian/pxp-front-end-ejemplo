import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {tablaService} from "../../../../_services/TablaService";
import FormContent from "./FormContent";
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
 class Content extends React.Component {
     state = {
         rows: []
     };
     componentDidMount() {
         tablaService.listarPersons().then(resultado =>{
             this.setState({ rows: resultado.datos })
         });
     }
     onInsertar(datos){

         tablaService.insertat(datos).then(resultado =>{
            console.log(resultado)
         });
     }
    render() {
        const { classes } = this.props;
        const {rows} = this.state;
        return(
                <div>
                    <FormContent  enviar={{onInsertar: this.onInsertar}}/>
                    <br/> <br/>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell align="center">Paterno</TableCell>
                                    <TableCell align="center">Materno</TableCell>
                                    <TableCell align="center">Tipo&nbsp;Documentos</TableCell>
                                    <TableCell align="center">CI</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.id_persona}>
                                        <TableCell component="th" scope="row">
                                            {row.nombre}
                                        </TableCell>
                                        <TableCell align="center">{row.ap_paterno}</TableCell>
                                        <TableCell align="center">{row.ap_materno}</TableCell>
                                        <TableCell align="center">{row.tipo_documento}</TableCell>
                                        <TableCell align="center">{row.ci}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

        )
    }
}
export default withStyles(useStyles)(Content);