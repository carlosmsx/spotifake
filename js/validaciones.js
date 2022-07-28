export function campoRequerido(input) {
    if (input.value.trim().length > 0) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

export function cantidadCaracteres(input, min, max) {
    let text = input.value.trim();

    if (text.length >= min && text.length <= max) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validarSoloLetras(input, min, max) {
    let patron = /^[A-Z\s]+$/i;
    let text = input.value.trim();

    if (text.length >= min && text.length <= max) {
        if (patron.test(input.value.trim())) {
            input.className = "form-control is-valid";
            return true;
        } else {
            input.className = "form-control is-invalid";
            return false;
        }
    } else {
        input.className = " form-control is-invalid";
        return false;
    }
}

export function validarGmail(input) {
    let patron = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (patron.test(input.value.trim())) {
        input.className = " form-control is-valid";
        return true;
    } else {
        input.className = " form-control is-invalid";
        return false;
    }
}

export function funclave(input) {
    let patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if (patron.test(input.value.trim())) {
        input.className = " form-control is-valid";
        return true;
    } else {
        input.className = " form-control is-invalid";
        return false;
    }
}

export function validarClave(clave1, input) {
    if (clave1.value === input.value && input.value != "") {
        input.className = " form-control is-valid";
        return true;
    } else {
        input.className += " is-invalid";
        input.value = null;
        return false;
    }
}

export function limpiarClaveValidada(input) {
    input.value = null;
    input.className = "form-control ";
}

export function validarfechaNacimiento(input) {
    let patron = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;

    if (patron.test(input.value.trim())) {
        
        let anioIngresado = patron.exec(input.value.trim())[4];
        let anioactual = new Date().getFullYear();

        if (anioIngresado >= 1930 && anioIngresado <= anioactual - 18) {
            input.className = "form-control is-valid";
            return true;
        } else {
            input.className += " is-invalid";
            return false;
        }
    } else {
        input.className += " is-invalid";
    }
}

export function validarGenero(input) {
    if (input.value.trim().length > 0) {
        input.className = " form-control is-valid";
        return true;
    } else {
        input.className += " is-invalid";
        return false;
    }
}

export function validarPais(input) {
    if (input.value.trim().length > 0) {
        input.className = " form-control is-valid";
        return true;
    } else {
        input.className += " is-invalid";
        return false;
    }
}

export function validarUrl(input) {
    let patron = /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
    if (patron.test(input.value.trim())) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
