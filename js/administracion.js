import {Cancion} from './cancionClass.js';
import { campoRequerido, cantidadCaracteres, validarUrl } from "./validaciones.js";
import { getUniqueId } from './guid.js';
import {login, cambioNav, cerrarSesion} from "./login.js"


let vectorCanciones = JSON.parse(localStorage.getItem("vectorCancionesKey")) || []; 
let vectorUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey")) || [];

let codigo = document.getElementById("codigo")
let titulo = document.getElementById("titulo")
let artista = document.getElementById("artista")
let categoria = document.getElementById("categoria")
let imagen = document.getElementById("imagen")
let duracion = document.getElementById("duracion")
let cancion = document.getElementById("cancion")

let editando = false; 
let formulario = document.getElementById("formCancion")
const modalAdminCancion = new bootstrap.Modal(document.getElementById("modalCancion"))
let btnCrearCancion = document.getElementById("btnCrearCancion")
let tablaCanciones = document.getElementById("tablaCanciones")
let tablaUsuarios = document.getElementById("tablaUsuarios")

cambioNav();

btnCrearCancion.addEventListener("click", ()=>{
    limpiarFormulario();
    codigo.value = getUniqueId();
    editando = false;
    modalAdminCancion.show();
})

codigo.addEventListener("blur", ()=>{ campoRequerido(codigo); });
codigo.addEventListener("keyDown", ()=>{ cantidadCaracteres(codigo, 1, 5); });

titulo.addEventListener("blur", ()=>{ campoRequerido(titulo); });
titulo.addEventListener("keyDown", ()=>{ cantidadCaracteres(titulo, 2, 50); });

artista.addEventListener("blur", ()=>{ campoRequerido(artista); });
artista.addEventListener("keyDown", ()=>{ cantidadCaracteres(artista, 2, 200); });

imagen.addEventListener("blur", ()=>{ campoRequerido(imagen); });
imagen.addEventListener("keyDown", ()=>{ cantidadCaracteres(imagen, 2, 120); });
imagen.addEventListener("blur", ()=>{ validarUrl(imagen); });

categoria.addEventListener("blur", ()=>{ campoRequerido(categoria); });
categoria.addEventListener("change", ()=>{ campoRequerido(categoria, 2, 200); });

duracion.addEventListener("blur", ()=>{ campoRequerido(duracion); });
duracion.addEventListener("change", ()=>{ campoRequerido(duracion, 2, 200); });

cancion.addEventListener("blur", ()=>{ campoRequerido(cancion); });
cancion.addEventListener("change", ()=>{ campoRequerido(cancion, 2, 200); });
cancion.addEventListener("blur", ()=>{ validarUrl(cancion); });

formulario.addEventListener('submit', guardarCancion)

cargarCanciones()
cargarUsuarios()

function guardarCancion(e)
{
    e.preventDefault();
    
    if (editando)
    {
        guardarEdicionCancion();
    }
    else
    {
        crearCancion();
    }
}

function crearCancion()
{
    let nuevaCancion = new Cancion(codigo.value, titulo.value, artista.value, categoria.value, imagen.value, duracion.value, cancion.value);
    vectorCanciones.push(nuevaCancion);
    
    limpiarFormulario();
    
    guardarListaCanciones();
    
    modalAdminCancion.hide();
    
    renderFilaCancion(nuevaCancion);
    
    Swal.fire('Cancion creada', 'La cancion fue creada correctamente', 'success');
}

function limpiarFormulario()
{
    formulario.reset(); 
    let inputs = formulario.querySelectorAll(".form-control")
    inputs.forEach((item)=>{
        item.className = "form-control";
    })
}

function guardarListaCanciones()
{
    localStorage.setItem('vectorCancionesKey', JSON.stringify(vectorCanciones))   
}

function guardarListaUsuarios()
{
    localStorage.setItem('vectorUsuariosKey', JSON.stringify(vectorUsuarios))   
}

function cargarCanciones()
{
    if (vectorCanciones.length > 0)
    {
        vectorCanciones.forEach((item)=>{
            renderFilaCancion(item)
        })
    }
}

