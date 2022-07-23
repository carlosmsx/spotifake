import {campoRequerido,validarSoloLetras, cantidadCaracteres,validarGmail,validarfechaNacimiento,validarGenero,validarPais,funclave,validarClave,limpiarClaveValidada} from "./validaciones.js";

let nombre = document.getElementById('inputUser');
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
let btnRegistrarme = document.getElementById('registro');

nombre.addEventListener('blur',()=>{cantidadCaracteres(nombre,4,8)});
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

/*boton de enviar formulario*/
btnRegistrarme.addEventListener('submit',crearSerie);

function crearSerie(e){
    e.preventDefault();
    console.log('desde crear serie')
    Swal.fire(
        '',
        'Te registraste correctamente',
        'success'
      )
}
import { Usuario } from './usuarioClass.js';

//cargar vector usuarios
let vectorUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey")) || []; //se usa el operador OR para cuando el primer valor sea nulo use el segundo valor

//formulario
let inputUser = document.getElementById("inputUser");
let inputEmail4 = document.getElementById("inputEmail4");
let inputFechaNac = document.getElementById("inputFechaNac");
let inputSexo = document.getElementById("inputSexo");
let inputDireccion = document.getElementById("inputDireccion");
let inputDireccionNro = document.getElementById("inputDireccionNro");
let inputDireccionLoc = document.getElementById("inputDireccionLoc");
let inputPais = document.getElementById("inputPais");
let inputCP = document.getElementById("inputCP");
let inputPassword = document.getElementById("inputPassword");
let inputPassword2 = document.getElementById("inputPassword2"); //para validar password
let formulario = document.getElementById("formularioRegistro");

//TODO: agregar eventos de validaciones
//...
//...

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    //TODO: validar antes de guardar
    //...
    //... validar que el usuario no exista ya en vectorUsuarios
    //...
    let nuevoUsuario = new Usuario(inputUser.value, inputEmail4.value, inputFechaNac.value, 
        inputSexo.value, inputDireccion.value, inputDireccionNro.value, inputDireccionLoc.value, 
        inputPais.value, inputCP.value, inputPassword.value);
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

