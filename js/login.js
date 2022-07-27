import {Usuario} from "./usuarioClass.js"

let inputUsuario = document.getElementById("inputUsuario")
let formLogin = document.getElementById("formLogin")
let claveLogin = document.getElementById("claveLogin") 
let usuarioLogin = document.getElementById("usuarioLogin")
let vectorUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey")) || []; //se usa el operador OR para cuando el primer valor sea nulo use el segundo valor

class UsuarioLogin {
    constructor(usuarioLogin, claveLogin){
        this.usuario = usuarioLogin;
        this.clave = claveLogin
    }
}

formLogin.addEventListener("submit", login);

export function login(e){
    let inputClave = document.getElementById("inputClave")
    e.preventDefault()
    let usuarioIngresado = new UsuarioLogin(inputUsuario.value, inputClave.value)
    console.log(usuarioIngresado)
    console.log(inputClave.value)
    if (inputUsuario.value == "administrador"){
        if( inputClave.value == "administrador"){
            // insertar pagina del admin
            window.location = "/pages/administracion.html";
        }else{
            contraseñaIncorrecta();
            // alert("clave incorrecta");
        }
    }else{
        console.log(vectorUsuarios)
        let usuarioEncontrado = vectorUsuarios.find((item)=>{return inputUsuario.value == item.usuario})
        console.log (usuarioEncontrado)
        if(usuarioEncontrado != undefined){
            if( inputClave.value == usuarioEncontrado.password){
                // insertar pagina del usuario
                window.location = "/index.html";
                localStorage.setItem("usuarioActivoKey", usuarioEncontrado.email)
            }else{
                contraseñaIncorrecta();
                // alert("clave incorrecta");
            }
        }
        else{
        alert("usuario no encontrado");
        }
    }
}

function contraseñaIncorrecta (){
    // e.preventDefault()
    claveLogin.innerHTML += `<p class="text-danger text-sm">Clave incorrecta</p>`
}