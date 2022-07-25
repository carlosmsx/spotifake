import { Usuario } from './usuarioClass.js';
import {campoRequerido,validarSoloLetras, cantidadCaracteres,validarGmail,validarfechaNacimiento,validarGenero,validarPais,funclave,validarClave,limpiarClaveValidada} from "./validaciones.js";

//cargar vector usuarios
let vectorUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey")) || []; //se usa el operador OR para cuando el primer valor sea nulo use el segundo valor
let usuarioActivo  = JSON.parse(localStorage.getItem("usuarioActivoKey")) || null; //carga el usuario logueado

//form controls
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
gmail.addEventListener('blur',()=>{validarGmail(gmail)});
gmail.addEventListener("keyDown", ()=>{ campoRequerido(gmail); });
fechaNacimiento.addEventListener('blur',()=>{validarfechaNacimiento(fechaNacimiento)});
fechaNacimiento.addEventListener("keyDown", ()=>{ campoRequerido(fechaNacimiento); });
genero.addEventListener('change',()=>{validarGenero(genero)});
genero.addEventListener("blur", ()=>{ campoRequerido(genero); });
genero.addEventListener("keyDown", ()=>{ campoRequerido(genero); });
calle.addEventListener('blur',()=>{validarSoloLetras(calle,4,20)});
nroCalle.addEventListener('blur',()=>{cantidadCaracteres(nroCalle)});
provincia.addEventListener('blur',()=>{validarSoloLetras(provincia,4,30)});
pais.addEventListener('blur',()=>{validarPais(pais)});
codigoPostal.addEventListener('blur',()=>{cantidadCaracteres(codigoPostal,4,4)});
clave.addEventListener('blur',()=>{funclave(clave)});
clave2.addEventListener('blur',()=>{validarClave(clave,clave2)});
clave2.addEventListener('focus',()=>{limpiarClaveValidada(clave2)});

let formulario = document.getElementById("registro");
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    //TODO: validar antes de guardar
    //...
    //... validar que el usuario no exista ya en vectorUsuarios
    //...

    let nuevoUsuario = new Usuario(nombre.value, usuario.value, gmail.value, 
        fechaNacimiento.value, genero.value, calle.value, nroCalle.value, 
        provincia.value, pais.value, codigoPostal.value, clave.value);
    vectorUsuarios.push(nuevoUsuario);

    //Guardar en local storage
    guardarVectorUsuarios();

    //Limpiar formulario
    limpiarFormulario();

    //mostrar el ok
    Swal.fire('Registración exitosa', 'Los datos de usuario se registraron correctamente', 'success');
});

function guardarVectorUsuarios()
{
    localStorage.setItem('vectorUsuariosKey', JSON.stringify(vectorUsuarios))   
}

function limpiarFormulario()
{
    formulario.reset(); //solo resetea el value de los campos del formulario

    //quitar clases is-valid/is-invalid
    let inputs = formulario.querySelectorAll(".form-control")
    inputs.forEach((item)=>{
        item.className = "form-control";
    })
}
