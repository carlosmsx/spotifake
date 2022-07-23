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