function cargarUsuarios()
{
    if (vectorUsuarios.length > 0)
    {
        vectorUsuarios.forEach((item)=>{
            renderFilaUsuario(item)
        })
    }
}

function renderFilaCancion(cancion)
{
    let newRow = 
    `<tr>
    <!--th scope="row">${cancion.codigo }</!--th-->
    <td>${cancion.titulo}</td>
    <td><p class="adminTrim">${cancion.artista}</p></td>
    <td>${cancion.categoria}</td>
    <td><p class="adminTrim">${cancion.imagen}</p></td>
    <td>${cancion.duracion}</td>
    <td><p class="adminTrim">${cancion.cancion}</p></td>
    <td>
        <button class="btn btnEditar" onclick="modificarCancion('${cancion.codigo}')"><i class="bi bi-pencil-square"></i></button>
        <button class="btn btnBorrar" onclick="borrarCancion('${cancion.codigo}')"><i class="bi bi-x-square"></i></button>
    </td>
    </tr>`

    tablaCanciones.innerHTML += newRow
}

function renderFilaUsuario(usuario)
{
    let newRow = 
    `<tr>
    <td>${usuario.usuario}</td>
    <td>${usuario.email}</td>
    <td><p class="adminTrim">${usuario.nombre}</p></td>
    <td>${usuario.fechaNac}</td>
    <td>usuario</td>
    <td>
        <button class="btn btnBorrar" onclick="borrarUsuario('${usuario.email}')"><i class="bi bi-x-square"></i></button>
    </td>
    </tr>`

    tablaUsuarios.innerHTML += newRow
}

window.borrarCancion = function(codigo)
{
    Swal.fire({
        title: 'Está seguro de eliminar la cancion?',
        text: "Tenga en cuenta que no puede revertir este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            let vectorCancionesNuevo = vectorCanciones.filter((cancion)=>{ return cancion.codigo != codigo; });
            vectorCanciones = vectorCancionesNuevo;
            guardarListaCanciones();
            actualizarTabla();
            Swal.fire(
                'Cancion eliminada!',
                'La cancion fue eliminada.',
                'success'
            )
        }
    })
}

window.borrarUsuario = function(email)
{
    Swal.fire({
        title: 'Está seguro de eliminar al usuario?',
        text: "Tenga en cuenta que no puede revertir este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            let vectorUsuariosNuevo = vectorUsuarios.filter((usuario)=>{ return usuario.email != email; });
            vectorUsuarios = vectorUsuariosNuevo;
            guardarListaUsuarios();
            actualizarTablaUsuarios();
            Swal.fire(
                'Usuario eliminado!',
                'El usuario fue eliminado.',
                'success'
            )
        }
    })
}

function actualizarTabla()
{
    tablaCanciones.innerHTML = "";
    cargarCanciones();
}

function actualizarTablaUsuarios()
{
    tablaUsuarios.innerHTML = "";
    cargarUsuarios();
}

window.modificarCancion = (codigoCancion)=>
{
    let cancionEditada = vectorCanciones.find((cancion)=>{ return cancion.codigo == codigoCancion; });

    codigo.value = cancionEditada.codigo;
    titulo.value = cancionEditada.titulo;
    artista.value = cancionEditada.artista;
    categoria.value = cancionEditada.categoria;
    imagen.value = cancionEditada.imagen;
    duracion.value = cancionEditada.duracion;
    cancion.value = cancionEditada.cancion;

    editando = true;
    modalAdminCancion.show();
}

function guardarEdicionCancion()
{
    let index = vectorCanciones.findIndex((cancion)=>{return cancion.codigo == codigo.value; });
    
    vectorCanciones[index].titulo = titulo.value;
    vectorCanciones[index].artista = artista.value;
    vectorCanciones[index].categoria = categoria.value;
    vectorCanciones[index].imagen = imagen.value;
    vectorCanciones[index].duracion = duracion.value;
    vectorCanciones[index].cancion = cancion.value;
    
    guardarListaCanciones();
    
    actualizarTabla();
    
    Swal.fire('Cancion actualizada', 'La cancion fue actualizada correctamente', 'success')
    
    modalAdminCancion.hide();
}

window.cerrarSesion = () => {
    cerrarSesion();
  };
  
  formLogin.addEventListener("submit", login);
  



