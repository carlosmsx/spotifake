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