import {login} from "./login.js"

let tablaMiListaCanciones = document.getElementById("tablaMiListaCanciones");
//recupero el paramentro
const parametro = window.location.search;
const urlParam = new URLSearchParams(parametro);
//Recupero la lista de canciones
let listaCanciones =
  JSON.parse(localStorage.getItem("vectorCancionesKey")) || [];
  //Recupero la cancion agregada
let cancionAgregada = listaCanciones.find((cancion) => {
  return cancion.codigo == urlParam.get("codigo");
});

console.log(cancionAgregada);
//traemos la lista de usuarios
let listaUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey")) || [];
//traemos el usuario logueado 
let usuarioActivo = localStorage.getItem('usuarioActivoKey') || 'nico@gmail.com';
console.log(usuarioActivo);
let indiceUsuario = listaUsuarios.findIndex((usuario) => {
  return usuario.email == usuarioActivo;
});

let indiceCancion = listaUsuarios[indiceUsuario].canciones.findIndex((cancion) => {
    return cancion.codigo == cancionAgregada.codigo;
  });

if(indiceCancion == -1){
    listaUsuarios[indiceUsuario].canciones.push(cancionAgregada);
}

localStorage.setItem('vectorUsuariosKey',JSON.stringify(listaUsuarios));
console.log(listaUsuarios);
listaUsuarios[indiceUsuario].canciones.forEach(cancion => {
    crearMiLista(cancion);
});

function crearMiLista(cancion){
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
      <button class="btn btnBorrar" onclick="borrarCancion('${cancion.codigo}')"><i class="bi bi-x-square"></i></button>
  </td>
  </tr>`

  tablaMiListaCanciones.innerHTML += newRow;
}
// borramos la cancion
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
            let vectorCancionesNuevo = listaUsuarios[indiceUsuario].canciones.filter((cancion)=>{ return cancion.codigo != codigo; });
            listaUsuarios[indiceUsuario].canciones = vectorCancionesNuevo;
            guardarMiListaCanciones();
            actualizarTablaMisCanciones();
            Swal.fire(
                'Cancion eliminada!',
                'La cancion fue eliminada.',
                'success'
            )
        }
    })
}


function guardarMiListaCanciones()
{
    localStorage.setItem('vectorUsuariosKey', JSON.stringify(listaUsuarios))   
}

function actualizarTablaMisCanciones()
{
    tablaMiListaCanciones.innerHTML = "";
    cargarMisCanciones();
}

function cargarMisCanciones()
{
    if (listaUsuarios[indiceUsuario].canciones.length  > 0)
    {
      listaUsuarios[indiceUsuario].canciones.forEach((item)=>{
            crearMiLista(item)
        })
    }
}

// fin nico