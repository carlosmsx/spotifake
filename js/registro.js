import { Usuario } from './usuarioClass.js';
import {campoRequerido,validarSoloLetras, cantidadCaracteres,validarGmail,validarfechaNacimiento,validarGenero,validarPais,funclave,validarClave,limpiarClaveValidada} from "./validaciones.js";
import {login} from "./login.js"

let vectorUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey")) || []; 
let formLogin = document.getElementById("formLogin")
let usuarioActivo  = localStorage.getItem("usuarioActivoKey") || null; 


let nombre = document.getElementById('inputNombre');
let usuario = document.getElementById('inputUser');
let gmail = document.getElementById('inputEmail4');
let fechaNacimiento = document.getElementById('inputFechaNac');
let genero = document.getElementById('inputSexo');
let calle = document.getElementById('inputDireccion');
let nroCalle = document.getElementById('inputDireccionNro');
let provincia = document.getElementById('inputDireccionLoc');
let pais = document.getElementById('inputPais');
let codigoPostal = document.getElementById('inputCP');
let clave =  document.getElementById('inputPassword');
let clave2 = document.getElementById('inputPassword2');

//validaciones por evento
nombre.addEventListener('blur',()=>{cantidadCaracteres(nombre,5,30)});
usuario.addEventListener('blur',()=>{cantidadCaracteres(usuario,4,8)});
usuario.addEventListener('blur', ()=>{validarUsuarioRepetido(usuario)});
gmail.addEventListener('blur',()=>{validarGmail(gmail)});
gmail.addEventListener('blur',()=>{validarEmailRepetido(gmail)});
gmail.addEventListener("keyDown", ()=>{ campoRequerido(gmail); });
fechaNacimiento.addEventListener('blur',()=>{validarfechaNacimiento(fechaNacimiento)});
fechaNacimiento.addEventListener("keyDown", ()=>{ campoRequerido(fechaNacimiento); });
genero.addEventListener('change',()=>{validarGenero(genero)});
genero.addEventListener("blur", ()=>{ campoRequerido(genero); });
genero.addEventListener("keyDown", ()=>{ campoRequerido(genero); });
calle.addEventListener('blur',()=>{validarSoloLetras(calle,4,20)});
nroCalle.addEventListener('blur',()=>{cantidadCaracteres(nroCalle,0,6)});
provincia.addEventListener('blur',()=>{validarSoloLetras(provincia,4,30)});
pais.addEventListener('blur',()=>{validarPais(pais)});
codigoPostal.addEventListener('blur',()=>{cantidadCaracteres(codigoPostal,4,4)});
clave.addEventListener('blur',()=>{funclave(clave)});
clave2.addEventListener('blur',()=>{validarClave(clave,clave2)});
clave2.addEventListener('focus',()=>{limpiarClaveValidada(clave2)});

let formulario = document.getElementById("registro");
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    
    if (validacionGeneral() == false)
        return;

    let nuevoUsuario = new Usuario(nombre.value, usuario.value, gmail.value, 
        fechaNacimiento.value, genero.value, calle.value, nroCalle.value, 
        provincia.value, pais.value, codigoPostal.value, clave.value);
    vectorUsuarios.push(nuevoUsuario);

    
    guardarVectorUsuarios();

    
    limpiarFormulario();

    
    Swal.fire('Registración exitosa', 'Los datos de usuario se registraron correctamente', 'success');
});

function validacionGeneral()
{
    return cantidadCaracteres(nombre,5,30)
        && cantidadCaracteres(usuario,4,8)
        && validarUsuarioRepetido(usuario)
        && validarGmail(gmail)
        && campoRequerido(gmail)
        && validarEmailRepetido(gmail)
        && validarfechaNacimiento(fechaNacimiento)
        && campoRequerido(fechaNacimiento)
        && validarGenero(genero)
        && campoRequerido(genero)
        && campoRequerido(genero)
        && validarSoloLetras(calle,4,20)
        && cantidadCaracteres(nroCalle,0,6)
        && validarSoloLetras(provincia,4,30) 
        && validarPais(pais)
        && cantidadCaracteres(codigoPostal,4,4)
        && validarClave(clave,clave2)
        && funclave(clave);
}


function validarUsuarioRepetido(input)
{
    let usuarioRepetido = vectorUsuarios.find((item)=>{ return item.usuario == input.value});
    if (usuarioRepetido == undefined )
    {
        input.className = " form-control is-valid";
        return true;
    } else {
        input.className = " form-control is-invalid";
        return false;
    }
}

function validarEmailRepetido(input)
{
    let usuarioRepetido = vectorUsuarios.find((item)=>{ return item.email == input.value});
    if (usuarioRepetido == undefined )
    {
        input.className = " form-control is-valid";
        return true;
    } else {
        input.className = " form-control is-invalid";
        return false;
    }
}

function guardarVectorUsuarios()
{
    localStorage.setItem('vectorUsuariosKey', JSON.stringify(vectorUsuarios))   
}

function limpiarFormulario()
{
    formulario.reset(); 
    
    let inputs = formulario.querySelectorAll(".form-control")
    inputs.forEach((item)=>{
        item.className = "form-control";
    })
}

formLogin.addEventListener("submit", login);