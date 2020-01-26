import {clientRestPxp} from "../_client_pxp/clientRestPxp";
import {url} from "../setting";

export const tablaService = {
    listarPersons,
    insertat
};
function listarPersons() {
    const client = new clientRestPxp(url, 'IP');
    const header = {
        'Pxp-user': 'miguel',
        'Php-Auth-User': '+Z5MYCePuBJ1LWdiRqelnxXANXdRjfjf2Wccshb4jFU='
    };
    const accion = client._urlRequest('seguridad/Persona/listarPersonaFoto');
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({"start":"0","limit":"50","sort":"nombre","dir":"ASC"}),
        headers: Object.assign({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }, header),
    };
    return fetch(accion, requestOptions).then(res => res.text())
        .catch(error => console.log('Error:', error))
        .then(response => {
            // eslint-disable-next-line no-eval
            let obj = eval('(' + response + ')');
            let resp = JSON.parse(JSON.stringify(obj));
            return resp;
        });
}
function insertat(boby) {
    const client = new clientRestPxp(url, 'IP');
    const header = {
        'Pxp-user': 'miguel',
        'Php-Auth-User': '+Z5MYCePuBJ1LWdiRqelnxXANXdRjfjf2Wccshb4jFU='
    };
    const accion = client._urlRequest('seguridad/Persona/guardarPersona');
    const params = new URLSearchParams();
    params.append('ap_materno', boby.ap_materno);
    params.append('ap_paterno', boby.ap_paterno);
    params.append('nombre', boby.nombre);
    params.append('ci', boby.ci);
    params.append('celular1', boby.celular1);
    params.append('telefono1', boby.telefono1);
    params.append('telefono2', boby.telefono2);
    params.append('celular2', boby.celular2);
    params.append('tipo_documento', boby.tipo_documento);
    params.append('expedicion', boby.expedicion);
    params.append('correo', 'as');

    const requestOptions = {
        method: 'POST',
        body:params,
        headers: Object.assign({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }, header),
    };
    return fetch(accion, requestOptions).then(res => res.text())
        .catch(error => console.log('Error:', error))
        .then(response => {
            // eslint-disable-next-line no-eval
            let obj = eval('(' + response + ')');
            let resp = JSON.parse(JSON.stringify(obj));
            return resp;
        });
}