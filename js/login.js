
const inputUsuario = document.getElementById("inputUsuario")
const inputClave = document.getElementById("inputClave")
// const formLogin = document.getElementById("formLogin")

class Usuario {
    constructor(usuario, clave){
        this.usuario = usuario;
        this.clave = clave
    }
}

// formLogin.addEventListener("submit", login);

export function login(e){
    e.preventDefault()
    let usuarioIngresado = new Usuario(inputUsuario.value, inputClave.value)
    console.log(usuarioIngresado)
    if (inputUsuario.value == "administrador"){
        if( inputClave.value == "administrador"){
            // insertar pagina del admin
            window.location = "/pages/administracion.html";
        }else{
            alert("clave incorrecta");
        }
    }else if(inputUsuario.value == "usuario"){
        if( inputClave.value == "usuario"){
            // insertar pagina del usuario
            // window.location = "index.html";
        }else{
            alert("clave incorrecta");
        }
    }else{
        alert("usuario no encontrado");
    }
}