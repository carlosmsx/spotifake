import {Cancion} from './cancionClass.js';
import { campoRequerido, cantidadCaracteres, validarUrl } from "./validaciones.js";
import { getUniqueId } from './guid.js';

//si hay algo en localstorage traer los datos, si no crear el arreglo vacio
let vectorCanciones = JSON.parse(localStorage.getItem("vectorCancionesKey")) || []; //se usa el operador OR para cuando el primer valor sea nulo use el segundo valor

//traemos los elementos que nos interesen

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

btnCrearCancion.addEventListener("click", ()=>{
    limpiarFormulario();
    codigo.value = getUniqueId();
    editando = false;
    modalAdminCancion.show();
})
//eventos de validaciones
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

cargaInicial()

function guardarCancion(e)
{
    e.preventDefault();
    //TODO: volver a validar todos los campos
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
    //limpiar el formulario
    limpiarFormulario();
    //guardar la lista de Canciones
    guardarListaCanciones();
    //cerrar modal
    modalAdminCancion.hide();
    //agrgar fila a tabla
    crearFila(nuevaCancion);
    //mostrar el ok
    Swal.fire('Cancion creada', 'La cancion fue creada correctamente', 'success');
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

function guardarListaCanciones()
{
    localStorage.setItem('vectorCancionesKey', JSON.stringify(vectorCanciones))   
}

function cargaInicial()
{
    if (vectorCanciones.length > 0)
    {
        vectorCanciones.forEach((item)=>{
            crearFila(item)
        })
    }
}

function crearFila(cancion)
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

function actualizarTabla()
{
    tablaCanciones.innerHTML = "";
    cargaInicial();
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
    //actualizar elemento del vector
    vectorCanciones[index].titulo = titulo.value;
    vectorCanciones[index].artista = artista.value;
    vectorCanciones[index].categoria = categoria.value;
    vectorCanciones[index].imagen = imagen.value;
    vectorCanciones[index].duracion = duracion.value;
    vectorCanciones[index].cancion = cancion.value;
    //guardar en localstorage
    guardarListaCanciones();
    //actualizar la tabla
    actualizarTabla();
    //indicar al usuario
    Swal.fire('Cancion actualizada', 'La cancion fue actualizada correctamente', 'success')
    //cerrar ventana modal
    modalAdminCancion.hide();
}
