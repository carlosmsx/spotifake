import {Cancion} from './cancionClass.js';
import { campoRequerido, cantidadCaracteres } from "./validaciones.js";
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

//ya fueron chequeados todos uno por uno... console.log(codigo)

let formulario = document.getElementById("formCancion")
const modalAdminCancion = new bootstrap.Modal(document.getElementById("modalCancion"))
let btnCrearCancion = document.getElementById("btnCrearCancion")
let tablaCanciones = document.getElementById("tablaCanciones")

btnCrearCancion.addEventListener("click", ()=>{
    limpiarFormulario()
    //asignar codigo unico 
    codigo.value = getUniqueId();
    modalAdminCancion.show()
})

//validaciones
codigo.addEventListener("blur", ()=>{ campoRequerido(codigo); });
codigo.addEventListener("keyDown", ()=>{ cantidadCaracteres(codigo, 1, 5); });

titulo.addEventListener("blur", ()=>{ campoRequerido(titulo); });
titulo.addEventListener("keyDown", ()=>{ cantidadCaracteres(titulo, 2, 50); });

artista.addEventListener("blur", ()=>{ campoRequerido(artista); });
artista.addEventListener("keyDown", ()=>{ cantidadCaracteres(artista, 2, 200); });

imagen.addEventListener("blur", ()=>{ campoRequerido(imagen); });
imagen.addEventListener("keyDown", ()=>{ cantidadCaracteres(imagen, 2, 120); });

categoria.addEventListener("blur", ()=>{ campoRequerido(categoria); });
categoria.addEventListener("change", ()=>{ campoRequerido(categoria, 2, 200); });


formulario.addEventListener('submit', crearCancion)

cargaInicial()

function crearCancion(e)
{
    e.preventDefault();
    //TODO: volver a validar todos los campos
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
    <th scope="row">${cancion.codigo }</th>
    <td>${cancion.titulo}</td>
    <td>${cancion.artista}</td>
    <td>${cancion.categoria}</td>
    <td><p>${cancion.imagen}</p></td>
    <td>${cancion.duracion}</td>
    <td><p>${cancion.cancion}</p></td>
    <td class="d-flex">
        <button class="btn btn-sm btn-warning me-1" onclick="modificarCancion('${cancion.codigo}')"><i class="bi bi-pencil-square"></i></button>
        <button class="btn btn-sm btn-danger" onclick="borrarCancion('${cancion.codigo}')"><i class="bi bi-x-square"></i></button>
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
            borrarTabla();
            cargaInicial();
            Swal.fire(
                'Cancion eliminada!',
                'La cancion fue eliminada.',
                'success'
            )
        }
    })
}

function borrarTabla()
{
    tablaCanciones.innerHTML = "";
}

window.modificarCancion = function(codigo)
{
    console.log(`modificar cancion ${codigo}`)
}