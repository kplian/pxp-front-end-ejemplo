import {clientRestPxp} from "../_client_pxp/clientRestPxp";
import {url} from "../setting";
import {md5} from "../_client_pxp/md5";
export const userService = {
    onLogin,
    onSalir
};
function onLogin(username, password) {
    const client = new clientRestPxp(url, 'IP');
    client.setCredentialsPxp(username, md5(password));
    const header = client.genHeaders();
    const accion = client._urlRequest('seguridad/Auten/verificarCredenciales');
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: Object.assign({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }, header),
    };
        return fetch(accion, requestOptions).then(res => res.text())
        .catch(error => console.log('Error:', error))
        .then(response => {
            // eslint-disable-next-line no-eval
            let obj = eval('(' + response + ')');
            let user = JSON.parse(JSON.stringify(obj));
            if (user) {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}
function onSalir() {
    localStorage.removeItem('user');
}